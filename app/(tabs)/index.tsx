import { ThemedText } from '@/components/ThemedText';
import { Home } from 'lucide-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
   return (
      <SafeAreaView>
         <View className="flex-row gap-x-1">
            <Home color="black" />
            <ThemedText>Home</ThemedText>
         </View>
      </SafeAreaView>
   );
}
