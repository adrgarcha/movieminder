import MoviesList from '@/components/MoviesList';
import { ThemedView } from '@/components/ThemedView';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDebouncedCallback } from 'use-debounce';

export default function ExploreScreen() {
   const { top, bottom } = useSafeAreaInsets();
   const [title, setTitle] = useState('');
   const onChangeText = useDebouncedCallback((text: string) => setTitle(text), 300);

   return (
      <ThemedView style={{ marginTop: top, marginBottom: bottom }}>
         <Input placeholder="🔍 Search..." defaultValue={title} onChangeText={onChangeText} />
         <MoviesList title={title} />
      </ThemedView>
   );
}
