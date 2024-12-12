
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
    console.error("Error Details:", err.details);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message: message,
        details: err.details || null
    });
};

module.exports = errorHandler;