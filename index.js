const express = require('express');
const morgan = require('morgan');
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('./db-connect');
require('./models/todo');

const todosRoutes = require('./routes/todos');

const Todo = require('mongoose').model('Todo');

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/api/todos', todosRoutes);

app.listen(PORT, () => {
  console.log('Express up at: ', PORT);
});
