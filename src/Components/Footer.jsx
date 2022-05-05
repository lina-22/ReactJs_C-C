import masterImg from '../images/imgPage1/image_master_card.png';
import paypalImg from '../images/imgPage1/paypal.png';
import visaImg from '../images/imgPage1/image_visa.png';

import img20 from '../images/imgPage1/image 20.png';
import img21 from '../images/imgPage1/image 21.png';
import img22 from '../images/imgPage1/image 22.png';
import "../CSS_Components/Footer.css"

function Footer() {
    return (   
        <div className="footer">
        <footer>
          <section className="top_footer">
            <section className="foot-left">
              <p>paiments</p>
              <section className="payment_methods">
                <img className="methods" src={masterImg} alt="" />
                <img className="methods" src={paypalImg} alt="" />
                <img className="methods" src={visaImg} alt="" />
              </section>
            </section>
            <section className="foot-left">
              <p className="Corporate">Corporate info </p>
              <p className="sécurité">
                Sécurité <br /> Career avec nous <br /> Conditions générales de
                vente{" "}
              </p>
            </section>
            <section className="foot-left">
              <p className="aide">Trouver de l’aide </p>
              <p className="faq">
                {" "}
                FAQ <br /> Mon compte <br /> Guide des tailles
              </p>
            </section>
          </section>
  
          <section className="middle_footer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <hr />
          </section>
  
          <section className="bottom_footer">
            <p>
              22 rue de chaigneau, Lorient 2022 DressOnlineDoor. Tout droits
              résevés.
            </p>
  
            <section className="social_media">
              <p>Suivez Nous:</p> <hr />
              <div className="media_images">
                <img className="media_images" src={img20} alt="" />
                <img className="media_images" src={img21} alt="" />
                <img className="media_images" src={img22} alt="" />
              </div>
            </section>
          </section>
        </footer>
      </div>
    );
  }
  

export default Footer ;