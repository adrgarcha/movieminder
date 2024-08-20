import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
   name: String,
   email: String,
   movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' },
   text: String,
   date: Date,
});

export const Comment = model('Comment', commentSchema);
