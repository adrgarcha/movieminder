import { Schema, model } from 'mongoose';

const theaterSchema = new Schema({
   theaterId: Number,
   location: {
      address: {
         street1: String,
         city: String,
         state: String,
         zipcode: String,
      },
      geo: {
         type: String,
         coordinates: [Number],
      },
   },
});

export const Theater = model('Theater', theaterSchema);
