import { Request, Response } from 'express';
import quotations, { Quotation } from '../models/quotation.model';

// Handler to get all quotations
export const getAllQuotations = (req: Request, res: Response) => {
  // Log the request to get all quotations
  console.log('Request received to get all quotations');
  
  // Respond with the list of all quotations
  res.json(quotations);
};

// Handler to create a new quotation
export const createQuotation = (req: Request, res: Response) => {
  // Log the incoming request body for creating a new quotation
  console.log('Request received to create a new quotation:', req.body);

  // Create a new quotation object with a unique ID
  const newQuotation: Quotation = { ...req.body, id: quotations.length + 1 };

  // Log the new quotation object before adding it to the list
  console.log('New quotation created:', newQuotation);

  // Add the new quotation to the list
  quotations.push(newQuotation);

  // Log the updated list of quotations
  console.log('Updated list of quotations:', quotations);

  // Respond with the newly created quotation
  res.status(201).json(newQuotation);
};