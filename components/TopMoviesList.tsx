import useGetAllMovies from '@/hooks/useGetAllMovies';
import { FlatList } from 'react-native';
import MoviePoster from './MoviePoster';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function TopMoviesList({ title, category }: { title: string; category: string }) {
   const { movies } = useGetAllMovies({ queryParams: `category=${category}` });
   return (
      <ThemedView className="py-2 px-1">
         <ThemedText className="pb-1 font-bold">{title}</ThemedText>
         <FlatList
            data={movies}
            renderItem={({ item }) => <MoviePoster item={item} width={125} height={175} />}
            keyExtractor={movie => movie._id}
            ItemSeparatorComponent={() => <ThemedView className="w-2" />}
            horizontal
         />
      </ThemedView>
   );
}
