const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Congrats Devops Test, Done!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
