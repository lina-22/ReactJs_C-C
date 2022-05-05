import { useContext, useEffect, useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { REMOVE_PRODUCTSAVAILABLE, } from "../../actionTypes";
import { ProductAvailableContext } from "../../contexts";

function ProductAvailableModal({ show, handleClose, saveCategory, updateCategory }) {
  const { productAvailableValue, productAvailableDispatch } = useContext(ProductAvailableContext);
  const [state, setState] = useState({
    product_id: "",
    colour: "",
    quantity: 0,
    size: false,
  });

  const imgRef = useRef();

  useEffect(() => {
    if (productAvailableValue.selectedproductAvailableValue) {
      setState((prvSt) => {
        return {
          ...prvSt,
          product_id: productAvailableValue.selectedproductAvailable.product_id,
          colour: productAvailableValue.selectedproductAvailable.colour,
          quantity: productAvailableValue.selectedproductAvailable.quantity,
          size: productAvailableValue.selectedproductAvailable.size,
        };
      });
    }
  }, [show]);

  const onChangeHandler = (e) => {
    setState((prvSt) => {
      if (e.target.type == "checkbox") {
        return {
          ...prvSt,
          [e.target.product_id]: e.target.checked ? 1 : 0,
        };
      }

      if (e.target.type == "file") {
        return {
          ...prvSt,
          [e.target.product_id]: e.target.files[0],
        };
      }

      return {
        ...prvSt,
        [e.target.product_id]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setState((prevSt) => ({ ...prevSt, isLoading: true }));

    const formData = new FormData();

    formData.append("product_id", state.product_id);
    formData.append("colour", state.colour);
    formData.append("quantity", state.quantity);
    formData.append("size", state.size);

    // if (productAvailable.selectedproductAvailable) {
    //   formData.append("_method", "PUT");
    //   updateProductAvailable(formData, productAvailable.selectedProductAvailable.id);
    // } else {
    //   saveProductAvailable(formData);
    // }
  };

  const resetState = () => {
    productAvailableDispatch({ type: REMOVE_PRODUCTSAVAILABLE,});

    setTimeout(() => {
      setState({
        product_id: "",
        colour: "",
        quantity: 0,
        size: 0,
        isLoading: false,
      });
    }, 5);
  };

  return (
    <Modal show={show} onHide={handleClose} onExit={resetState}>
      <Modal.Header closeButton>
        <Modal.Title>Add New ProductAvailable</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="product_id">
            <Form.Label>Product_id</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="number"
              name="product_id"
              value={state.product_id}
              placeholder="Product_id"
              disabled={state.isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="colour">
            <Form.Label>Colour</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="text"
              name="colour"
              value={state.colour}
              placeholder="colour"
              disabled={state.isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="number"
              name="quantity"
              value={state.quantity}
              placeholder="quantity"
              disabled={state.isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="number"
              name="size"
              value={state.size}
              placeholder="size"
              disabled={state.isLoading}
            />
          </Form.Group>
  

          <Button variant="primary" type="submit" disabled={state.isLoading}>
            {state.isLoading ? "Loading..." : "Submit"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductAvailableModal;
