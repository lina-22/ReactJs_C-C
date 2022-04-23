import axios from "axios";
import { useContext, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { SET_USER } from "../actionTypes";
import { AuthContext } from "../contexts";
import { BACKEND_URL } from "../utils";
import MyNavbar from "./NavbarAdmin";
// import Footer from "./Footer";
function AdminLayout() {
  const { auth, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      axios
        .get(`${BACKEND_URL}/profile`)
        .then((res) => {
          const { status, data, message } = res.data;
          if (status) {
            authDispatch({
              type: SET_USER,
              payload: data,
            });
          } else {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/login");
        });
    } else {
      if (![1, 2].includes(auth.user.role_id)) {
        navigate("/");
      }
    }
  }, [auth.user]);

  return (
    <div className="mainAdmin">
      <MyNavbar />
      <h1 id="admin">Admin Dashbord</h1>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Item>
                <Link className="nav-link" to="/admin/category">Category</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <MyNavbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default AdminLayout;
