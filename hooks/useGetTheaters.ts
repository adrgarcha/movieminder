import { ITheater } from '@/api/models/Theater';
import { useEffect, useState } from 'react';

export default function useGetTheaters() {
   const [theaters, setTheaters] = useState<ITheater[]>([]);

   useEffect(() => {
      async function getTheaters() {
         const response = await fetch('http://192.168.1.138:3000/theaters');
         const data = await response.json();
         setTheaters(data);
      }

      getTheaters();
   }, []);

   return { theaters };
}
