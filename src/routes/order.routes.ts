import { Router } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order.controller';

const router = Router();

// Log the initialization of the order routes
console.log('Initializing order routes');

// Route to get all orders
router.get('/', (req, res, next) => {
  console.log('GET /orders - Fetching all orders');
  getAllOrders(req, res, next);
});

// Route to get a specific order by ID
router.get('/:id', (req, res, next) => {
  console.log(`GET /orders/${req.params.id} - Fetching order by ID`);
  getOrderById(req, res, next);
});

// Route to create a new order
router.post('/', (req, res, next) => {
  console.log('POST /orders - Creating a new order');
  console.log('Request Body:', req.body); // Log the request body for traceability
  createOrder(req, res, next);
});

// Route to update an existing order by ID
router.put('/:id', (req, res, next) => {
  console.log(`PUT /orders/${req.params.id} - Updating order by ID`);
  console.log('Request Body:', req.body); // Log the request body for traceability
  updateOrder(req, res, next);
});

// Route to delete an order by ID
router.delete('/:id', (req, res, next) => {
  console.log(`DELETE /orders/${req.params.id} - Deleting order by ID`);
  deleteOrder(req, res, next);
});

export default router;