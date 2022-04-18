import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="main">
      <h1 id="admin">Admin Dashbord</h1>
      <section className="Nav_section">
        <nav className="navbar">
          <ul>
            <li>|| AdminDashbord ||</li>
            <li>|| SeeAllProduct ||</li>
            <li>|| AddProduct ||</li>
            <li>|| ManageProduct ||</li>
            <li>|| UpdateProduct ||</li>
            <li>|| DeleteProduct ||</li>
          </ul>
        </nav>
      </section>

      <Outlet />
    </div>
  );
}

export default AdminLayout;
