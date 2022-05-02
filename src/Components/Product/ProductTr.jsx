import axios from "axios";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { DELETE_PRODUCTS, SELECT_PRODUCTS } from "../../actionTypes";
import { ProductContext } from "../../contexts";
import { BACKEND_URL, IMAGE_URL } from "../../utils";

function ProductTr({product, handleShowModal}) {
  const {productDispatch} = useContext(ProductContext)


  const deleteProduct = (id) => {
    if(window.confirm('Are You Sure?')){

      axios.delete(`${BACKEND_URL}/products/${id}`).then(res => {
        const {status, message} = res.data;

        if(status){

          productDispatch({
            type: DELETE_PRODUCTS,
            payload: id
          })
          
          toast.success(message);
        }else{
          toast.error(message);
        }

      }).catch(err => {
        console.log(err);
        toast.error('Server Error!!')
      })
    }
  }

  const editHandler = cat => {
    productDispatch({
      type: SELECT_PRODUCTS,
      payload: cat
    })
    handleShowModal();

  }

  
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.is_featured}</td>
      <td>{product.price}</td>
      <td>{product.discount}</td>
      <td>
        {product.image && (
          <img width={70} src={`${IMAGE_URL}/${product.image}`} />
        )}
      </td>
      <td>{product.description}</td>
      <td>
        <Button
          variant="warning"
          size="sm"
          className="mx-1"
          onClick={() => editHandler(product)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          className="mx-1"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ProductTr;
