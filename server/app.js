import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//Middleware connections
mongoose.connect('mongodb://localhost:27017/redditapi', ()=>{
    console.log('MongoDB connected....');
});

const app = express();

//Middleware
app.use(bodyParser.json());
app.use('/api',routes);



export default app;