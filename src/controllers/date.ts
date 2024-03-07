import { Request, Response } from 'express';
import { startPolling } from '../services/date';

// Placeholder controllers
export const getDateResponse = async (req: Request, res: Response) => {
    try {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Transfer-Encoding", "chunked");

        startPolling(res);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const postDateResponse = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const serviceResult = 'testData();'

        res.status(200).json({ body, serviceResult });
    } catch (error) {
        res.status(500).send('ERROR');
    }
}