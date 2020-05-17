const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')
const app = express();

const port = 3001;

//middlewares
//http request logger
app.use(morgan('dev'));
//json support
app.use(express.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
})
//Initialize the route handling
app.use(routes)

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
})