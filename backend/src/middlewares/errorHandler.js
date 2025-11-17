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
