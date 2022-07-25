import express from 'express';
import apiVersion from './router/ApiVersion';
import cors from 'cors';
/* import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import session from 'express-session'; */

const app = express();
const hostname = '127.0.0.1';
const port = 5002

// Middleware

app.use(express.json());
app.use(cors({origin: '*'}))
/* app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
  key: "userId",
  secret: "subscribe",
  resave: false,
  saveUnintialized: false,
  cookie: {
    expires: new Date(),
  }
})) */
app.use('/api/v1', apiVersion);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});