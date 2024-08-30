import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function tokenMiddleware(req: Request, res: Response, next: NextFunction) {
   const allowedPaths = ['/users/login', '/users/register'];
   if (allowedPaths.includes(req.path)) {
      return next();
   }

   const authHeader = req.headers.authorization;
   if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
   }

   const token = authHeader.split(' ')[1];
   jwt.verify(token, process.env.JWT_SECRET!, err => {
      if (err) return res.status(401).json({ message: 'Token expired or not valid.' });
   });

   next();
}
