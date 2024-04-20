import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

//import './config/db.js'

const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', routes);

app.get('/', (req, res) => {
  res.render('pages/home/index')
})

export default app