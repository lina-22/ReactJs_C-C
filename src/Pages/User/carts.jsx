import axios from "axios";
import { useContext } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { SET_RESERVATION } from "../../actionTypes";
import { ReservationContext } from "../../contexts";
import { BACKEND_URL, IMAGE_URL } from "../../utils";

function Carts() {
  const { reservationValue} =
    useContext(ReservationContext);
  return (
    <>
      <Container className="mt-5 mx-auto pt-5">
        <h1>Your Carts</h1>
        <hr />
        <Row className="justify-content-center">
          <Col sm={12} lg={8} className="mt-5">
            {reservationValue.cartCount != 0 ? (
              <>
                {reservationValue.reservation.productLines.map((pl, i) => (
                  <SingleCart cart={pl} key={i} />
                ))}
              </>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Carts;

function SingleCart({ cart }) {
  const { reservationDispatch } = useContext(ReservationContext);

  const changeCartQuantity = (action) => {
    axios
      .post(`${BACKEND_URL}/productsLine/${action}`, {
        productline_id: cart.id,
        amount: 1,
      })
      .then((res) => {
        let { status, message, data } = res.data;
        if (status) {
          reservationDispatch({ type: SET_RESERVATION, payload: data });
          toast.success(message);
        } else {
          toast.error(message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong!");
      });
  };

  return (
    <div className="mb-2">
      <div className="border border-warning rounded">
        <Row>
          <Col sm={3}>
            <img
              width="100%"
              src={`${IMAGE_URL}/${cart.product.image}`}
              alt=""
            />
          </Col>
          <Col sm={5}>
            <h4>{cart.product.name}</h4>
          </Col>
          <Col sm={3}>
            <div className="p-2">
              <table className="table text-center">
                <tbody>
                  <tr>
                    <td>Colour</td>
                    <td>:</td>
                    <td>{cart.colour}</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>:</td>
                    <td>{cart.size}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>:</td>
                    <td>{cart.quantity}</td>
                  </tr>
                  <tr>
                    <td>Totol Price</td>
                    <td>:</td>
                    <td>{cart.totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <ButtonGroup className="w-100 mt-4">
                <Button onClick={() => changeCartQuantity('decrement')} variant="info" className="w-50">
                  {" "}
                  -{" "}
                </Button>
                <Button onClick={() => changeCartQuantity('increment')} variant="primary" className="w-50">
                  {" "}
                  +{" "}
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </div>
      <Button variant="danger" className="py-2 w-100 mt-1">
        Delete
      </Button>
    </div>
  );
}