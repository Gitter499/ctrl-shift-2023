import { Sendable } from "@/types/types";
import db from "@/util/db";
import { getResume } from "@/lib/getResume";
import { getServerSession } from "next-auth";

import { NextApiRequest, NextApiResponse, NextConfig } from "next";
import formidable from "formidable";
import { authOptions } from "../auth/[...nextauth]";

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    multiples: true,
  });

  const { resume, birthday, ...rest } = (await new Promise(
    (resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            bio: fields.bio,
            location: fields.location,
            website: fields.website,
            birthday: fields.birthday,
            resume: files.resume,
          });
        }
      });
    }
  )) as unknown as Sendable;

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  if (!resume) {
    return res.status(400).json({
      message: "Resume is required",
    });
  }

  const session = await getServerSession(req, res, authOptions);

  const resumeJSON = await getResume(resume);

  if (!resumeJSON) {
    return res.status(400).json({
      message: "Resume is not valid",
    });
  }

  if (session?.user?.email) {
    const user = await db.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        info: {
          create: {
            birthday: new Date(birthday),
            ...rest,
            resume: {
              create: {
                ...resumeJSON,
              },
            },
          },
        },
        infoCompleted: true,
      },
    });

    return res.status(200).json({
      message: "User info updated",
      user,
    });
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default handler;
