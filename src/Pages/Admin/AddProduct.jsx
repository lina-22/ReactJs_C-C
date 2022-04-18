function AddProduct() {
  return (
    <div>
      <h1 id="admin">Add Product</h1>
      <div className="dashbordBody" />
      <div id="productSection" />
      <p>
        {" "}
        <span>
          <b> Product Add Form </b>
        </span>
      </p>{" "}
      <br />
      <section className="productArea">
        <input className="placeholder" type="text" placeholder="Product Name" /><br/> <br/>
        <input className="placeholder" type="text" placeholder="Add Price" /><br/> <br/>
        <input className="placeholder" type="text" placeholder="Description" /><br/> <br/>
        <input className="placeholder" type="text" placeholder="Category Index" /><br/> <br/>
        <input className="placeholder" type="text" placeholder="Add Category" /><br/> <br/>
        <div className="file">
          <button>Select a file</button>
          <button>No file</button>
        </div>

        <div className="article">
          <button>Article Available</button>
          <button>Send</button>
        </div>
      </section>
      <div />
      <div />
    </div>
  );
}

export default AddProduct;
