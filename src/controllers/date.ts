import { Request, Response } from 'express';
import { testEmpty, testData } from '../services/date';

// Placeholder controllers
export const getDateResponse = async (req: Request, res: Response) => {
    try {
        const headers = req.headers;
        const serviceResult = testEmpty();

        res.status(200).json({ headers, serviceResult });
    } catch (error) {
        res.status(500).send('ERROR');
    }
}

export const postDateResponse = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const serviceResult = testData();

        res.status(200).json({ body, serviceResult });
    } catch (error) {
        res.status(500).send('ERROR');
    }
}