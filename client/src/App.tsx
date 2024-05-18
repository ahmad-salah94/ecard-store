import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
import UserOrders from "./pages/user/UserOrders";
import UserInvoices from "./pages/user/UserInvoices";
import TransactionLog from "./pages/user/TransactionLog";
import OurDistrubitors from "./pages/user/OurDistrubitors";
import UserSupport from "./pages/user/UserSupport";
import ProfileSettings from "./pages/user/ProfileSettings";
import AdminLayout from "./layouts/AdminLayout";
import DashboardMain from "./pages/dashboard/DashboardMain";
import DashboardAddUser from "./pages/dashboard/DashboardAddUser";
import DashboardChargeOperations from "./pages/dashboard/DashboardChargeOperations";
import DashboardGroups from "./components/dashboard/DashboardGroups";
import DashboardAddCategory from "./pages/dashboard/DashboardAddCategory";
import DashboardAllCategories from "./pages/dashboard/DashboardAllCategories";
import DashboardChargeOrders from "./pages/dashboard/DashboardChargeOrders";
import DashboardCurrencies from "./pages/dashboard/DashboardCurrencies";
import DashboardAllProducts from "./pages/dashboard/DashboardAllProducts";
import DashboardAddProduct from "./pages/dashboard/DashboardAddProduct";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    // Use the currentLanguage instead of selectedLanguage
    i18n.changeLanguage(localStorage.getItem("preferredLanguage") ?? "en");
    document.body.dir = i18n.dir();
  }, [i18n]); // Include

  const authenticated = localStorage.getItem("token");
  const role: "admin" | "client" = "admin";
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {authenticated && role === "client" ? (
          <Route element={<UserLayout />}>
            <Route path="/" element={<UserMain />} />
            <Route path="/orders" element={<UserOrders />} />
            <Route path="/invoices" element={<UserInvoices />} />
            <Route path="/transaction-log" element={<TransactionLog />} />
            <Route path="/our-distrubitors" element={<OurDistrubitors />} />
            <Route path="/support" element={<UserSupport />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Route>
        ) : authenticated && role === "admin" ? (
          <Route element={<AdminLayout />}>
            <Route path="/" element={<DashboardMain />} />
            <Route path="/add-user" element={<DashboardAddUser />} />
            <Route path="/groups" element={<DashboardGroups />} />
            <Route path="/add-category" element={<DashboardAddCategory />} />
            <Route path="/charge-orders" element={<DashboardChargeOrders />} />
            <Route path="/currencies" element={<DashboardCurrencies />} />
            <Route path="/products" element={<DashboardAllProducts />} />
            <Route path="/add-product" element={<DashboardAddProduct />} />
            <Route
              path="/all-categories"
              element={<DashboardAllCategories />}
            />
            <Route
              path="/charge-operations"
              element={<DashboardChargeOperations />}
            />
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
