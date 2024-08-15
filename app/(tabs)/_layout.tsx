import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Home, Map, Search, User } from 'lucide-react-native';

const STROKE_WIDTH = 1.5;

export default function TabLayout() {
   const { colorScheme } = useColorScheme();

   return (
      <Tabs
         screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
         }}>
         <Tabs.Screen
            name="index"
            options={{
               title: 'Home',
               tabBarIcon: ({ color }) => <Home color={color} strokeWidth={STROKE_WIDTH} />,
            }}
         />
         <Tabs.Screen
            name="explore"
            options={{
               title: 'Explore',
               tabBarIcon: ({ color }) => <Search color={color} strokeWidth={STROKE_WIDTH} />,
            }}
         />
         <Tabs.Screen
            name="maps"
            options={{
               title: 'Maps',
               tabBarIcon: ({ color }) => <Map color={color} strokeWidth={STROKE_WIDTH} />,
            }}
         />
         <Tabs.Screen
            name="profile"
            options={{
               title: 'Profile',
               tabBarIcon: ({ color }) => <User color={color} strokeWidth={STROKE_WIDTH} />,
            }}
         />
      </Tabs>
   );
}
