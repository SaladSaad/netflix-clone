import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  //does session or user or email exist?
  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  //if they exist, fetch current user
  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  //if error fetching current user, throw error
  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;

//use in api routes to check if we are logged in to avoid checking this multiple times.
