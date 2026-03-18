const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const response = {
        success: false,
        message: err.message || "Server Error",
    };

    if (process.env.NODE_ENV !== "production") {
        response.error = err.stack;
    }

    console.error("Error:", err.message || err);
    res.status(status).json(response);
};

const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
};

export default errorHandler;
export { notFoundHandler };