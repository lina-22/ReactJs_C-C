import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ProductModal({ show, handleClose, saveProduct }) {
  const [state, setState] = useState({
    name: "",
    is_featured: false,
    price: "",
    discount: "",
    image: "",
    description: "",
    isLoading: false,
  });

  const onChangeHandler = (e) => {
    setState((prvSt) => {
      if (e.target.type == "checkbox") {
        return {
          ...prvSt,
          [e.target.name]: e.target.checked ? 1 : 0,
        };
      }

      if (e.target.type == "file") {
        return {
          ...prvSt,
          [e.target.name]: e.target.files[0],
        };
      }

      return {
        ...prvSt,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setState((prevSt) => ({ ...prevSt, isLoading: true }));

    const formData = new FormData();

    formData.append("name", state.name);
    formData.append("price", state.price);
    formData.append("discount", state.discount);
    formData.append("image", state.image);
    formData.append("description", state.description);
    formData.append("is_featured", state.is_featured);

    saveProduct(formData, () => {
      setState({
        name: "",
        price: "",
        discount: "",
        image: "",
        description: "",
        is_featured: false,
        isLoading: false,
      });
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>

        <Form.Group className="mb-3" controlId="cat_name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="text"
              name="name"
              value={state.name}
              placeholder="Name"
              disabled={state.isLoading}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="number"
              name="price"
              value={state.price}
              placeholder="price"
              disabled={state.isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="number"
              name="discount"
              value={state.discount}
              placeholder="discount"
              disabled={state.isLoading}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="file"
              name="image"
              placeholder="Select Image"
              disabled={state.isLoading}
            />
          </Form.Group>
         

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              type="text"
              name="description"
              value={state.description}
              placeholder="description"
              disabled={state.isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="is_featured">
            <Form.Check
              type="checkbox"
              name="is_featured"
              onClick={onChangeHandler}
              label="Is Featured"
              checked={state.is_featured}
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

export default ProductModal;
