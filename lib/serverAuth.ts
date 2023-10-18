import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import prismadb from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions);

	//does session or user or email exist?
	if (!session?.user?.email) {
		throw new Error('Not signed in');
	}

	//if they exist, fetch current user
	const currentUser = await prismadb.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	//if error fetching current user, throw error
	if (!currentUser) {
		throw new Error('Not signed in');
	}

	return { currentUser };
};

export default serverAuth;

//use in api routes to check if we are logged in to avoid checking this multiple times.
