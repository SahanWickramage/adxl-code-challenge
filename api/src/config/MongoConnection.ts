import mongoose from 'mongoose';

const dbUri: string = 'mongodb://localhost:27017/adxl-mdb';

async function connectDB() {
    try {
        await mongoose.connect(dbUri);
        console.log('MongoDB connected');
      } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
      }
}

export default connectDB;