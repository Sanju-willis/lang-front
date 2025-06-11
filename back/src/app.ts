// src\app.ts
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './config/passport';




const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,}));
app.use(express.json());
app.use(passport.initialize());
















export default app;