import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
   user_id: { type: Schema.Types.ObjectId, ref: 'User' },
   jwt: String,
});

export const Session = model('Session', sessionSchema);
