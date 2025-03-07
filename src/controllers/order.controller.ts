import { Request, Response } from 'express';
import orders, { Order } from '../models/order.model';

// Retrieve all orders
export const getAllOrders = (req: Request, res: Response) => {
  console.log('Fetching all orders');
  res.status(200).json(orders);
};

// Retrieve a specific order by ID
export const getOrderById = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  console.log(`Fetching order with ID: ${orderId}`);
  const foundOrder = orders.find(order => order.id === orderId);

  if (foundOrder) {
    console.log(`Order found: ${JSON.stringify(foundOrder)}`);
    res.status(200).json(foundOrder);
  } else {
    console.log('Order not found');
    res.status(404).json({ message: 'Order not found' });
  }
};

// Create a new order
export const createOrder = (req: Request, res: Response) => {
  const { item, quantity, status } = req.body;
  console.log('Creating a new order with data:', req.body);

  if (item && quantity && status) {
    const newOrder = {
      id: orders.length + 1,
      item,
      quantity,
      status,
    };
    orders.push(newOrder);
    console.log(`Order created successfully: ${JSON.stringify(newOrder)}`);
    res.status(201).json(newOrder);
  } else {
    console.log('Invalid data provided for order creation');
    res.status(400).json({ message: 'Invalid data' });
  }
};

// Update an existing order
export const updateOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  console.log(`Updating order with ID: ${orderId}`);
  const orderIndex = orders.findIndex(order => order.id === orderId);

  if (orderIndex === -1) {
    console.log('Order not found for update');
    res.status(404).json({ message: 'Order not found' });
  } else {
    const orderToUpdate = orders[orderIndex];
    const { item, quantity, status } = req.body;

    if (item) orderToUpdate.item = item;
    if (quantity) orderToUpdate.quantity = quantity;
    if (status) orderToUpdate.status = status;

    console.log(`Order updated successfully: ${JSON.stringify(orderToUpdate)}`);
    res.json(orderToUpdate);
  }
};

// Delete an order
export const deleteOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  console.log(`Deleting order with ID: ${orderId}`);
  const orderIndex = orders.findIndex(order => order.id === orderId);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    console.log('Order deleted successfully');
    res.status(200).json({ message: 'Order deleted successfully' });
  } else {
    console.log('Order not found for deletion');
    res.status(404).json({ message: 'Order not found' });
  }
};