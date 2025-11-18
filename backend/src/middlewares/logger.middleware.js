import { logger } from "../config/winston.js";

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = status === 500 ? "Internal Server Error" : err.message;

  logger.error(
    `HTTP ${req.method} - ${req.url} - ${message} - ${req.user ? req.user._id : null}`,
  );

  res.status(status).json({ error: message });
};

export const loggerMiddleware = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `HTTP ${req.method} ${req.url} - ${req.user ? req.user._id : null} - Duration ${duration}ms`,
    );
  });
  next();
};
