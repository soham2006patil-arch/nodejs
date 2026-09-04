const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
// Task 5: Request–Response Understanding
// Middleware to log request method and URL for every incoming request
// ==========================================
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// ==========================================
// Task 1: Basic Routes
// ==========================================

// Route: GET /
// Description: Returns Welcome message for Home Page
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// Route: GET /about
// Description: Returns information about the About Page
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Route: GET /contact
// Description: Returns information about the Contact Page
app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

// ==========================================
// Task 2: Route Parameter (Dynamic Route)
// Route: GET /user/:name
// Description: Accepts a name parameter dynamically from the URL
// ==========================================
app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
});

// ==========================================
// Task 3: Multiple Route Parameters
// Route: GET /product/:id/:category
// Description: Handles multiple dynamic route parameters
// ==========================================
app.get('/product/:id/:category', (req, res) => {
    const { id, category } = req.params;
    res.send(`Product ID: ${id}, Category: ${category}`);
});

// ==========================================
// Task 4: Query Parameters
// Route: GET /search
// Description: Reads search query parameters (name and role)
// ==========================================
app.get('/search', (req, res) => {
    const { name, role } = req.query;
    if (name && role) {
        res.send(`Name: ${name}, Role: ${role}`);
    } else if (name) {
        res.send(`Name: ${name}`);
    } else if (role) {
        res.send(`Role: ${role}`);
    } else {
        res.send('Search route: No query parameters provided');
    }
});

// ==========================================
// Start the Express Server
// ==========================================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
