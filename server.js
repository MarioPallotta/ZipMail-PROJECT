// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
