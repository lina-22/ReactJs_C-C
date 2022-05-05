import axios from "axios";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import Product_availablesModal from "../../Components/ProductAvailable/Product_availablesModal";
import { BACKEND_URL } from "../../utils";

function Product_availables() {
  const [showModal, setShowModal] = useState(false);
  const { productValue, productDispatch } = useContext(ProductContext);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/productsAvailable`)
      .then((res) => {
        const { status, data, message } = res.data;
        if (status) {
          productDispatch({
            type: LOAD_PRODUCTAVAILABLES,
            payload: data,
          });

          toast.success(message);
        } else {
          toast.error(message);
        }
      })
      .catch();
  }, []);
  const handleShowModal = () => {
    setShowModal((prvSt) => !prvSt)

  }

  const saveProduct_availables = (data, calback) => {
    axios.post(`${BACKEND_URL}/productsAvailable`, data).then(res => {
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
        <h1 className="float-start">Product_availables</h1>
        <Button onClick={handleShowModal} className="float-end" variant="primary">
          Add Product_availables
        </Button> 
        <Button onClick={handleShowModal} className="float-end" variant="primary">
          Update Product_availables
        </Button>
      </div>

      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product_id</th>
            <th>Colour</th>
            <th>Quantity</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>

      <Product_availablesModal show={showModal} handleClose={handleShowModal} saveProduct_availables={saveProduct_availables}/>
    </Container>
  );
}

export default Product_availables;
