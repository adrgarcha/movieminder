import { IMovie } from '@/api/models/Movie';
import { API_URL } from '@/constants/ApiUrl';
import { useEffect, useState } from 'react';

export default function useGetMovie({ id }: { id: string }) {
   const [movie, setMovie] = useState<IMovie | null>(null);

   useEffect(() => {
      fetch(`${API_URL}/movies/${id}`)
         .then(response => response.json())
         .then(setMovie)
         .catch(console.error);
   }, [id]);

   return { movie };
}
