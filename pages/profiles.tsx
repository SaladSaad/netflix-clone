import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

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
	const router = useRouter();
	const { data: user } = useCurrentUser();

	return (
		<div className='flex items-center h-full justify-center'>
			<div className='flex flex-col'>
				<h1 className='text-white text-3xl text-center md:text-6xl'>
					Who is watching?
				</h1>
				<div className='flex items-center justify-center gap-8 mt-10'>
					<div onClick={() => router.push('/')}>
						<div className='group flex-row w-44 mx-auto'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
								<img
									className='bg-blue-600'
									src='/images/default-horse.png'
									alt='Profile image'
								/>
							</div>
							<div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white capitalize'>
								{user?.name}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
