import { Request, Response } from 'express';
import quotations, { Quotation } from '../models/quotation.model';

// Handler to get all quotations
export const getAllQuotations = (req: Request, res: Response) => {
  res.json(quotations);
};

// Handler to create a new quotation
export const createQuotation = (req: Request, res: Response) => {
  const newQuotation: Quotation = { ...req.body, id: quotations.length + 1 };
  quotations.push(newQuotation);
  res.status(201).json(newQuotation);
};