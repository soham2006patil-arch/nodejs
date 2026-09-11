const express = require('express');

const app = express();
const PORT = 3000;

// Assignment 1 and 3: route parameters with optional query parameters.
app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;

    const response = [`Student ID: ${id}`];

    if (name !== undefined) {
        response.push(`Name: ${name}`);
    }

    if (course !== undefined) {
        response.push(`Course: ${course}`);
    }

    res.type('text').send(response.join('\n'));
});

// Assignment 2: query parameters.
app.get('/search', (req, res) => {
    const { name, course } = req.query;

    if (name === undefined && course === undefined) {
        return res.send('No search data provided.');
    }

    const response = [];

    if (name !== undefined) {
        response.push(`Name: ${name}`);
    }

    if (course !== undefined) {
        response.push(`Course: ${course}`);
    }

    res.type('text').send(response.join('\n'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
