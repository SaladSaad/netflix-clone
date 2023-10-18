import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

//if id provided, fetch. otherwise, fetch nothing.
const useMovie = (id?: string) => {
	const { data, error, isLoading } = useSWR(
		id ? `/api/movies/${id}` : null,
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
	};
};

export default useMovie;
