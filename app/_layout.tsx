import '@/global.css';

import { NavTheme } from '@/constants/NavTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

const LIGHT_THEME: Theme = {
   dark: false,
   colors: NavTheme.light,
};
const DARK_THEME: Theme = {
   dark: true,
   colors: NavTheme.dark,
};

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
   const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

   useEffect(() => {
      (async () => {
         const theme = await AsyncStorage.getItem('theme');
         if (Platform.OS === 'web') {
            document.documentElement.classList.add('bg-background');
         }
         if (!theme) {
            AsyncStorage.setItem('theme', colorScheme);
            setIsColorSchemeLoaded(true);
            return;
         }
         const colorTheme = theme === 'dark' ? 'dark' : 'light';
         if (colorTheme !== colorScheme) {
            setColorScheme(colorTheme);

            setIsColorSchemeLoaded(true);
            return;
         }
         setIsColorSchemeLoaded(true);
      })().finally(() => {
         SplashScreen.hideAsync();
      });
   }, []);

   if (!isColorSchemeLoaded) {
      return null;
   }

   return (
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
         <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
         <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
         </Stack>
      </ThemeProvider>
   );
}
