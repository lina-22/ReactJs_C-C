// import "../../CSS_Components/Navbar.css";
import "../../CSS_Admin/AdminDashBord.css";
import AdminDashBoardImg from "../../images/sb-admin-2.png";
import { Button, Container, Table } from "react-bootstrap";

function AdminDashBord() {
  return (
    <Container className="mx-auto">
    <div>
      <section className="AdminDashBoardImg">
        <img src={AdminDashBoardImg} alt="" />
      </section>
    </div>
    </Container>
  );
}

export default AdminDashBord;
