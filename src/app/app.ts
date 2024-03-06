import express, { Express } from 'express';
import { dateRouter } from '../routes/date';

// Create App
export const app: Express = express();

// Use middleware

// Setup routes
app.use('/api/v1/date', dateRouter);