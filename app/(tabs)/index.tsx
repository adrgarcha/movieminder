import CustomRefreshControl from '@/components/CustomRefreshControl';
import TopMoviesList from '@/components/TopMoviesList';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
   const { top } = useSafeAreaInsets();
   return (
      <ScrollView refreshControl={<CustomRefreshControl />} style={{ marginTop: top }}>
         <TopMoviesList title="Top 10 Most Recent" category="recent" />
         <TopMoviesList title="Top 10 Best IMDB Rated" category="imdb" />
         <TopMoviesList title="Top 10 Best Rotten Tomatoes from Critic" category="tomatoes-critic" />
         <TopMoviesList title="Top 10 Best Rotten Tomatoes from Viewer" category="tomatoes-viewer" />
      </ScrollView>
   );
}
