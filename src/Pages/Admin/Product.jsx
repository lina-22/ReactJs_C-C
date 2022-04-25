import axios from "axios";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductModal from "../../Components/Product/ProductModal";
import { BACKEND_URL } from "../../utils";

function Product() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prvSt) => !prvSt)

  }

  const saveProduct = (data, calback) => {
    axios.post(`${BACKEND_URL}/products`, data).then(res => {
      const {status, data, message} = res.data;
      if(status){
        // todo dispatch
        console.log(data);
        toast.success(message);
        handleShowModal();
      }else{
        toast.error(message)
      }

      calback()
    }).catch(err => {
      toast.error("Server Error!");
      console.log(err);
      calback()
    })

  }

  return (
    <Container>
      <div className="clearfix my-2">
        <h1 className="float-start">Product</h1>
        <Button onClick={handleShowModal} className="float-end" variant="primary">
          Add Product
        </Button> 
        <Button onClick={handleShowModal} className="float-end" variant="primary">
          Update Product
        </Button>
      </div>

      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>is_featured</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>

      <ProductModal show={showModal} handleClose={handleShowModal} saveProduct={saveProduct}/>
    </Container>
  );
}

export default Product;
