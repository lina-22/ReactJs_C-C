import masterImg from '../images/imgPage1/image_master_card.png';
import paypalImg from '../images/imgPage1/paypal.png';
import visaImg from '../images/imgPage1/image_visa.png';

// import img20 from '../images/imgPage1/image_visa.png';
// import img21 from '../images/imgPage1/image_visa.png';



function Footer() {
    return (   
    <div class="footer">
        <footer>
            <section class="top_footer">
                <section class="foot-left">
                   <p>paiments</p>
                   <section class="payment_methods">
                   <img src={masterImg} alt=""/>
                   <img src={paypalImg} alt=""/>
                   <img src={visaImg} alt=""/>
                   </section>
                </section>
                <section class="foot-left">
                  <p class="Corporate">Corporate info </p> 
                  <p class="sécurité">Sécurité <br/> Career avec nous <br/> Conditions générales de vente </p>
                </section>
                <section class="foot-left">
                  <p class="aide">Trouver de l’aide </p> 
                  <p class="faq"> FAQ <br/> Mon compte <br/> Guide des tailles</p>
                </section>
            </section>

            <section class="middle_footer">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.</p>
                    <br/>
                    <hr/>
            </section>

            <section class="bottom_footer">
                <p>22 rue de chaigneau, Lorient 2022 DressOnlineDoor. Tout droits résevés.</p>

                <section class="social_media">
                    <p>Suivez Nous:</p> <hr/>
                    <div class="media_images">
                    <img class="media_images" src="Images/imgPage1/image 20.png" alt=""/>
                    <img class="media_images" src="Images/imgPage1/image 21.png" alt=""/>
                    <img class="media_images" src="Images/imgPage1/image 22.png" alt=""/>
                    </div>
                </section>
            </section>
        </footer>

    </div>
  )
}

export default Footer ;