import img26 from "../../images/imgPage3/image26.png";
import img27 from "../../images/imgPage3/image27.png";
import img28 from "../../images/imgPage3/image28.png";
import "../../CSS_User/BoutiqueLandingImages.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contexts";
import axios from "axios";
import { BACKEND_URL, IMAGE_URL } from "../../utils";
import { LOAD_CATEGORIES } from "../../actionTypes";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
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

      <Container className="mx-auto">
        <Row>
          <Col sm={3} lg={2}>
            <div className="px-2">
              <h2>Catégorie</h2> <br />
              <hr />
              <p>
                {categoryValue.categories.map((cat, index) => (
                  <Button
                    className="w-100 mt-2 py-1"
                    variant={catIndex === index ? "primary" : "light"}
                    key={index}
                    onClick={() => setCatIndex(index)}
                  >
                    {cat.name}
                  </Button>
                ))}
              </p>
            </div>
          </Col>
          <Col sm={9} lg={10}>
            <div className="px-2">
              <Row>
                {categoryValue.categories[catIndex] &&
                  categoryValue.categories[catIndex].products.map(
                    (prod, index) => (
                      <Col sm={6} md={4} lg={3} key={index} className="mb-2">
                        <div className="px-2">
                          <div className="bg-light py-3 px-2">
                            <h6>{prod.name}</h6>
                          </div>
                          <Link to={`/boutiqueSubSection/${prod.id}`} href="#">
                            <img
                              className="w-100"
                              src={`${IMAGE_URL}/${prod.image}`}
                              alt=""
                            />
                          </Link>
                          <div className="bg-light py-3 px-2">
                            <strong>&euro; {prod.price}</strong>
                            <br />
                            <strong>&euro; {prod.discount}</strong>
                            <br />
                            <h6>{prod.description}</h6>
                          </div>
                        </div>
                      </Col>
                    )
                  )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default BoutiqueLandingImgaes;
