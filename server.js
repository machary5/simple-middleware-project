const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
