import { Schema, model } from 'mongoose';

export interface IUser {
   _id: string;
   name: string;
   email: string;
   password: string;
}

const userSchema = new Schema<IUser>({
   name: String,
   email: { type: String, unique: true },
   password: String,
});

export const User = model<IUser>('User', userSchema);
