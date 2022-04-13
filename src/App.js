import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import Home from "./Pages/User/Home";
import Boutique from "./Pages/User/Boutique";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div class="main">
      <div id="landing">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/boutique" element={<Boutique/>}/>
          
        </Routes>


       <Footer/>
      </div>{" "}
    </div>
  );
}

export default App;
