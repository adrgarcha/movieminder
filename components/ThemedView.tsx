import { View, type ViewProps } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '@/lib/utils';

export function ThemedView({ className, ...rest }: ViewProps) {
   const { isDarkColorScheme } = useColorScheme();

   return <View className={cn(isDarkColorScheme ? 'bg-zinc-900' : 'bg-zinc-200', className)} {...rest} />;
}
