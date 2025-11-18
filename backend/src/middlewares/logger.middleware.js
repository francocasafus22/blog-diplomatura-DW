import { logger } from "../config/winston.js";

export const errorHandler = (err, req, res, next) => {
  logger.error(
    `HTTP ${req.method} - ${req.url} - ${err.message} - ${req.user ? req.user_id : null}`,
  );

  if (err.status == 500) {
    res.status(500).json({ error: "Internal Server Error" });
  } else {
    res.status(err.status).json({ error: err.message });
  }
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
