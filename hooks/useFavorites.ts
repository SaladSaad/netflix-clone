import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useFavorites = () => {
	const { data, error, isLoading, mutate } = useSWR(
		'/api/loadFavorites',
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useFavorites;
