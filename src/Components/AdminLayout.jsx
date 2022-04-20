import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Outlet } from "react-router-dom";
import { AuthContext } from '../contexts';
import Navbar from "./Navbar";
// import Footer from "./Footer";
function AdminLayout() {

  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth.use){
      navigate('/login')
    }  
  },[auth.user])
  return (



    <div className="main">
      <h1 id="admin">Admin Dashbord</h1>
      <section className="Nav_section">
        <nav className="navbar">
          <ul>
            <li><Link to = "/admin/adminDashBord" >|| AdminDashbord ||</Link></li>
            <li><Link to = "/admin/seeAllProduct" >|| SeeAllProduct ||</Link></li>
            <li><Link to = "/admin/addProduct" >   || AddProduct    ||</Link></li>
            <li><Link to = "/admin/manageProduct" >|| ManageProduct ||</Link></li>
            <li><Link to = "/admin/updateProduct" >|| UpdateProduct ||</Link></li>
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
