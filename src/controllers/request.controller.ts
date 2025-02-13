import { Request, Response } from 'express';
import requests, { Request as ReqModel } from '../models/request.model';

export const getAllRequests = (req: Request, res: Response) => {
  res.json(requests);
};

export const createRequest = (req: Request, res: Response) => {
  const newRequest: ReqModel = { ...req.body, id: requests.length + 1 };
  requests.push(newRequest);
  res.status(201).json(newRequest);
};
