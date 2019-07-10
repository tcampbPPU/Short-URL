const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// connect to database
connectDB();

app.use(express.json({ extended : false }));

app.use(express.static(path.join(__dirname, 'views')));

// Declare Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
  });

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
