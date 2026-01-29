import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects/:slug", element: <ProjectDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
