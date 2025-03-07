// Define an interface for Order to ensure consistent structure for order objects
export interface Order {
    id: number;
    item: string;
    quantity: number;
    status: string;
}

// Initialize an array of orders with some sample data
let orders: Order[] = [
    { id: 1, item: 'Laptop', quantity: 2, status: 'Pending' },
    { id: 2, item: 'Monitor', quantity: 3, status: 'Delivered' },
    { id: 3, item: 'Keyboard', quantity: 1, status: 'Pending' }
];

// Log the initial state of orders for traceability
console.log('Initial orders:', orders);

export default orders;