import { Request, Response } from 'express';
import requests, { Request as ReqModel } from '../models/request.model';

// Handler to get all requests
export const getAllRequests = (req: Request, res: Response) => {
  // Log the number of requests being returned
  console.log(`Fetching all requests. Total requests: ${requests.length}`);
  
  // Respond with the list of all requests
  res.json(requests);
};

// Handler to create a new request
export const createRequest = (req: Request, res: Response) => {
  // Log the incoming request body
  console.log('Creating a new request with data:', req.body);

  // Create a new request object with a unique ID
  const newRequest: ReqModel = { ...req.body, id: requests.length + 1 };

  // Add the new request to the requests array
  requests.push(newRequest);

  // Log the successful creation of a new request
  console.log('New request created with ID:', newRequest.id);

  // Respond with the newly created request object
  res.status(201).json(newRequest);
};