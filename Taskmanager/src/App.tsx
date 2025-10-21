
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import TasksPage from "./pages/TasksPage";

import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="resources" element={<ResourcesPage />} />
      <Route path="tasks" element={<TasksPage />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


