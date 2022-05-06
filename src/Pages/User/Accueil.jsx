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

import '../../CSS_User/Accueil.css'

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
    <div className="hero">
        <img className="main_image" src={mainImg} alt="" />  
        <h2 className='info_pub'>
             économisez votre temps <br/> et vivez facilement      
        </h2>
        <h3>
        Offre toujous disponible!!
        </h3>
    </div>
    <div className="promo_trending">
      <section className="promotoion">
        <h4>
          Feel the <br/><span>fashion of modern world</span>
        </h4>
        <article>
          {
            state.products.slice(0, 4).map((product, index)=>( 
            <a href="">
                <img src={product.image} key={index} alt="" /> 
            </a> 
            ))
          }
        </article>
      </section>
      <section className="trending">
          <article>
              <img className="photo_right" src={photoRight} alt="" />  
              <p>à la mode maintenant</p>
              <p>pour les femmes</p>
          </article>
          <article>
          <p>à la mode maintenant</p>
              <p>pour les hommes</p>
              <img className="photo_right" src={photoRight} alt="" />  
          </article>
      </section>
    </div>
    </div>
  
  );
}

export  default Accueil ;