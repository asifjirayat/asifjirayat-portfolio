import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ComponentTestPage from "./pages/ComponentTestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "/test-components",
        element: <ComponentTestPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
