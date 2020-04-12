const express = require('express');
const bodyParser = require('body-parser');
const { getTodos, postTodo, getTodo, putTodo, deleteTodo } = require('../helpers/todo-route-handlers');

const jsonBodyParser = bodyParser.json();
const router = express.Router();

router.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

router.options('/', (req, res, next) => {
  res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'content-type');
  res.set('Access-Control-Max-Age', 86400);
  res.sendStatus(200);
});

router.route('/')
  .get(getTodos)
  .post(jsonBodyParser, postTodo);

router.route('/:id')
  .get(getTodo)
  .put(jsonBodyParser, putTodo)
  .delete(deleteTodo);

module.exports = router;
