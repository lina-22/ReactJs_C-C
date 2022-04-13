import mainImg from '../../images/imgPage1/main_img.jpg';
import tshirt1 from '../../images/imgPage1/T-shirt1.png';
import formal1 from '../../images/imgPage1/Formal1.png';
import formal2 from '../../images/imgPage1/Formal2.png';
import tshirt2 from '../../images/imgPage1/T-shirt2.png';
import photoLeft from '../../images/imgPage1/photo_left.png';
import photoRight from '../../images/imgPage1/photo_right.png';
function Accueil() {
  return (
    <div>
      <section className="header">
        <img className="main_image" src={mainImg} alt="" />
        <section className="offer_inf">
          <p className="offer_inf1">
            <span>
              <b> économisez votre temps et vivez facilement</b>
            </span>
          </p>
          <p className="offer_inf2">
            <span>
              <b>Offre toujous disponible!!</b>
            </span>
          </p>
        </section>
      </section>
      <div className="landing_images">
        <section className="first_landing">
          <p className="first_message">
            {" "}
            <span>
              <b>Feel the</b>
            </span>{" "}
            <br /> <i>**THE FASHION OF MODERN WORLD**</i>
          </p>
          <section className="first_landing_images">
            <img src={tshirt1} alt="" />
            <img src={formal1} alt="" />
            <img src={formal2} alt="" />
            <img src={tshirt2} alt="" />
          </section>
        </section>

        <section className="second_landing_images">
          <section className="sectionA">
            <img className="photo_left" src={photoLeft} alt="" />
            <p className="mode_text1">Mode maintentant pour les homme</p>
          </section>
          <section className="sectionB">
            <p className="mode_text2">Mode maintentant pour les femme</p>
            <img className="photo_right" src={photoRight} alt="" />
          </section>
        </section>
      </div>{" "}
   
    </div>
  );
}

export default Accueil;
