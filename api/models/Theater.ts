import { Schema, model } from 'mongoose';

export interface ITheater {
   theaterId: number;
   location: {
      address: {
         street1: string;
         city: string;
         state: string;
         zipcode: string;
      };
      geo: {
         type: string;
         coordinates: number[];
      };
   };
}

const theaterSchema = new Schema<ITheater>({
   theaterId: Number,
   location: {
      address: {
         street1: String,
         city: String,
         state: String,
         zipcode: String,
      },
      geo: {
         type: { type: String },
         coordinates: [Number],
      },
   },
});

export const Theater = model<ITheater>('Theater', theaterSchema);
