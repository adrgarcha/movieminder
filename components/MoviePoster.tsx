import { IMovie } from '@/api/models/Movie';
import splash from '@/assets/images/splash.png';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function MoviePoster({ item, width = 125, height = 175 }: { item: IMovie; width?: number; height?: number }) {
   return (
      <Link href={`/movies/${item._id}`}>
         <Image source={{ uri: item.poster }} defaultSource={splash} width={width} height={height} />
      </Link>
   );
}
