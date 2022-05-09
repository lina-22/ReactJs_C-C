import img26 from "../../images/imgPage3/image26.png";
import img27 from "../../images/imgPage3/image27.png";
import img28 from "../../images/imgPage3/image28.png";
import "../../CSS_User/BoutiqueLandingImages.css";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contexts";
import axios from "axios";
import { BACKEND_URL, IMAGE_URL } from "../../utils";
import { LOAD_CATEGORIES } from "../../actionTypes";
import { toast } from "react-toastify";
function BoutiqueLandingImgaes() {
  const { categoryValue, categoryDispatch } = useContext(CategoryContext);

  const [catIndex, setCatIndex] = useState(0);
  useEffect(() => {
    if (!categoryValue.isLoaded) {
      axios
        .get(`${BACKEND_URL}/categories`)
        .then((res) => {
          const { status, data, message } = res.data;
          if (status) {
            categoryDispatch({
              type: LOAD_CATEGORIES,
              payload: data,
            });
          } else {
            toast.error(message);
          }
        })
        .catch();
    }
  }, []);

  return (
    <div className="Bboutique">
      <div className="Blandingboutiqe">
        <h1>Boutique</h1>
      </div>

      <div id="landingBoutique_body">
        <aside id="landingsidebar">
          <section className="Blandingsidebar1">
            <h2>Catégorie</h2> <br />
            <hr />
            <p>
              {categoryValue.categories.map((cat, index) => (
                <Button
                  className="w-100 mt-2 py-1"
                  variant={catIndex === index ? "primary" : "light"}
                  key={index}
                  onClick={ () => setCatIndex(index)}
                >
                  {cat.name}
                </Button>
              ))}
            </p>
          </section>
        </aside>

        <section className="Blandingsection_images">
          {categoryValue.categories[catIndex] && categoryValue.categories[catIndex].products.map((prod, index) => (
            <a key={index} href="#">
              <img className="Bdisplay_img" src={`${IMAGE_URL}/${prod.image}`} alt="" />
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
export default BoutiqueLandingImgaes;
