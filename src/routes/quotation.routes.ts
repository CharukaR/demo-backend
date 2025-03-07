import { Router } from 'express';
import { getAllQuotations, createQuotation } from '../controllers/quotation.controller';

const router = Router();

// Route to handle GET requests for retrieving all quotations
router.get('/', (req, res, next) => {
    console.log('Received GET request for all quotations'); // Log the incoming GET request
    getAllQuotations(req, res, next);
});

// Route to handle POST requests for creating a new quotation
router.post('/', (req, res, next) => {
    console.log('Received POST request to create a new quotation'); // Log the incoming POST request
    console.log('Request body:', req.body); // Log the request body to trace the input data
    createQuotation(req, res, next);
});

export default router;