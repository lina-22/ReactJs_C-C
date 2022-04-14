import img26 from "../../images/imgPage3/image26.png";
import img27 from "../../images/imgPage3/image27.png";
import img28 from "../../images/imgPage3/image28.png";

function BoutiqueLandingImgaes() {
  return (
    <div>
      <div id="landingboutiqe">
        <h1>Boutique</h1>
      </div>

      <div id="landingBoutique_body">
        <aside id="landingsidebar">
          <section id="landingsidebar1">
            <h2>Catégorie</h2> <br />
            <hr />
            <p>
              Femme <br /> <br /> Homme <br /> <br /> Enfants <br /> <br />{" "}
              Summer <br /> <br /> winter
            </p>
          </section>
          <section id="landingsidebar2">
            <h4>Taille</h4> <br /> <hr />
            <p> Unique XL</p>
            <br />
            <section className="landingsize_area">
              <p>XS S</p> <br />
              <p>M L</p> <br />
            </section>
          </section>
        </aside>

        <section id="landingsection_images">
          <img src={img26} alt="" />
          <img src={img27} alt="" />
          <img src={img28} alt="" />
        </section>
      </div>
    </div>
  );
}
export default BoutiqueLandingImgaes;
