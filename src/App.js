import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import { Routes, Route } from "react-router-dom";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";
import BoutiqueAjouterPanier from "./Pages/User/BoutiqueAjouterPanier";
import Panier from "./Pages/User/Panier";
import SeConnecter from "./Pages/User/SeConnecter";
import Propos from "./Pages/User/Propos";


function App() {
  return (
    <div class="main">
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
          
        </Routes>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
