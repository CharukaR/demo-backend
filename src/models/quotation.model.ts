export interface Quotation {
    id: number;
    client: string;
    amount: number;
    status: string;
}

let quotations: Quotation[] = [
    {
        id: 1,
        client: 'Client 1',
        amount: 1000,
        status: 'Pending'
    },
    {
        id: 2,
        client: 'Client 2',
        amount: 2000,
        status: 'Delivered'
    },
    {
        id: 3,
        client: 'Client 3',
        amount: 3000,
        status: 'Pending'
    }
];
export default quotations;
