// config/colors.js
import colors from "colors";

colors.setTheme({
  success: ["green", "bold"],
  error: ["red", "bold"],
  warning: ["yellow", "bold"],
  info: ["blue"],
});

colors.enable();

export default colors;
