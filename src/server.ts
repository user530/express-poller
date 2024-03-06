import dotenv from 'dotenv';
import { app } from './app/app';

// Load env variables
dotenv.config();

// Establish port
const portEnv = process.env.PORT;
const port = typeof portEnv === 'number' ? portEnv : 5000;

// Start server
app.listen(port, () => {
    console.log(`Express server is up and running at port ${port}...`);
});
