import { Routes, Route } from "react-router-dom";

import AdminLayout from "./Components/AdminLayout";
import UserLayout from "./Components/UserLayout";

import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";


import Panier from "./Pages/User/Group";
import Propos from "./Pages/User/Propos";
import Payment from "./Pages/User/payment";

import AdminDashBord from "./Pages/Admin/AdminDashBord";
import Category from "./Pages/Admin/Category";
import Product from "./Pages/Admin/Product";
import ProductAvailable from "./Pages/Admin/ProductAvailable";

import Login from "./Pages/Auth_Connexion/Login";

import {
  AuthContext,
  CategoryContext,
  ProductContext,
  ProductAvailableContext,
  ReservationContext,
  AdminReservationContext,
} from "./contexts";
import { useReducer } from "react";
import { authReducer } from "./reducers/authReducer";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { categoryReducer, categoryStore } from "./reducers/categoryReducer";
import { productReducer, productStore } from "./reducers/productReducer";
import {
  productAvailableReducer,
  productAvailableStore,
} from "./reducers/productAvailableReducer";
import Registration from "./Pages/Auth_Connexion/Registration";
import { reservationReducer, reservationStore } from "./reducers/reservationReducer";
import Carts from "./Pages/User/carts";
import { adminReservationReducer, adminReservationStore } from "./reducers/adminReservationReducer";
import Reservations from "./Pages/Admin/Reservations";

const token = localStorage.getItem("AccessToken");
// console.log(token);
if (token) {
  axios.defaults.headers.common = { Authorization: token };
}

function App() {
  const [auth, authDispatch] = useReducer(authReducer, {});

  const [categoryValue, categoryDispatch] = useReducer(
    categoryReducer,
    categoryStore
  );

  const [productValue, productDispatch] = useReducer(
    productReducer,
    productStore
  );

  const [productAvailableValue, productAvailableDispatch] = useReducer(
    productAvailableReducer,
    productAvailableStore
  );

  const [reservationValue, reservationDispatch] = useReducer(
    reservationReducer,
    reservationStore
  ); 
  const [adminReservationValue, adminReservationDispatch] = useReducer(
    adminReservationReducer,
    adminReservationStore
  );
  return (
    <>
    <AuthContext.Provider value={{ auth, authDispatch }}>
      <CategoryContext.Provider value={{ categoryValue, categoryDispatch }}>
        <ProductContext.Provider value={{ productValue, productDispatch }}>
          <ProductAvailableContext.Provider
            value={{ productAvailableValue, productAvailableDispatch }}
          >
            <ReservationContext.Provider
              value={{ reservationValue, reservationDispatch }}
            >
              <AdminReservationContext.Provider value={{ adminReservationValue, adminReservationDispatch }}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashBord />} />
                    <Route path="category" element={<Category />} />
                    <Route path="product" element={<Product />} />
                    <Route
                      path="product_availables"
                      element={<ProductAvailable />}
                    />

                    <Route path="reservations" element={<Reservations />} />
                  </Route>

                  <Route path="/" element={<UserLayout />}>
                    <Route index element={<Accueil />} />
                    <Route
                      path="boutiqueSubSection/:productID"
                      element={<BoutiqueSubSection />}
                    />
                  
                    <Route
                      path="boutiqueLandingImgaes"
                      element={<BoutiqueLandingImgaes />}
                    />
                
                    <Route path="panier" element={<Panier />} />
                    <Route path="propos" element={<Propos />} />
                    <Route path="carts" element={<Carts />} />
                    <Route path="payment" element={<Payment />} />
                  </Route>
                </Routes>
              </AdminReservationContext.Provider>
            </ReservationContext.Provider>
          </ProductAvailableContext.Provider>
        </ProductContext.Provider>
      </CategoryContext.Provider>
    </AuthContext.Provider>
    <ToastContainer />
  </>
);
}


export default App;