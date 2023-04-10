import { Resume } from "@prisma/client";
import { LLMChain } from "langchain";
import { ChatOpenAI } from "langchain/chat_models";
import { Document } from "langchain/document";
import  { DocxLoader } from "langchain/document_loaders";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";

export const getResume = async (resume: any) => {

  console.log(resume.filepath)
 
  const loader = new DocxLoader(resume.filepath.toString())

 
  const docs = await loader.load()

  console.log(docs)


  const chat = new ChatOpenAI({
    temperature: 0,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a helpful assistant that turns PDF files into text. Find the following fields in the PDF and return them as a pure JSON object. Only return pure JSON, that could be parsed. Do not return additional data that can't be parsed. If you can't find a field, put No <field-name>. Follow this schema: {schema}"
    ),
    HumanMessagePromptTemplate.fromTemplate("{input_documents}"),
  ]);

  const chain = new LLMChain({
    llm: chat,
    prompt: chatPrompt,
  });

 try {
  const response = await chain.call({
    input_documents: JSON.stringify(docs),
    schema: `{
        title: string | null;
        summary: string | null;
        skills: string[];
        education: string[];
        work: string[];
    }`,
  });

  console.log(response.text);

  const resumeJSON = JSON.parse(response.text) as Resume;

  return resumeJSON;

 } catch (e) {
    console.log(e)
    
 }

  
};
