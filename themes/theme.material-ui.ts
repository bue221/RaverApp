import { createMuiTheme } from "@material-ui/core/styles";
import { AppColor } from "../constants/colors.constants";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: AppColor["color-primary-300"],
      main: AppColor["color-primary-500"],
      dark: AppColor["color-primary-900"],
      contrastText: "#fff",
    },
    secondary: {
      light: AppColor["color-primary-300"],
      main: AppColor["color-primary-600"],
      dark: AppColor["color-primary-800"],
      contrastText: "#000",
    },
    error: {
      light: AppColor["color-danger-100"],
      main: AppColor["color-danger-500"],
      dark: AppColor["color-danger-900"],
      contrastText: "#000",
    },
    warning: {
      light: AppColor["color-warning-100"],
      main: AppColor["color-warning-500"],
      dark: AppColor["color-warning-900"],
      contrastText: "#000",
    },
    info: {
      light: AppColor["color-info-100"],
      main: AppColor["color-info-500"],
      dark: AppColor["color-info-900"],
      contrastText: "#000",
    },
    success: {
      light: AppColor["color-success-100"],
      main: AppColor["color-success-500"],
      dark: AppColor["color-success-900"],
      contrastText: "#000",
    },
  },
});
