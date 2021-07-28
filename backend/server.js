import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/db.js';
import {
  errorHandler,
  notFound,
} from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

import colors from "colors"; /* ts-import-sorter: disable */

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is runnin....");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
