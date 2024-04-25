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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<Main />} />
        {/* <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> */}
      </Route>
      // </Routes>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
