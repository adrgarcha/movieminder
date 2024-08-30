import useGetAllMovies from '@/hooks/useGetAllMovies';
import { useCallback, useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import MoviePoster from './MoviePoster';

export default function MoviesList({ title }: { title: string }) {
   const { movies } = useGetAllMovies({ queryParams: `title=${title}` });
   const { width } = useWindowDimensions();
   const [refreshing, setRefreshing] = useState(false);

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1000);
   }, []);

   return (
      <FlatList
         data={movies}
         renderItem={({ item }) => <MoviePoster item={item} width={width / 3} height={200} />}
         keyExtractor={movie => movie._id}
         refreshing={refreshing}
         onRefresh={onRefresh}
         numColumns={3}
         className="my-2 mx-1 h-full"
      />
   );
}
