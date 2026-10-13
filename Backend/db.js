const mongoose = require('mongoose');

async function connectToDatabase() {
  const databaseUrl =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blinkit';

  await mongoose.connect(databaseUrl);
  console.log('Connected to MongoDB');
}

module.exports = connectToDatabase;