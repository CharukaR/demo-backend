import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import orderRoutes from "./routes/order.routes";
import requestRoutes from "./routes/request.routes";
import quotationRoutes from "./routes/quotation.routes";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Log the initialization of route handlers
console.log("Initializing route handlers...");

// Route handlers for different endpoints
app.use('/orders', orderRoutes);
app.use('/requests', requestRoutes);
app.use('/quotations', quotationRoutes);

// Test endpoint to verify server is running
app.get('/test', (req, res) => {
  console.log("Received request on /test endpoint");
  res.send('Backend is working!');
});

// Log server setup completion
console.log("Server setup complete. Ready to handle requests.");

export default app;