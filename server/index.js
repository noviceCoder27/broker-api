const express = require('express');
const Alpaca = require('@alpacahq/alpaca-trade-api');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});