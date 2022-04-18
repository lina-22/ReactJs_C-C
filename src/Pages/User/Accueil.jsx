import mainImg from '../../images/imgPage1/main_img.jpg';
import tshirt1 from '../../images/imgPage1/T-shirt1.png';
import formal1 from '../../images/imgPage1/Formal1.png';
import formal2 from '../../images/imgPage1/Formal2.png';
import tshirt2 from '../../images/imgPage1/T-shirt2.png';
import photoLeft from '../../images/imgPage1/photo_left.png';
import photoRight from '../../images/imgPage1/photo_right.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../utils';

function Accueil() {

  const [state, setState] = useState({
    products: [],
    categories: []
  });
  useEffect(() =>{
    axios.get(`${BACKEND_URL}/gethomedata`).then((res) =>{
     
     const responseData = res.data;

     if(responseData.status === true){
       setState(responseData.data);
     }

    }).catch((err) =>{
      console.log(err);
    })
  }, []);


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
            {
              state.products.map((product, index)=> <img src={product.image} key={index} alt="" />)
            }

            {/* <img src={state.products[0] && state.products[0].image} alt="" />
            <img src={state.products[1] && state.products[1].image} alt="" />
            <img src={state.products[2] && state.products[2].image} alt="" />
            <img src={state.products[3] && state.products[3].image} alt="" /> */}
          </section>
        </section>

        <section className="second_landing_images">
          <section className="sectionA">
          <img className="photo_left" src={state.categories[0] && state.categories[0].image} alt="" />
            <p className="mode_text1">Mode maintentant pour les homme</p>
          </section>
          <section className="sectionB">
            <p className="mode_text2">Mode maintentant pour les femme</p>
            <img className="photo_right" src={state.categories[1] && state.categories[1].image} alt="" />
          </section>
        </section>
      </div>{" "}
   
    </div>
  );
}

export default Accueil;
