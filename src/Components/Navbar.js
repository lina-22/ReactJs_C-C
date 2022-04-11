function Navbar(){
    return(
        <section className="top">
        <p className="top_p">Choisissez et récupérez votre produit de n'importe où</p>
        <section className="logo_area">
            <section className="main_logo">
            <img src="Images/imgPage1/logo.png" alt=""/>
            </section>
            <p id="name">Click & Collect</p>
            <section className="panier_logo">
            <img className="panier" src="Images/imgPage1/panier_img.png" alt=""/>
            </section>
        </section>
        <nav className="navbar">
            <ul>
                <li>|| Accueil  ||</li>
                <li>|| Boutique  ||</li>
                <li>|| Se connecter  ||</li>
                <li>|| Panier  ||</li>
                <li>|| Propos  ||</li>
            </ul>
        </nav>
    </section>
    );
}
export default Navbar;