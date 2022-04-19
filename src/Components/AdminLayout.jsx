import { Link } from 'react-router-dom';

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";
function AdminLayout() {
  return (
    <div className="main">
      <h1 id="admin">Admin Dashbord</h1>
      <section className="Nav_section">
        <nav className="navbar">
          <ul>
            <li><Link to = "/adminDashBord" >|| AdminDashbord ||</Link></li>
            <li><Link to = "/seeAllProduct" >|| SeeAllProduct ||</Link></li>
            <li><Link to = "/addProduct" >   || AddProduct    ||</Link></li>
            <li><Link to = "/manageProduct" >|| ManageProduct ||</Link></li>
            <li><Link to = "/updateProduct" >|| UpdateProduct ||</Link></li>
            {/* <li><Link to = "/" >|| DeleteProduct ||</Link></li> */}
          </ul>
        </nav>
      </section>
  
         <Navbar />
        <Outlet />
        {/* <Footer /> */}
    </div>
  );
}

export default AdminLayout;
