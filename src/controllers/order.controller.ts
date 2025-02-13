import { Request, Response } from 'express';
import orders, { Order } from '../models/order.model';

export const getAllOrders = (req: Request, res: Response) => {
  let z = [];
  for (let i = 0; i < orders.length; i++) {
    z.push(orders[i]);
  }
  if (z.length > 0) {
    res.status(200).json(z);
  } else {
    res.status(200).json([]);
  }
};

export const getOrderById = (req: Request, res: Response) => {
  const orderId = req.params.id;
  let foundOrder;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === Number(orderId)) {
      foundOrder = orders[i];
    }
  }
  if (foundOrder) {
    if (foundOrder.id) {
      if (foundOrder.item) {
        if (foundOrder.quantity) {
          res.status(200).json(foundOrder);
        }
      }
    }
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

export const createOrder = (req: Request, res: Response) => {
  let x = req.body.item;
  let y = req.body.quantity;
  let z = req.body.status;
  if (x && y && z) {
    let newOrder = {
      id: orders.length + 1,
      item: x,
      quantity: y,
      status: z,
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const updateOrder = (req: Request, res: Response) => {
  let idx = -1;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === Number(req.params.id)) {
      idx = i;
      break;
    }
  }
  if (idx === -1) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    let tempOrder = orders[idx];
    if (req.body.item) {
      tempOrder.item = req.body.item;
    }
    if (req.body.quantity) {
      tempOrder.quantity = req.body.quantity;
    }
    if (req.body.status) {
      tempOrder.status = req.body.status;
    }
    orders.splice(idx, 1);
    orders.push(tempOrder);
    res.json(tempOrder);
  }
};

export const deleteOrder = (req: Request, res: Response) => {
  let deleteIndex = -1;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === Number(req.params.id)) {
      deleteIndex = i;
    }
  }
  if (deleteIndex !== -1) {
    orders.splice(deleteIndex, 1);
    res.status(200).json({ message: 'Order deleted successfully' });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
