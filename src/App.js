// import './App.css';
// import './AppAdmin.css';

// import "./CSS_Components/Footer.css";
// import "./CSS_Components/Navbar.css";

// import "./CSS_Admin/AddProduct.css";
// import "./CSS_Admin/AdminDashBord.css";
// import "./CSS_Admin/ManageProduct.css";
// import "./CSS_Admin/SeeAllProduct.css";
// import "./CSS_Admin/UpdateProduct.css";

// import "./CSS_User/Accueil.css";
// import "./CSS_User/BoutiqueLandingImages.css";
// import "./CSS_User/BoutiqueSubSection.css";
// import "./CSS_User/BoutiqueAjouterPanier.css";
// import "./CSS_User/Panier.css";
// import "./CSS_User/Propos.css";
// import "./CSS_User/SeConnecter.css";

// import AddProduct from "./Pages/Admin/AddProduct";
// import ManageProduct from "./Pages/Admin/ManageProduct";
// import SeeAllProduct from "./Pages/Admin/SeeAllProduct";
// import UpdateProduct from "./Pages/Admin/UpdateProduct";

import { Routes, Route } from "react-router-dom";

import AdminLayout from "./Components/AdminLayout";
import UserLayout from "./Components/UserLayout";

import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";
import BoutiqueBlackdress from "./Pages/User/BoutiqueBlackdress";
import BoutiqueAjouterPanier from "./Pages/User/BoutiqueAjouterPanier";

import Panier from "./Pages/User/Panier";
import Propos from "./Pages/User/Propos";

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

  return (
    <>
      <AuthContext.Provider value={{ auth, authDispatch }}>
        <CategoryContext.Provider value={{ categoryValue, categoryDispatch }}>
          <ProductContext.Provider value={{ productValue, productDispatch }}>
            <ProductAvailableContext.Provider
              value={{ productAvailableValue, productAvailableDispatch }}
            >
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
                  {/* <Route path="addProduct" element={<AddProduct />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="seeAllProduct" element={<SeeAllProduct />} />
            <Route path="updateProduct" element={<UpdateProduct />} /> */}
                </Route>

                <Route path="/" element={<UserLayout />}>
                  <Route index element={<Accueil />} />
                  <Route
                    path="boutiqueSubSection"
                    element={<BoutiqueSubSection />}
                  />
                  <Route
                    path="boutiqueBlackdress"
                    element={<BoutiqueBlackdress />}
                  />
                  <Route
                    path="boutiqueLandingImgaes"
                    element={<BoutiqueLandingImgaes />}
                  />
                  <Route
                    path="boutiqueAjouterPanier"
                    element={<BoutiqueAjouterPanier />}
                  />
               
                  <Route path="panier" element={<Panier />} />
                  <Route path="propos" element={<Propos />} />
                </Route>
              </Routes>
            </ProductAvailableContext.Provider>
          </ProductContext.Provider>
        </CategoryContext.Provider>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;