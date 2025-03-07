import { Router } from 'express';
import { getAllRequests, createRequest } from '../controllers/request.controller';

const router = Router();

// Log to indicate that the router has been initialized
console.log('Initializing request router');

// Route to handle GET requests for retrieving all requests
router.get('/', (req, res, next) => {
    console.log('Received GET request to fetch all requests');
    getAllRequests(req, res, next);
});

// Route to handle POST requests for creating a new request
router.post('/', (req, res, next) => {
    console.log('Received POST request to create a new request');
    console.log('Request body:', req.body); // Log the request body for traceability
    createRequest(req, res, next);
});

export default router;