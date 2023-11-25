import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./pages/MainNavigation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [{ path: "", element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
