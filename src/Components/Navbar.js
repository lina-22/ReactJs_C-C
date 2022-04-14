
import { Link } from 'react-router-dom';
import logoImg from '../images/imgPage1/logo.png';
import panierImg from '../images/imgPage1/panier_img.png';
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
                <li><Link to = "/" >|| Accueil  || </Link> </li>
                <li><Link to ="/boutiqueLandingImages">|| Boutique  || </Link></li>
                {/* <li><Link to ="/boutiqueSubSection">|| Boutique  || </Link></li> this link for one drees boutiqueLandingImages  */}
                <li><Link to ="/seConnecter">|| Se connecter  ||</Link></li>
                <li><Link to ="/panier">|| Panier  ||</Link></li>
                <li><Link to ="/propos">|| Propos  ||</Link></li>
            </ul>
        </nav>
    </section>
    );
}
export default Navbar;