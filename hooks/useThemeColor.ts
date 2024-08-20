import { Colors } from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

export function useThemeColor(props: { light?: string; dark?: string }, colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
   const { colorScheme } = useColorScheme() ?? 'light';
   const colorFromProps = props[colorScheme];

   if (colorFromProps) {
      return colorFromProps;
   } else {
      return Colors[colorScheme][colorName];
   }
}
