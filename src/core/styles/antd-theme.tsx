import type { ThemeConfig } from "antd";

export const AntdTheme: ThemeConfig = {
  token: {
    fontFamily: "Roboto",
    colorPrimary: "#FF6636",
    colorLink: "#FF6636",
  },
  components: {
    Button: {
      borderRadiusLG: 0,
      borderRadius: 0,
      colorBgContainer: "rgba(255, 102, 54, 0.1)",
      colorText: "rgba(255, 102, 54, 1)",
      colorBorder: "rgba(255,255,255,0)",
      colorLink: "#333",
    },
    Input: {
      borderRadius: 0,
    },
    Select: {
      colorBgContainer: "transparent",
      colorText: "#666",
      colorTextQuaternary: "#AAA",
      colorBorder: "rgba(0,0,0,0.3)",
      borderRadius: 0,
    },
    Typography: {
      titleMarginBottom: 0,
    },
   },
};
