import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import Accueil from "./Pages/User/Accueil";
import Boutique from "./Pages/User/Boutique";
import SeConnecter from "./Pages/User/SeConnecter";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div class="main">
      <div id="landing">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Accueil/>}/> */}
          <Route path="/boutique" element={<Boutique/>}/>
          {/* <Route path="/seConnecter" element={<SeConnecter/>}/>  */}
          
        </Routes>


       <Footer/>
      </div>
    </div>
  );
}

export default App;
