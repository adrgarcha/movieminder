import useGetTheaters from '@/hooks/useGetTheaters';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function MapsScreen() {
   const { top } = useSafeAreaInsets();
   const { theaters } = useGetTheaters();

   return (
      <MapView style={{ marginTop: top, width: '100%', height: '100%' }}>
         {theaters.map(theater => (
            <Marker
               key={theater.theaterId}
               coordinate={{ latitude: theater.location.geo.coordinates[1], longitude: theater.location.geo.coordinates[0] }}
            />
         ))}
      </MapView>
   );
}
