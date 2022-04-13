import selectedItem from '../../images/imgPage5/image6.png';
import masterCard from '../../images/imgPage1/image_master_card.png';
import paypal from '../../images/imgPage1/paypal.png';
import visa from '../../images/imgPage1/image_visa.png';

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
              Paiments Methods <br /> We Accept{" "}
            </p>
            <section className="panierpayment_methods">
              <img src={masterCard} alt="" />
              <img src={paypal} alt="" />
              <img src={visa} alt="" />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Panier;
