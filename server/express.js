const express = require('express');

const PORT = 8080;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ test: 1 });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post('/api/v1/auth', (req, res) => {
  console.log(req.body);
  res.json({ status: 'ok' });
});

app.listen(PORT);
