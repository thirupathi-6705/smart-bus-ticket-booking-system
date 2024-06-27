const express = require('express');
const app = express();
const path = require('path');
const readExcel = require('./readExcel'); // Assuming the readExcel.js file is in the same directory

const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API route to retrieve locations from Excel file
app.get('/api/locations', (req, res) => {
  const filePath = path.join(__dirname, '../demos/data.xlsx');
  const sheetName = 'list';
  const columnName = 'list';

  const locations = readExcel(filePath, sheetName, columnName);
  res.json(locations);
});

// Define your other routes here...

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
