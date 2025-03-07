export interface Request {
  id: number;
  description: string;
  priority: string;
}

let requests: Request[] = [
  { id: 1, description: 'Request 1', priority: 'High' },
  { id: 2, description: 'Request 2', priority: 'Low' },
  { id: 3, description: 'Request 3', priority: 'Medium' },
];

export default requests;