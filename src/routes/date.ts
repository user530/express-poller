import { Router } from 'express';
import { getDateResponse, postDateResponse } from '../controllers/date';

// Create router
export const dateRouter = Router();

// Setup routes and controllers
dateRouter.route('/')
    .get(getDateResponse)
    .post(postDateResponse);
