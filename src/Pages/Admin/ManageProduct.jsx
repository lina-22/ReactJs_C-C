function ManageProduct() {
    return ( 
        <div>
             <div className="main">
        <h1 id="admin">Manage product</h1>
        <div className="dashbordBody">
            <div id="productSection">
                <h2 id="display"> <span><b> Display products </b></span></h2> <br/>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mrrrr</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        </div>
     );
}

export default ManageProduct;