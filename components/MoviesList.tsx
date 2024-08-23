import splash from '@/assets/images/splash.png';
import useGetAllMovies from '@/hooks/useGetAllMovies';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Image, useWindowDimensions } from 'react-native';

export default function MoviesList({ title }: { title: string }) {
   const { movies } = useGetAllMovies({ queryParams: `title=${title}` });
   const [refreshing, setRefreshing] = useState(false);
   const { width } = useWindowDimensions();

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1000);
   }, []);

   return (
      <FlatList
         data={movies}
         renderItem={({ item }) => (
            <Link href="/(tabs)/explore">
               <Image source={{ uri: item.poster }} defaultSource={splash} width={width / 3} height={200} />
            </Link>
         )}
         keyExtractor={movie => movie._id}
         refreshing={refreshing}
         onRefresh={onRefresh}
         numColumns={3}
         className="my-2 mx-1 h-full"
      />
   );
}
