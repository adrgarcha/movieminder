import { Request, Response } from 'express';
import { Theater } from '../models/Theater';

export class TheaterController {
   static async getAll(req: Request, res: Response) {
      const theaters = await Theater.find().limit(100);
      return res.json(theaters);
   }
}
