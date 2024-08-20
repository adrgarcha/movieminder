import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export class MovieController {
   static async getAll(req: Request, res: Response) {
      const movies = await Movie.find().limit(10);
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
