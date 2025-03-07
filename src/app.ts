import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import orderRoutes from "./routes/order.routes";
import requestRoutes from "./routes/request.routes";
import quotationRoutes from "./routes/quotation.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log("Initializing routes...");

app.use('/orders', orderRoutes);
app.use('/requests', requestRoutes);
app.use('/quotations', quotationRoutes);

console.log("Routes have been set up.");

app.get('/test', (req, res) => {
  console.log("Received a GET request on /test endpoint");
  res.send('Backend is working!');
  console.log("Response sent for /test endpoint");
});

export default app;