import { Request, Response } from 'express';
import quotations, { Quotation } from '../models/quotation.model';

// Handler to get all quotations
export const getAllQuotations = (req: Request, res: Response) => {
  console.log('Request received to get all quotations');
  res.json(quotations);
};

// Handler to create a new quotation
export const createQuotation = (req: Request, res: Response) => {
  console.log('Request received to create a new quotation:', req.body);

  const newQuotation: Quotation = { ...req.body, id: quotations.length + 1 };
  console.log('New quotation created:', newQuotation);

  quotations.push(newQuotation);
  console.log('Updated list of quotations:', quotations);

  res.status(201).json(newQuotation);
};