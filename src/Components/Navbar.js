
import { Link } from 'react-router-dom';
import logoImg from '../images/imgPage1/logo.png';
import panierImg from '../images/imgPage1/panier_img.png';
import "../CSS_Components/Navbar.css";
function Navbar(){
    return(
        <section className="top">
        <p className="top_p">Choisissez et récupérez votre produit de n'importe où</p>
        <section className="logo_area">
            <section className="main_logo">
            <img src={logoImg} alt=""/>
            </section>
            <p id="name">Click & Collect</p>
            <section className="panier_logo">
            <img className="panier" src={panierImg} alt=""/>
            </section>
        </section>
        <nav className="navbar">
            <ul> 
                <button><li><Link to = "/" >|| Accueil  || </Link> </li></button>
                <button><li><Link to ="/boutiqueLandingImgaes">|| Boutique  || </Link></li></button>
                
                {/* </button><li><Link to ="/boutiqueSubSection">|| Boutique  || </Link></li></button> this link for one drees boutiqueLandingImages  */}
                <button><li><Link to ="/seConnecter">|| Connexion  ||</Link></li></button>
                <button><li><Link to ="/panier">|| Panier  ||</Link></li></button>
                <button><li><Link to ="/propos">|| Propos  ||</Link></li></button>
            </ul>
        </nav>
    </section>
    );
}
export default Navbar;