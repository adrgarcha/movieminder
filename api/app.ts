import 'dotenv/config';
import express, { json } from 'express';
import { connect } from 'mongoose';
import { moviesRouter } from './routes/movies-router';

const app = express();
app.use(json());
app.disable('x-powered-by');

app.use('/movies', moviesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
   console.log(`Movieminder API initialised on ${PORT} 🎬`);
});

(async function connection() {
   try {
      await connect(process.env.MONGODB_URI!, { dbName: 'sample_mflix' });
      console.log('Connected to database 🔌');
   } catch (error) {
      console.error('Failed to connect to database 💥', error);
   }
})();
