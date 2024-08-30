import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useGetMovie from '@/hooks/useGetMovie';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';

export default function Movie() {
   const { id }: { id: string } = useLocalSearchParams();
   const navigation = useNavigation();
   const { movie } = useGetMovie({ id });
   const [moviePlot, setMoviePlot] = useState<string>('');

   useEffect(() => {
      navigation.setOptions({ title: `${movie?.title}`, headerBackTitle: 'Back' });
      setMoviePlot(movie?.plot!);
   }, [navigation, movie]);

   return (
      <ThemedView>
         <ScrollView className="h-full p-4">
            <ThemedView className="flex-row gap-x-2">
               <Image source={{ uri: movie?.poster }} width={150} height={200} />
               <ThemedView className="flex flex-col gap-y-2">
                  <ThemedText className="font-bold">{movie?.title}</ThemedText>
                  <ThemedView className="flex-row gap-x-2">
                     {movie?.genres &&
                        movie?.genres.map(genre => (
                           <ThemedText key={genre} className="font-medium text-zinc-400">
                              {genre}
                           </ThemedText>
                        ))}
                  </ThemedView>
                  <ThemedText className="font-medium text-zinc-400">{movie?.year}</ThemedText>
                  {movie?.rated && <ThemedText className="font-medium text-zinc-400">Rated: {movie?.rated}</ThemedText>}
               </ThemedView>
            </ThemedView>
            <ThemedText
               onPress={() => setMoviePlot(moviePlot === movie?.plot ? movie.fullplot! : movie?.plot!)}
               className="mt-4 font-semibold text-sm text-zinc-100">
               {moviePlot}
            </ThemedText>
         </ScrollView>
      </ThemedView>
   );
}
