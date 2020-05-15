const express = require('express');
const morgan = require('morgan');
const routes = require('./routers/index')
const app = express();

const port = 3000;

//http request logger
app.use(morgan('dev'));
//json support
app.use(express.json())

//Initialize the route handling
app.use(routes)

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(`Server running on port ${port}`);
})