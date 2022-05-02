
import { Link } from 'react-router-dom';
import logoImg from '../images/imgPage1/logo.png';
import panierImg from '../images/imgPage1/panier_img.png';
import shoppingCartIcon from '../images/imgPage1/shopping_cart.svg';
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
        <marquee className="top_p">
          Choisissez et récupérez votre produit de n'importe où
        </marquee>
        <section className='logo_ttl_bskt'>
        <img className="logo" src={logoImg} alt="" />
        <header>
        <h1>
          Click <span>&</span> Collect
        </h1>
        </header>
        <section className="panier_logo">
            <img className="panier" src={shoppingCartIcon} alt="panier" />
            {
              auth.user && <img style={{width: 25, cursor: "pointer", marginLeft: 10}} onClick={logOutHandler} title="Log Out" src={logout} alt="" />
            }
          </section>
        </section>
        <section className='mainNav'>
          <input type="checkbox" id="nav-toggler" class="nav-toggler" />
          <label for="nav-toggler">
              <span></span>
          </label>
          <nav>
              <ul>
                  <li><a href=""><Link to = "/" >|| Accueil  || </Link></a></li>
                  <li><a href=""><Link to ="/boutiqueLandingImgaes">|| Boutique  || </Link></a></li>
                  <li><a href=""><Link to ="/seConnecter">|| Connexion  ||</Link></a></li>
                  <li><a href=""><Link to ="/panier">|| Panier  ||</Link></a></li>
                  <li><a href=""><Link to ="/propos">|| Propos  ||</Link></a></li>
              </ul>
          </nav>
        </section>
        

        {/* <section className="logo_area">
          <section className="main_logo">
            <img src={logoImg} alt="" />
          </section>
          <p id="name">Click & Collect</p>
          <section className="panier_logo">
            <img className="panier" src={panierImg} alt="" />
            
            {
              auth.user && <img style={{width: 25, cursor: "pointer", marginLeft: 10}} onClick={logOutHandler} title="Log Out" src={logout} alt="" />
            }
            
          </section>
        </section> */}
        {/* <nav className="navbar">
            <ul> 
                <button><li><Link to = "/" >|| Accueil  || </Link> </li></button>
                <button><li><Link to ="/boutiqueLandingImgaes">|| Boutique  || </Link></li></button>
                
                
                <button><li><Link to ="/seConnecter">|| Connexion  ||</Link></li></button>
                <button><li><Link to ="/panier">|| Panier  ||</Link></li></button>
                <button><li><Link to ="/propos">|| Propos  ||</Link></li></button>
            </ul>
        </nav> */}
    </section>
    );
}
export default Navbar;