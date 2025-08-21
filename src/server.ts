import mongoose from 'mongoose';

import app from './app';
import { config } from './config/db';

async function main() {
  try {
    if (!config.mongoUri) {
      throw new Error('MongoDB URI not found in environment variables');
    }
    await mongoose.connect(config.mongoUri);
    console.log('Database connected');

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect DB', err);
  }
}

main();