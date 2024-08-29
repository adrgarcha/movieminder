import { ITheater } from '@/api/models/Theater';
import { API_URL } from '@/constants/ApiUrl';
import { useEffect, useState } from 'react';

export default function useGetTheaters() {
   const [theaters, setTheaters] = useState<ITheater[]>([]);

   useEffect(() => {
      fetch(`${API_URL}/theaters`)
         .then(response => response.json())
         .then(setTheaters)
         .catch(console.error);
   }, []);

   return { theaters };
}
