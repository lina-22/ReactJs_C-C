import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function UserLayout () {
    return ( 
        <div className="main">
            <div id="landing">
                <Navbar/> 
                <Outlet/>
                <Footer/>

            </div>

        </div>
     );
}

export default  UserLayout;