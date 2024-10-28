function loggerMiddleware(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Call next() to pass control to the next handler
}

module.exports = loggerMiddleware;