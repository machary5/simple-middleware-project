const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();
const port = 3000;

// Use the middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, world! This is Meghana Acharya');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
