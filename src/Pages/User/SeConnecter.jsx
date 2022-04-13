import img26 from '../../images/imgPage3/image26.png';
import img27 from '../../images/imgPage3/image27.png';
import img28 from '../../images/imgPage3/image28.png';

function SeConnecter(){
    return(
        <div id="Boutique_body">
        <aside id="sidebar">
            <section id="sidebar1">
               {/* <h2>Catégorie</h2> <br/><hr> */}
               <p>Femme <br/> <br/> Homme <br/> <br/> Enfants <br/> <br/> Summer <br/> <br/> winter</p>
            </section>
            <section id="sidebar2">
               {/* <h4>Taille</h4> <br/> <hr> */}
               <p> Unique  XL</p><br/> 
               <section className="size_area">
               <p>XS  S</p> <br/>
               <p>M  L</p> <br/>
               

{/* 
               <!-- <button>XS</button> <button>S</button> <br/>
               <button>M</button> <button>L</button> <br/>
               <button>XL</button> --> */}
              </section>
            </section>
        </aside>

        <section id="section_images">
            <img src={img26} alt=""/>
            <img src={img27} alt=""/>
            <img src={img28} alt=""/>
        </section>

      </div>
    );
}
export default SeConnecter;