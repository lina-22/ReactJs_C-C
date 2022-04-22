// import "../../CSS_Components/Navbar.css";
import "../../CSS_Admin/UpdateProduct.css"
function UpdateProduct() {
    return ( 
        <div>
        <h1 id="admin">Update product</h1>
        <div className="dashbordBody">
            <div id="productSection">
                <h2 id="display"> <span><b> Display products </b></span></h2> <br/>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Id</th><br/>
                            <th scope="col">Product Name</th><br/>
                            <th scope="col">Description</th><br/>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="scope">
                        <tr>
                            <th scope="row">1</th>

                            <td>Mrrrr</td>

                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>@fatvhgh</td>
                            <td><button>Update</button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
     );
}

export default UpdateProduct;