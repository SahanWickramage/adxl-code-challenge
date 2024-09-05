import express from 'express';
import connectDB from './config/MongoConnection';

const app = express();

const port = 3030;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});