import "../../CSS_User/BoutiqueSubSection.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL, IMAGE_URL } from "../../utils";
import { toast } from "react-toastify";
import { Button, ListGroup } from "react-bootstrap";

function BoutiqueSubSection() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productID) {
      axios
        .get(`${BACKEND_URL}/products/${productID}`)
        .then((res) => {
          let { status, message, data } = res.data;
          if (status) {
            setProduct(data);
          } else {
            toast.error(message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something Went Wrong!");
        });
    }
  }, [productID]);
  return (
    <div>
      <div id="boutiqe">
        <h1>Boutique</h1>
        <br /> <br />
        <h4> Choisissez Votre produit </h4>
      </div>

      <div id="Boutique_body">
        <section className="middleImg">
          <img src={`${IMAGE_URL}/${product.image}`} alt="" />
        </section>

        <section id="sidebar2">
          <h4 id="color">Choisissez Couleur</h4>
          <section id="img_sidebar2">
            <aside id="sidebar_inf">
              {product.availables &&
                product.availables.map((avl) => (
                  <div className="mt-3 p-2 border">
                    <ListGroup>
                      <ListGroup.Item>Colour: {avl.colour}</ListGroup.Item>
                      <ListGroup.Item>Size: {avl.size}</ListGroup.Item>
                      <ListGroup.Item>Quantity: {avl.quantity}</ListGroup.Item>
                    </ListGroup>
                    <div className="row">
                      <div className="col-6 p-2">
                        <input type="number" className="form-control" min={0} />
                      </div>
                      <div className="col-6 p-2">
                        <Button variant="primary" className="w-100">Save</Button>
                      </div>
                    </div>
                  </div>
                ))}
            </aside>
          </section>
        </section>
      </div>
    </div>
  );
}
export default BoutiqueSubSection;
