import express from 'express';
import apiVersion from './router/ApiVersion';

const app = express();

// Middleware

app.use(express.json());
app.use('/api/v1', apiVersion);

app.listen(5001, () => {
  console.log('Server listening at port 5001...');
});
