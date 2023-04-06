import { Sendable } from "@/types/types";
import db from "@/util/db";
import { getResume } from "@/lib/getResume";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { resume, ...rest } = req.body as Sendable;

  if (!resume) {
    return new NextResponse(
      JSON.stringify({
        message: "Resume is required",
      }),
      {
        status: 400,
      }
    );
  }

  const session = await getServerSession();

  const resumeJSON = await getResume(resume);

  if (!resumeJSON) {
    return new NextResponse(
      JSON.stringify({
        message: "Unable to parse resume",
      }),
      {
        status: 400,
      }
    );
  }

  if (session?.user?.email) {
    const user = await db.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        info: {
          create: {
            ...rest,
            resume: {
              create: {
                ...resumeJSON,
              },
            },
          },
        },
        infoCompleted: true
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Success",
        user,
      }),
      {
        status: 200,
      }
    );
  }
};
