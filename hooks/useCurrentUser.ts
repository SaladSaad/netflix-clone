import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

//swr is a vercel developed package for fatch data. like react query.
//the first time we fetch this /api/current, no matter where we use the useCurrentUser, it is not going to fetch it again if data exists. Don't need state management to manage user with this package.

const useCurrentUser = () => {
	const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useCurrentUser;
