const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap')));

// Main page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});