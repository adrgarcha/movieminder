import useGetAllMovies from '@/hooks/useGetAllMovies';
import { Link } from 'expo-router';
import { FlatList, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function TopMoviesList({ title, category }: { title: string; category: string }) {
   const { movies } = useGetAllMovies({ queryParams: `category=${category}` });
   return (
      <ThemedView className="py-2 px-1">
         <ThemedText className="pb-1 font-bold">{title}</ThemedText>
         <FlatList
            data={movies}
            renderItem={({ item }) => (
               <Link href="/(tabs)/">
                  <Image source={{ uri: item.poster }} className="w-[125] h-[175]" />
               </Link>
            )}
            keyExtractor={movie => movie._id}
            ItemSeparatorComponent={() => <ThemedView className="w-2" />}
            horizontal
         />
      </ThemedView>
   );
}
