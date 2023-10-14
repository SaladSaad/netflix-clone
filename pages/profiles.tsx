import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

//if trying to access /profiles without having signed in, redirect to login page
export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

const Profiles = () => {
	return (
		<div>
			<p className='text-white text-4xl'>Profiles</p>
		</div>
	);
};

export default Profiles;
