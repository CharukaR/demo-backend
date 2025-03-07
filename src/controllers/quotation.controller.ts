import { Request, Response } from 'express';
import quotations, { Quotation } from '../models/quotation.model';

// Handler to get all quotations
export const getAllQuotations = (req: Request, res: Response) => {
  console.log('Request received to get all quotations');
  // Respond with the list of all quotations
  res.json(quotations);
};

// Handler to create a new quotation
export const createQuotation = (req: Request, res: Response) => {
  console.log('Request received to create a new quotation:', req.body);

  // Create a new quotation object with a unique ID
  const newQuotation: Quotation = { ...req.body, id: quotations.length + 1 };
  console.log('New quotation created:', newQuotation);

  // Add the new quotation to the list
  quotations.push(newQuotation);
  console.log('Updated list of quotations:', quotations);

  // Respond with the newly created quotation and a 201 status code
  res.status(201).json(newQuotation);
};