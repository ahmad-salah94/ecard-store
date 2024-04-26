import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // Routes,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import VisitorLayout from "./components/layouts/VisitorLayout";
import Main from "./pages/unSingedInUser/Main";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      // </Routes>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
