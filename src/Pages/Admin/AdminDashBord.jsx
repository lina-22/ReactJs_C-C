

function DashBord() {
    return ( 
        <div>
                <div className="main"/>

        <h1 id="admin">Admin Dashbord</h1>
                 <section className="Nav_section">
            <nav className="navbar">
                <ul>
                    <li>|| AdminDashbord  ||</li>
                    <li>|| SeeAllProduct ||</li>
                    <li>|| AddProduct ||</li>
                    <li>|| ManageProduct ||</li>
                    <li>|| UpdateProduct ||</li>
                    <li>|| DeleteProduct ||</li>
                </ul>
            </nav>
        </section>
        <div className="dashbordBody"/>
            <div id="productSection"/>
                <p> <span><b> Product Dashbord </b></span></p> <br/>
                <section className="productArea"/>
                    <input className="placeholder" type="text" placeholder="Product Index"/><br/><br/>
                    <input className="placeholder" type="text" placeholder="Add Product"/><br/><br/>
                    <input className="placeholder" type="text" placeholder="Manage Product"/><br/><br/>
                <section/>
            <div/>
            <div id="categorySection">
                <p><span/><b>Category Dashbord</b><span></span></p><br/>
                <section className="categoryArea"/>
                    <input className="placeholder" type="text" placeholder="Category Index"/><br/><br/>
                    <input className="placeholder" type="text" placeholder="Add Category"/><br/><br/>
                    <input className="placeholder" type="text" placeholder="Manage Category"/><br/><br/>
                <section/>
            </div>
        <div/>
    <div/>
        </div>
     );
}

export default DashBord;