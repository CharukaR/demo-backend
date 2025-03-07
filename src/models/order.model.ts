export interface Order {
    id: number;
    item: string;
    quantity: number;
    status: string;
}

let orders: Order[] = [
    { id: 1, item: 'Laptop', quantity: 2, status: 'Pending' },
    { id: 2, item: 'Monitor', quantity: 3, status: 'Delivered' },
    { id: 3, item: 'Keyboard', quantity: 1, status: 'Pending' }
];

export default orders;