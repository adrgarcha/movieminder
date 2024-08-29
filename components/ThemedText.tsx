import { Text, type TextProps } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '@/lib/utils';

export function ThemedText({ className, ...rest }: TextProps) {
   const { isDarkColorScheme } = useColorScheme();

   return <Text className={cn('text-lg', isDarkColorScheme ? 'text-white' : 'text-black', className)} {...rest} />;
}
