import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Create App
const app: Express = express();
const port: number = typeof process.env.PORT === 'number' ? process.env.PORT : 5000;

// Simple route handler
app.get("/", (req: Request, res: Response) => {
    res.send("Prepare to be polled, matey!!")
});

// Start server
app.listen(port, () => {
    console.log(`Express server is up and running at port ${port}...`);
});
