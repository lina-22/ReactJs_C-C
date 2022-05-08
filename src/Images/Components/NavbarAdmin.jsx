
import { Link } from 'react-router-dom';
import logoImg from '../images/imgPage1/logo.png';
import panierImg from '../images/imgPage1/panier_img.png';
import logout from '../images/logout.png';
import "../CSS_Components/Navbar.css";
import { useContext } from 'react';
import { AuthContext } from '../contexts';
import { LOG_OUT } from '../actionTypes';
function Navbar(){
const {auth, authDispatch} = useContext(AuthContext); 

const logOutHandler = ()=>{
    authDispatch({type:LOG_OUT})
}

    return(
        <section className="top">
        <p className="top_p">
          Choisissez et récupérez votre produit de n'importe où
        </p>
        <section className="logo_area">
          <section className="main_logo">
            <img src={logoImg} alt="" />
          </section>
          <p id="name">Click & Collect</p>
          <section className="panier_logo">
            {/* <img className="panier" src={panierImg} alt="" /> */}
            
            {
              auth.user && <img style={{width: 25, cursor: "pointer", marginLeft: 10}} onClick={logOutHandler} title="Log Out" src={logout} alt="" />
            }
            
          </section>
        </section>
        {/* <nav className="navbar">
            <ul> 
                <li><Link to = "/" >|| Accueil  || </Link> </li>
            </ul>
        </nav> */}
    </section>
    );
}
export default Navbar;