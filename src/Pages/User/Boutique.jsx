import img1 from '../../images/imgPage2/image1.png';
import img2 from '../../images/imgPage2/image2.png';
import img3 from '../../images/imgPage2/image3.png';
import img4 from '../../images/imgPage2/image4.png';
import img5 from '../../images/imgPage2/image5.png';
import img6 from '../../images/imgPage2/image6.png';
function Boutique() {
  return (
    <div>
    <div id="boutiqe">
      <h1>Boutique</h1>
      <br /> <br />
      <h4> Votre produit Choisissez</h4>
    </div>

    <div id="Boutique_body">
      <section id="sidebar1">
        <aside id="sidebar_img">
          <img className="sideImg" src={img1} alt="" /> <br />
          <img className="sideImg" src={img2} alt="" /> <br />
          <img className="sideImg" src={img3} alt="" />
        </aside>
      </section>

      <section className="middleImg">
        <img src={img4} alt="" />
      </section>

      <section id="sidebar2">
        <h4 id="color">Couleur</h4>
        <section id="img_sidebar2">
          <aside id="sidebar_inf">
            <section className="side_imgs">
              <img className="couleur_img" src={img5} alt="" />
              <img className="couleur_img" src={img6}alt="" />
            </section>
            <h4 className="taille">Taille</h4>
            <p className="taille1">Taille Unique</p>
            <section className="size_area">
              <p>XS S</p>
              <p>M L</p>
              <p>XL XXL</p>
            </section>

            <section className="quantity_adjust">
              <p>Quantité</p>
              <button>+</button>
              <button>-</button> <br />
            </section>
            <button className="btn">
              <i className="fa fa-trash"></i> Trash
            </button>
            <button id="add_button"> Ajouter au Panier</button>
          </aside>
        </section>
      </section>
    </div>
  </div>
);
}
export default Boutique;
