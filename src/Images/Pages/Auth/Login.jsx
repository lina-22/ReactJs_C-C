import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOG_IN } from "../../actionTypes";
import { AuthContext } from "../../contexts";
import { BACKEND_URL } from "../../utils";
import style from "./Login.css";

function Login() {
  const {auth,authDispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });


  useEffect(()=> {
   
    if(auth.user){
      navigate('/admin')
    }

  }, [auth.user])

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setState({ ...state, isLoading: true });

    axios
      .post(`${BACKEND_URL}/login`, {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        const { status, data, message } = res.data;
        if (status) {
         
          authDispatch({
            type: LOG_IN,
            payload: data
          })
        }

        setState({ email: "", password: "", isLoading: false });
      })
      .catch((err) => {
        console.log(err);

        setState({ ...state, isLoading: false });
      });
  };

  return (
    <div className="Loginmy-container">
      <form onSubmit={onSubmitHandler}>
        <div className="Logininput-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={onChangeHandler}
            placeholder="Enter Your Email"
            value={state.email}
            disabled={state.isLoading}
          />
        </div>
        <div className="Logininput-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={onChangeHandler}
            placeholder="Enter Your Password"
            value={state.password}
            disabled={state.isLoading}
          />
        </div>
        <div className="Logininput-group">
          <input
            type="submit"
            className="Loginbtn"
            value={state.isLoading ? "Loading..." : "LOGIN"}
            disabled={state.isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
