export interface Quotation {
    id: number;
    client: string;
    amount: number;
    status: string;
}

// Initializing an array of quotations with some sample data
let quotations: Quotation[] = [
    { id: 1, client: 'Client 1', amount: 1000, status: 'Pending' },
    { id: 2, client: 'Client 2', amount: 2000, status: 'Delivered' },
    { id: 3, client: 'Client 3', amount: 3000, status: 'Pending' }
];

// Log the initial state of the quotations array for traceability
console.log('Initial quotations:', quotations);

export default quotations;