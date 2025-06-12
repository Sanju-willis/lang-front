// src\app.ts
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './config/passport';
import authRoute from './routes/authRoute';



const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());


app.use('/auth', authRoute );




export default app;