const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')
const app = express();

const port = 3000;

//middlewares
//http request logger
app.use(morgan('dev'));
//json support
app.use(express.json())
//Initialize the route handling
app.use(routes)

app.listen(3000, function () {
  console.log(`Server running on port ${port}`);
})