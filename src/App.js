import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";
import BoutiqueAjouterPanier from "./Pages/User/BoutiqueAjouterPanier";
import SeConnecter from "./Pages/User/SeConnecter";
import Panier from "./Pages/User/Panier";
import Propos from "./Pages/User/Propos";

{/*start Admin Pannel */}
import AdminDashBord from "./Pages/Admin/AdminDashBord";
import AddProduct from './Pages/Admin/AddProduct';
import ManageProduct from './Pages/Admin/ManageProduct';
import SeeAllProduct from './Pages/Admin/SeeAllProduct';
import UpdateProduct from './Pages/Admin/UpdateProduct';
{/*end Admin Pannel */}

function App() {
  return (
    <div classNAme="main">
      <div id="landing">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/boutiqueSubSection" element={<BoutiqueSubSection/>}/>
          <Route path="/boutiqueLandingImgaes" element={<BoutiqueLandingImgaes/>}/> 
          <Route path="/boutiqueAjouterPanier" element={<BoutiqueAjouterPanier/>}/>
          <Route path="/seConnecter" element={<SeConnecter/>}/>
          <Route path="/panier" element={<Panier/>}/>
          <Route path="/propos" element={<Propos/>}/>

              
              {/*start Admin Pannel */}
          <Route path="/adminDashBord" element={<AdminDashBord/>}/> 
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/manageProduct" element={<ManageProduct/>}/>
          <Route path="/seeAllProduct" element={<SeeAllProduct/>}/>
          <Route path="/updateProduct" element={<UpdateProduct/>}/>

          {/*end Admin Pannel */}
          
        </Routes>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
