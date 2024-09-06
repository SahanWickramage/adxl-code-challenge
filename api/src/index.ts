import express from 'express';
import connectDB from './config/MongoConnection';
import indexRouter from './route/IndexRoute';

const port = 3030;

const app = express();
app.use(express.json());
app.use('/api/v1', indexRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});