import { Request, Response } from 'express';
import orders, { Order } from '../models/order.model';

// Retrieve all orders
export const getAllOrders = (req: Request, res: Response) => {
  console.log('Fetching all orders');
  console.log(`Total orders: ${orders.length}`); // Log the total number of orders
  res.status(200).json(orders); // Respond with the list of all orders
};

// Retrieve a specific order by ID
export const getOrderById = (req: Request, res: Response) => {
  const orderId = Number(req.params.id); // Extract order ID from request parameters
  console.log(`Fetching order with ID: ${orderId}`); // Log the ID of the order being fetched
  const foundOrder = orders.find(order => order.id === orderId); // Find the order by ID

  if (foundOrder) {
    console.log(`Order found: ${JSON.stringify(foundOrder)}`); // Log the found order details
    res.status(200).json(foundOrder); // Respond with the found order
  } else {
    console.log('Order not found'); // Log if the order is not found
    res.status(404).json({ message: 'Order not found' }); // Respond with a 404 error
  }
};

// Create a new order
export const createOrder = (req: Request, res: Response) => {
  const { item, quantity, status } = req.body; // Extract order details from request body
  console.log('Creating a new order with data:', req.body); // Log the data for the new order

  if (item && quantity && status) { // Validate the presence of required fields
    const newOrder = {
      id: orders.length + 1, // Assign a new ID based on the current length of orders
      item,
      quantity,
      status,
    };
    orders.push(newOrder); // Add the new order to the list
    console.log(`Order created successfully: ${JSON.stringify(newOrder)}`); // Log the created order details
    res.status(201).json(newOrder); // Respond with the created order
  } else {
    console.log('Invalid data provided for order creation'); // Log if data is invalid
    res.status(400).json({ message: 'Invalid data' }); // Respond with a 400 error
  }
};

// Update an existing order
export const updateOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id); // Extract order ID from request parameters
  console.log(`Updating order with ID: ${orderId}`); // Log the ID of the order being updated
  const orderIndex = orders.findIndex(order => order.id === orderId); // Find the index of the order by ID

  if (orderIndex === -1) {
    console.log('Order not found for update'); // Log if the order is not found
    res.status(404).json({ message: 'Order not found' }); // Respond with a 404 error
  } else {
    const orderToUpdate = orders[orderIndex]; // Get the order to update
    const { item, quantity, status } = req.body; // Extract updated details from request body

    // Update the order details if provided
    if (item) orderToUpdate.item = item;
    if (quantity) orderToUpdate.quantity = quantity;
    if (status) orderToUpdate.status = status;

    console.log(`Order updated successfully: ${JSON.stringify(orderToUpdate)}`); // Log the updated order details
    res.json(orderToUpdate); // Respond with the updated order
  }
};

// Delete an order
export const deleteOrder = (req: Request, res: Response) => {
  const orderId = Number(req.params.id); // Extract order ID from request parameters
  console.log(`Deleting order with ID: ${orderId}`); // Log the ID of the order being deleted
  const orderIndex = orders.findIndex(order => order.id === orderId); // Find the index of the order by ID

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1); // Remove the order from the list
    console.log('Order deleted successfully'); // Log successful deletion
    res.status(200).json({ message: 'Order deleted successfully' }); // Respond with a success message
  } else {
    console.log('Order not found for deletion'); // Log if the order is not found
    res.status(404).json({ message: 'Order not found' }); // Respond with a 404 error
  }
};