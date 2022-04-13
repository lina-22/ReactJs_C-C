import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import Accueil from "./Pages/User/Accueil";
import BoutiqueLandingImgaes from "./Pages/User/BoutiqueLandingImgaes";
import { Routes, Route } from "react-router-dom";
import BoutiqueSubSection from "./Pages/User/BoutiqueSubSection";
import BoutiqueAjouterPanier from "./Pages/User/BoutiqueAjouterPanier";


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
          
        </Routes>


       <Footer/>
      </div>
    </div>
  );
}

export default App;
