import axios, { Axios } from "axios";
import moment from "moment";
import { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { LOAD_ADMIN_RESERVATIONS } from "../../actionTypes";
import { AdminReservationContext } from "../../contexts";
import { BACKEND_URL } from "../../utils";

function Reservations() {
    const { adminReservationValue, adminReservationDispatch } = useContext(AdminReservationContext);

  useEffect(() => {
    if(!adminReservationValue.isLoaded){
      axios.get(`${BACKEND_URL}/reservations`).then(res => {
        const {status, message, data} = res.data;

        if(status){
          adminReservationDispatch({type: LOAD_ADMIN_RESERVATIONS, payload: data});

          toast.success(message);
        }else{
          toast.error(message)
        }

      }).catch(err => {
        console.log(err);
        toast.error("Something Went Wrong!!")
      })

    }
  }, []);

  return (
    <>
      <Container className="mx-auto">
        <div className="clearfix my-2">
          <h1 className="float-start">Reservations</h1>
        </div>
        <hr />
        {adminReservationValue.isLoaded ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Reference</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Expire Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminReservationValue.reservations.map((resv, index) => (
              // <ProductTr
              //   handleShowModal={handleShowModal}
              //   handleAttatchModal={handleAttatchModal}
              //   product={prod}
              //   key={index}
              // />
              <tr key={index}>
                <td>{resv.id}</td>
                <td>{resv.reference}</td>
                <td>{resv.status}</td>
                <td>{moment(resv.created_at).format('DD MMM YYYY')}</td>
                <td>{moment(resv.expire_date).format('DD MMM YYYY')}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center my-5">
          <h4>Loading..............</h4>
        </div>
      )}
      </Container>
    </>
  );
}

export default Reservations;