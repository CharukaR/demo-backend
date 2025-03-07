// Define the Request interface to structure the request objects
export interface Request {
  id: number; // Unique identifier for each request
  description: string; // Description of the request
  priority: string; // Priority level of the request
}

// Initialize an array of requests with some sample data
let requests: Request[] = [
  { id: 1, description: 'Request 1', priority: 'High' },
  { id: 2, description: 'Request 2', priority: 'Low' },
  { id: 3, description: 'Request 3', priority: 'Medium' },
];

// Log the initial state of the requests array for traceability
console.log('Initial requests:', requests);

export default requests;