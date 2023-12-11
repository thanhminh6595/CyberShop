import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainNavigation from "./pages/MainNavigation";
import SearchPage from "./pages/SearchPage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "search", element: <SearchPage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "detail", element: <DetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
