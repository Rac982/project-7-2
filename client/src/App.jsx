import { Navigate, Route, Routes } from "react-router-dom";
import Private from "./layout/Private";
import Public from "./layout/Public";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/private/Home";
import Categories from "./pages/private/Categories";
import Products from "./pages/private/Products";
import Payments from "./pages/private/Payments";
import ConfirmPayment from "./pages/ConfirmPayment";

import Cart from "./pages/private/Cart"; // carrello
import { useSelector } from "react-redux";
import PublicBusiness from "./layout/PublicBusiness";
import PrivateBusiness from "./layout/PrivateBusiness";
import Reviews from "./pages/dashboard/Reviews";
import LoginBusiness from "./pages/dashboard/LoginBusiness";
import Dashboard from "./pages/dashboard/Dashboard";

const ProtectRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/" />;

  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route
          path="/private"
          element={
            <ProtectRoute>
              <Private />
            </ProtectRoute>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products/:category_id" element={<Products />} />
          <Route path="payments" element={<Payments />} />
          <Route path="cart" element={<Cart />} /> {/* Rotta cart */}
          <Route path="confirm-payment" element={<ConfirmPayment />} />
        </Route>
        {/* login per business */}
        <Route path="/business" element={<PublicBusiness />}>
          <Route path="login" element={<LoginBusiness />} />
        </Route>
        {/* Business loggato */}
        <Route path="/dashboard" element={<PrivateBusiness />}>
          <Route path="" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;


