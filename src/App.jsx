import { createBrowserRouter, RouterProvider } from "react-router";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContextReducerProvider from "./contexts/contextsReducer/AuthContextReducerProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EditProfile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <AuthContextReducerProvider>
      <RouterProvider router={router} />
    </AuthContextReducerProvider>
  );
}
