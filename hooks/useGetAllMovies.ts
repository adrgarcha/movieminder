import { IMovie } from '@/api/models/Movie';
import { useRefreshStore } from '@/components/CustomRefreshControl';
import { API_URL } from '@/constants/ApiUrl';
import { useEffect, useState } from 'react';

export default function useGetAllMovies({ queryParams }: { queryParams?: string }) {
   const [movies, setMovies] = useState<IMovie[]>([]);
   const refreshing = useRefreshStore(state => state.refreshing);

   useEffect(() => {
      fetch(`${API_URL}/movies${queryParams ? `?${queryParams}` : ''}`)
         .then(response => response.json())
         .then(setMovies)
         .catch(console.error);
   }, [queryParams, refreshing]);

   return { movies };
}
