import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

  // Routes,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import VisitorLayout from "./layouts/VisitorLayout";
import Main from "./pages/unSingedInUser/Main";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import UserLayout from "./layouts/UserLayout";
import UserMain from "./pages/user/UserMain";
import NotFound from "./pages/unSingedInUser/NotFound";
import Categories from "./pages/unSingedInUser/Categories";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "./redux/slices/websiteSlice";
import UserOrders from "./pages/user/UserOrders";
import UserInvoices from "./pages/user/UserInvoices";
import TransactionLog from "./pages/user/TransactionLog";
import OurDistrubitors from "./pages/user/OurDistrubitors";
import UserSupport from "./pages/user/UserSupport";

function App() {
  useEffect(() => {
    // Use the currentLanguage instead of selectedLanguage
    i18n.changeLanguage(localStorage.getItem("preferredLanguage"));
    document.body.dir = i18n.dir();
  }, []); // Include

  const { i18n } = useTranslation();

  const authenticated = localStorage.getItem("token");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {authenticated ? (
          <Route element={<UserLayout />}>
            <Route path="/" element={<UserMain />} />
            <Route path="/orders" element={<UserOrders />} />
            <Route path="/invoices" element={<UserInvoices />} />
            <Route path="/transaction-log" element={<TransactionLog />} />
            <Route path="/our-distrubitors" element={<OurDistrubitors />} />
            <Route path="/support" element={<UserSupport />} />
          </Route>
        ) : (
          <Route element={<VisitorLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

// CLIENTiD =      794500423861-srqi5o89spugr3j99so3dophsd44vivd.apps.googleusercontent.com
//CLIENT-SECRECT = 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
