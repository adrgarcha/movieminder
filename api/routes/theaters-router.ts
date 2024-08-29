import { Router } from 'express';
import { TheaterController } from '../controllers/theater-controller';

export const theatersRouter = Router();

theatersRouter.get('/', TheaterController.getAll);
