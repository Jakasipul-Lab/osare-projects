const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Home Route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

// 2. About Route
app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About page' });
});

// 3. Dynamic Route (e.g., http://localhost:3000/users/123)
app.get('/users/:id', (req, res) => {
  res.json({ userId: req.params.id, name: `User ${req.params.id}` });
});

// 4. POST Route (for sending data to server)
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.json({ status: 'Success', data: receivedData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
