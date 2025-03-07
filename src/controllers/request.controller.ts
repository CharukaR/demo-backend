import { Request, Response } from 'express';
import requests, { Request as ReqModel } from '../models/request.model';

// Handler to get all requests
export const getAllRequests = (req: Request, res: Response) => {
  console.log(`Fetching all requests. Total requests: ${requests.length}`);
  res.json(requests);
};

// Handler to create a new request
export const createRequest = (req: Request, res: Response) => {
  console.log('Creating a new request with data:', req.body);

  const newRequest: ReqModel = { ...req.body, id: requests.length + 1 };
  requests.push(newRequest);

  console.log('New request created with ID:', newRequest.id);
  res.status(201).json(newRequest);
};