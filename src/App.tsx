import { ConfigProvider } from "antd";
import { AntdTheme } from "./core/styles/antd-theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./core/utilities/AppRoutes";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./core/context/CartContext";

const router = createBrowserRouter([
  { path: AppRoutes.home, element: <HomePage /> },
]);

function App() {
  return (
    <ConfigProvider theme={AntdTheme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ConfigProvider>
  );
}

export default App;
