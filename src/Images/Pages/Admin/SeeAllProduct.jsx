import "../../CSS_Components/Navbar.css";
import "../../CSS_Admin/SeeAllProduct.css"

function SeeAllProduct() {
    return ( 
        <div>
        <div className="dashbordBody">
            <div id="productSection">
                <h2 id="display"> <span><b> Display All Index products </b></span></h2> <br/>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Description</th> <br/>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td>50.00 euro</td>
                            <td>@mdo bjkjkhj bjhuj</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>60.00 euro</td>
                            <td>@fatgcghfg</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>60.00 euro</td>
                            <td>@fatvhgh</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>60.00 euro</td>
                            <td>@fatvhgh</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>60.00 euro</td>
                            <td>@fatvhgh</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Jacob</td>
                            <td>60.00 euro</td>
                            <td>@fatvhgh</td>
                            <td><button>Confirm</button></td>
                            <td><button>Cancel</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
     );
}

export default SeeAllProduct;