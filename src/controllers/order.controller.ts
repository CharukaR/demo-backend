import { Request, Response } from 'express';
import orders, { Order } from '../models/order.model';

export const getAllOrders = (req: Request, res: Response) => {
  res.status(200).json(orders);
};

export const getOrderById = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  const foundOrder = orders.find(order => order.id === orderId);

  if (foundOrder && foundOrder.id && foundOrder.item && foundOrder.quantity) {
    res.status(200).json(foundOrder);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

export const createOrder = (req: Request, res: Response) => {
  const { item, quantity, status } = req.body;
  if (item && quantity && status) {
    const newOrder = {
      id: orders.length + 1,
      item,
      quantity,
      status,
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const updateOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  const orderIndex = orders.findIndex(order => order.id === orderId);

  if (orderIndex === -1) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    const orderToUpdate = orders[orderIndex];
    const { item, quantity, status } = req.body;

    if (item) orderToUpdate.item = item;
    if (quantity) orderToUpdate.quantity = quantity;
    if (status) orderToUpdate.status = status;

    res.json(orderToUpdate);
  }
};

export const deleteOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  const orderIndex = orders.findIndex(order => order.id === orderId);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    res.status(200).json({ message: 'Order deleted successfully' });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};