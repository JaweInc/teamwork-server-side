import express from 'express';
import { urlencoded, json } from 'body-parser';
import apiVersion from './router/ApiVersion';

const app = express();

app.use(urlencoded({
  limit: '50mb',
  extended: true,
}));
app.use(json({ limit: '50mb' }));
// app.use(express.json());
app.use('/api/v1', apiVersion);

app.listen(5000, () => {
  console.log('Server listening at port 5000...');
});
