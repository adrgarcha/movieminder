import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { validateUser } from '../schemas/user-schema';

export class UserController {
   static async register(req: Request, res: Response) {
      if (!validateUser(req.body).success) {
         return res.status(400).json({ message: 'Invalid user data' });
      }

      const { name, email, password } = req.body;

      const userExists = await User.exists({ email });
      if (userExists) {
         return res.status(409).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ name, email, password: hashedPassword });

      return res.status(201).json({ message: 'User created' });
   }

   static async login(req: Request, res: Response) {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

      return res.status(200).json({ token });
   }
}
