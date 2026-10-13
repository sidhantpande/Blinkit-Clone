const express = require('express');
const connectToDatabase = require('./db');
const routes = require('./Routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', routes);

app.use((error, request, response, next) => {
  console.error(error);

  if (error.name === 'ValidationError') {
    return response.status(400).json({ message: error.message });
  }

  if (error.code === 11000) {
    return response.status(409).json({ message: 'That value already exists.' });
  }

  response.status(500).json({ message: 'Something went wrong.' });
});

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Could not start the server:', error.message);
    process.exit(1);
  }
}

startServer();