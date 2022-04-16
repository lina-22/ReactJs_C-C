function AddProduct() {
    return (  
        <div>
             <h1 id="admin">Add Product</h1>
        <div class="dashbordBody"/>
            <div id="productSection"/>
                <p> <span><b> Product Add Form </b></span></p> <br/>
                <section class="productArea">
                    <input class="placeholder" type="text" placeholder="Product Name"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Add Price"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Description"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Category Index"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Add Category"/><br/><br/>
                    
                    <div class="file">
                    <button>Select a file</button>
                    <button>No file</button>
                    </div>

                    <div class="article">
                    <button>Article Available</button>
                    <button>Send</button>
                    </div>
                </section>
                <div/>
            <div/>
        </div>
    );
}

export default AddProduct;