function DashBord() {
    return ( 
        <div>
                <div class="main"/>
        <h1 id="admin">Admin Dashbord</h1>
        <div class="dashbordBody"/>
            <div id="productSection"/>
                <p> <span><b> Product Dashbord </b></span></p> <br/>
                <section class="productArea"/>
                    <input class="placeholder" type="text" placeholder="Product Index"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Add Product"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Manage Product"/><br/><br/>
                <section/>
            <div/>
            <div id="categorySection">
                <p><span/><b>Category Dashbord</b><span></span></p><br/>
                <section class="categoryArea"/>
                    <input class="placeholder" type="text" placeholder="Category Index"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Add Category"/><br/><br/>
                    <input class="placeholder" type="text" placeholder="Manage Category"/><br/><br/>
                <section/>
            </div>
        <div/>
    <div/>
        </div>
     );
}

export default DashBord;