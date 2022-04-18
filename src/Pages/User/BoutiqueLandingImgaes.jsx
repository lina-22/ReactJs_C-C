import img26 from "../../images/imgPage3/image26.png";
import img27 from "../../images/imgPage3/image27.png";
import img28 from "../../images/imgPage3/image28.png";

function BoutiqueLandingImgaes() {
  
  // const [state, setState] = useState({
  //   // products: [],
  //   categories: []
  // });
  // useEffect(() =>{
  //   axios.get(`${BACKEND_URL}/categories`).then((res) =>{
     
  //    const responseData = res.data;

  //    if(responseData.status === true){
  //      setState(responseData.data);
  //    }

  //   }).catch((err) =>{
  //     console.log(err);
  //   })
  // }, []);
  
  
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

        <section className ="landingsection_images">
          <img className="display_img" src={img27} alt="" />
          <img className="display_img" src={img28} alt="" />
          <img className="display_img" src={img26} alt="" />

          {/* {
              state.products.map((category, index)=> <img src={category.image} key={index} alt="" />)
            } */}
          {/* <img className="display_img" src={state.categories[0] && state.categories[0].image} alt="" />
          <img className="display_img" src={state.categories[1] && state.categories[1].image} alt="" />
          <img className="display_img" src={state.categories[2] && state.categories[2].image} alt="" /> */}
        </section>
      </div>
    </div>
  );
}
export default BoutiqueLandingImgaes;
