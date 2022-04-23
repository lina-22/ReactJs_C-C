import selectedItem from '../../images/imgPage5/image6.png';
import masterImg from '../../images/imgPage1/image_master_card.png';
import paypalImg from '../../images/imgPage1/paypal.png';
import visaImg from '../../images/imgPage1/image_visa.png';
import '../../CSS_User/Panier.css'

function Panier() {

  return (
    <div>
      <div id="panierboutiqe">
        <h2>Voir mon panier</h2>
      </div>
      <div id="panierBoutique_body">
        <section id="paniermain_consulter">
          <section className="panierside_imgs">
            <p>Article(s)</p> <br /> <br />
            <img className="paniercouleur_img" src={selectedItem} alt="" />
          </section>

          <section className="panierhappy_area">
            <h4 className="paniertaille">Prix</h4> <br /> <br />
            <p className="paniertaille1">49.99 Euro</p>
          </section>

          <section className="panierpayment_way">
            <p>
              Paiments Methods <br /> <span><b><i>We Accept</i></b></span> {" "}
            </p>           
            <section className="payment_methods">
                <img className="methods" src={masterImg} alt="" />
                <img className="methods" src={paypalImg} alt="" />
                <img className="methods" src={visaImg} alt="" />
              </section>

          </section>
        </section>
      </div>
    </div>
  );
}

export default Panier;
