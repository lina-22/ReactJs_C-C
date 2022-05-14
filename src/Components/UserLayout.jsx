import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../CSS_Components/UserLayout.css";
import { useContext, useEffect } from "react";
import { AuthContext, ReservationContext } from "../contexts";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { SET_RESERVATION } from "../actionTypes";

function UserLayout() {
  const { auth } = useContext(AuthContext);
  const { reservationValue, reservationDispatch } =
    useContext(ReservationContext);

  useEffect(() => {
    if (auth.user) {
      if (!reservationValue.isLoaded) {
        axios.get(`${BACKEND_URL}/productsLine`).then((res) => {
          let { status, message, data } = res.data;
          if (status) {
            reservationDispatch({ type: SET_RESERVATION, payload: data });
          }
        });
      }
    }
  });

  return (
    <div className="main">
      <div id="landing">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;