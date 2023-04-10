## Welcome to Yes!

The AI powered business and networking platform


## Note to readers

Yes! is in active development. It uses Next 13 with app directory, a very experimental but cutting edge feature of an already cutting edge framework.

Despite having animations, Yes! is extremely fast. Most of the pages are React Server Components


Additionally, Yes! uses the latest GPT 3.5-turbo models by OpenAI. 

## Working features

All the pages on Yes! work, profile page has a CSS bug that I am still trying to fix but other than that they work without issue (that I have noticed)

Authentication with Github fully works on yes! Additionally, the AI resume analysis has successfully been tested, a monumental feature that took a lot of effort.

Currently, this won't work on the deployed version of the site since I have not provided an API key to that version (for abuse reasons). In order to run the AI resume analysis, run locally and provide your own API key. Feel free to reach out for a demo.

The simulated chat is the one planned feature that is still a work-in-progress due to it's complexity. 


## How to run locally

1. clone this repo
2. Create .env (follow guide below)
3. `$ next build`
4.  `$ npm start`

### ENV guide

DATABASE_URL

GITHUB_CLIENT_ID 

GITHUB_CLIENT_SECRET 


SECRET

OPENAI_API_KEY 

In order to run fully locally, you need to provide all of the above. If you'd like to see a demo with my API key, please contact me at rafayel.amirkhanyan@gmail.com

