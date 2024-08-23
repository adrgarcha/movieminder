import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export class MovieController {
   static async getAll(req: Request, res: Response) {
      const { title, category } = req.query;
      const query = Movie.find()
         .where({ poster: { $exists: true } })
         .limit(30);

      if (title) {
         query.where({ title: { $regex: title, $options: 'i' } });
      }

      if (category) {
         query.limit(10);
         switch (category) {
            case 'recent':
               query.sort({ released: -1 });
               break;
            case 'tomatoes-critic':
               query.sort({ 'tomatoes.critic.rating': -1 });
               break;
            case 'tomatoes-viewer':
               query.sort({ 'tomatoes.viewer.rating': -1 });
               break;
            case 'imdb':
               query.sort({ 'imdb.rating': -1 }).where({ 'imdb.rating': { $type: 'number' } });
               break;
            default:
               return res.status(400).json({ message: 'Invalid category' });
         }
      }

      const movies = await query;
      return res.json(movies);
   }

   static async getById(req: Request, res: Response) {
      const { id } = req.params;
      const movie = await Movie.findById(id);
      if (!movie) {
         return res.status(404).json({ message: 'Movie not found' });
      }
      return res.json(movie);
   }
}
