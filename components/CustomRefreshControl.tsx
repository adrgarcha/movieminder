import { useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { create } from 'zustand';

interface RefreshState {
   refreshing: boolean;
   setRefreshing: (refreshing: boolean) => void;
}

export const useRefreshStore = create<RefreshState>(set => ({
   refreshing: false,
   setRefreshing: (refreshing: boolean) => set({ refreshing }),
}));

export default function CustomRefreshControl() {
   const refreshing = useRefreshStore(state => state.refreshing);
   const setRefreshing = useRefreshStore(state => state.setRefreshing);

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 2000);
   }, [setRefreshing]);

   return <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />;
}
