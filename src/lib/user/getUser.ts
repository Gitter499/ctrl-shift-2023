import { getServerSession  } from "next-auth/next";
import db from "@/util/db";
import { Prisma } from "@prisma/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getUser = async (include?: Prisma.UserInclude) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email!!,
    },
    include,
  });

  return user;
};
