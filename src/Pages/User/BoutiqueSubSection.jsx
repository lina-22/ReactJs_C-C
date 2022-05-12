import "../../CSS_User/BoutiqueSubSection.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL, IMAGE_URL } from "../../utils";
import { toast } from "react-toastify";
import { Button, ListGroup } from "react-bootstrap";
import { AuthContext } from "../../contexts";

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
      <div id="boutiqeSubsection">
        <h1>Boutique</h1>
        <br /> <br />
        <h4> Idées susceptibles de vous plaire </h4>
      </div>

      <div id="Boutique_body">
      <div>
        <p>Product name</p><br />
        <p>price: 29€</p><br />
        <p>discount</p><br />
        <p>description:2.	Femme Chaussures Modernes Salon Chaussures de Salsa Danse en ligne Utilisation Talon Talon Cubain Bronze </p><br />
        <section className="middleImg">
          <img src={`${IMAGE_URL}/${product.image}`} alt="" />
        </section>
        </div>

        <section id="sidebar2">
          <h4 id="color">Choisissez Couleur</h4>
          <section id="img_sidebar2">
            <aside id="sidebar_inf">
              {product.availables &&
                product.availables.map((avail, index) => <AvailableBox avl={avail} key={index} />)}
            </aside>
          </section>
        </section>
      </div>
    </div>
  );
}
export default BoutiqueSubSection;

function AvailableBox({ avl }) {
  const [cartQuantity, setCartQuantity] = useState();
  const {auth} = useContext(AuthContext);
  const navigator = useNavigate();
  const location = useLocation();

  const onChangeHandler = (e) => {
    if(e.target.value > avl.quantity){
      toast.warning('Amount Is Larger then Quantity!');
    }else{
      setCartQuantity(e.target.value)
    }
    
  }

  const addToCart = () => {
    if(auth.user){

      axios.post(`${BACKEND_URL}/productsLine`, {product_available_id: avl.id, quantity: cartQuantity}).then(res => {
        let {message, data, status} = res.data;

        if(status){
          toast.success('Added To Cart!');
        }else{
          toast.success(message);
        }
      }).catch(err => {

      })

    }else{
      toast.warning('You Must be Logged In!')
      navigator('/login', {state: {prevLocation: location.pathname}});
    }

  }

  return (
    <div className="mt-3 p-2 border">
      <ListGroup>
        <ListGroup.Item>Colour: {avl.colour}</ListGroup.Item>
        <ListGroup.Item>Size: {avl.size}</ListGroup.Item>
        <ListGroup.Item>Quantity: {avl.quantity}</ListGroup.Item>
      </ListGroup>
      <div className="row">
        <div className="col-6 p-2">
          <input type="number" onChange={onChangeHandler} value={cartQuantity} className="form-control" min={0} />
        </div>
        <div className="col-6 p-2">
          <Button variant="primary" onClick={addToCart} className="w-100">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
