import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import orderRoutes from "./routes/order.routes";
import requestRoutes from "./routes/request.routes";
import quotationRoutes from "./routes/quotation.routes";

dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Log the initialization of routes
console.log("Initializing routes...");

// Set up routes for different endpoints
app.use('/orders', orderRoutes);
app.use('/requests', requestRoutes);
app.use('/quotations', quotationRoutes);

// Log that routes have been set up
console.log("Routes have been set up.");

// Add a simple GET endpoint to test server functionality
app.get('/test', (req, res) => {
  console.log("Received a GET request on /test endpoint");
  res.send('Backend is working!');
  console.log("Response sent for /test endpoint");
});

export default app;