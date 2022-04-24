import checkImg from '../../images/imgPage4/check.png';
import colorImg from '../../images/imgPage4/image6.png';
import trashImg from '../../images/imgPage4/Trash.png';  

import '../../CSS_User/BoutiqueAjouterPanier.css'

function BoutiqueAjouterPanier() {
    return ( 
        
        <div id="AjouterBoutique_body">
            <div id="Ajouterboutiqe">
                <img id="check" src={checkImg} alt=""/>
                <h3>Ajouter au panier</h3><br/> <br/>
            </div>
            <section id="Ajoutersidebar2">

                <section id="Ajoutermain_consulter">

                    <section className="Ajouterside_imgs">
                        <img className="couleur_img" src={colorImg} alt=""/>
                    </section>

                    <section className="happy_area">
                        <h4 className="taille">Happy Customer</h4> <br/> 
                        <p className="taille1">49.99 Euro</p>
                    </section>

                    <section className="trush">
                        <img src={trashImg} alt=""/> <br/> <br/>
                        <button className="btn"><i className="fa fa-trash"></i> Trash</button>
                    </section>
                </section>
                <section className="buttons">
                    <a href="/Panier">
                    <button id="button1"> VOIRE MON PANIER</button> <br/> <br/>
                    </a>
                    <a href="/BoutiqueLandingImgaes">
                    <button id="button2"> Continuer mes achats</button>
                    </a>
                </section>

            </section>

        </div>
     );
}

export  default BoutiqueAjouterPanier ;
