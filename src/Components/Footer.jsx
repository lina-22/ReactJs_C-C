import masterImg from "../images/imgPage1/image_master_card.png";
import paypalImg from "../images/imgPage1/paypal.png";
import visaImg from "../images/imgPage1/image_visa.png";

import img20 from "../images/imgPage1/image 20.png";
import img21 from "../images/imgPage1/image 21.png";
import img22 from "../images/imgPage1/image 22.png";
import "../CSS_Components/Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <footer>
        <section className="btm_top">
          <section>
            <h5>Paiements</h5>
            <br />
            <span>
              <img className="methods" src={masterImg} alt="" />
              <img className="methods" src={paypalImg} alt="" />
              <img className="methods" src={visaImg} alt="" />
            </span>
          </section>
          <section>
            <h5>Corporate Information</h5>
            <br />
            <span>
              <p> Sécurité</p>
              <p>Career avec nous</p>
              <p>Conditions générales de vente</p>
            </span>
          </section>
          <section>
            <h5>Trouver de L'aide</h5>
            <br />
            <span>
              <p> FAQ </p>
              <p>Mon compte</p>
              <p>Guide des tailles</p>
            </span>
          </section>
        </section>
        <section className="bottom">
          <br />
          <p className="about_short">
           Click&Collect
            la plateforme marketplace de vente en gros. Des ventes en gros,
            réservées aux professionnels de la mode, de vêtements pour femmes,
            hommes Click&Collect : la solution simple, rapide et juste pour vos
            approvisionnements.Venez rejoindre la
            communauté de ceux qui décident et participent à la mode
            d’aujourd’hui et de demain.Des images incroyables. Une tarification
            flexible.... !
          </p>
          <section className="contact_info">
            <address>
              22 rue de chaigneau, Lorient 2022 DressOnlineDoor. Tout droits
              résevés.
            </address>
            <section className="social">
              <p>Suivez nous</p>
              <span>
                <img className="media_images" src={img20} alt="" />
                <img className="media_images" src={img21} alt="" />
                <img className="media_images" src={img22} alt="" />
              </span>
            </section>
          </section>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
