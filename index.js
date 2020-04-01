const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Express up at 3000...');
});
