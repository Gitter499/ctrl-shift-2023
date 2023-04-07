import { getServerSession } from "next-auth/next";
import db from "@/util/db";
import { Prisma } from "@prisma/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getUser = async (email: string, include?: Prisma.UserInclude) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    include,
  });

  return user;
};
