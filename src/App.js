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

import { Routes, Route } from "react-router-dom";

import AdminLayout from "./Components/AdminLayout";
import UserLayout from "./Components/UserLayout";

import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";
import BoutiqueAjouterPanier from "./Pages/User/BoutiqueAjouterPanier";
import SeConnecter from "./Pages/User/SeConnecter";
import Panier from "./Pages/User/Panier";
import Propos from "./Pages/User/Propos";

import AdminDashBord from "./Pages/Admin/AdminDashBord";
import AddProduct from "./Pages/Admin/AddProduct";
import ManageProduct from "./Pages/Admin/ManageProduct";
import SeeAllProduct from "./Pages/Admin/SeeAllProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Login from "./Pages/Auth/Login";
import { AuthContext } from "./contexts";
import { useReducer } from "react";
import { authReducer } from "./reducers/authReducer";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./Pages/Admin/Category";
{
  /*end Admin Pannel */
}
const token = localStorage.getItem('AccessToken');
// console.log(token);
if(token){
  axios.defaults.headers.common = { Authorization: token}; 
}

function App() {

  const [auth, authDispatch] = useReducer(authReducer,{})

  return (
    <AuthContext.Provider value={{auth, authDispatch}}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashBord />} />
          <Route path="category" element={<Category />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="seeAllProduct" element={<SeeAllProduct />} />
          <Route path="updateProduct" element={<UpdateProduct />} />
        </Route>

        <Route path="/" element={<UserLayout />}>
          <Route index element={<Accueil />} />
          <Route path="boutiqueSubSection" element={<BoutiqueSubSection />} />
          <Route
            path="boutiqueLandingImgaes"
            element={<BoutiqueLandingImgaes />}
          />
          <Route
            path="boutiqueAjouterPanier"
            element={<BoutiqueAjouterPanier />}
          />
          <Route path="seConnecter" element={<SeConnecter />} />
          <Route path="panier" element={<Panier />} />
          <Route path="propos" element={<Propos />} />
        </Route>
      </Routes>
    </AuthContext.Provider>

  );
}

export default App;
