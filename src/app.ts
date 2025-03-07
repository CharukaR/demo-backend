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

app.use('/orders', orderRoutes);
app.use('/requests', requestRoutes);
app.use('/quotations', quotationRoutes);

app.get('/test', (req, res) => {
  res.send('Backend is working!');
});

export default app;