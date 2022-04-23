import { Container, Table } from "react-bootstrap";


function Category() {
    return ( 
        <Container>
        <h1 className="text-center">Ctegory</h1>
        <hr />
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }

export default Category;