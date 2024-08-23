import { IMovie } from '@/api/models/Movie';
import { useRefreshStore } from '@/components/CustomRefreshControl';
import { useEffect, useState } from 'react';

export default function useGetAllMovies({ queryParams }: { queryParams?: string }) {
   const [movies, setMovies] = useState<IMovie[]>([]);
   const refreshing = useRefreshStore(state => state.refreshing);

   useEffect(() => {
      async function getAllMovies() {
         const response = await fetch(`http://192.168.1.138:3000/movies${queryParams ? `?${queryParams}` : ''}`);
         const data = await response.json();
         setMovies(data);
      }

      getAllMovies();
   }, [queryParams, refreshing]);

   return { movies };
}
