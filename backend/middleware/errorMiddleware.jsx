// Middleware to handle 404 errors (Not Found)
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// General error handler middleware
const errorHandler = (err, req, res, next) => {
  // If status code is 200 but there's an error, change to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    // Show stack trace only in development mode
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
