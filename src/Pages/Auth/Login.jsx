import axios from "axios";
import { useContext, useEffect, useInsertionEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LOG_IN } from "../../actionTypes";
import { AuthContext } from "../../contexts";
import { BACKEND_URL } from "../../utils";

import "./Login.css";
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
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
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
        const {status, data, message} =res.data;

        if(status){
         authDispatch({
             type :LOG_IN,
             payload: data
         })

          const {user, token} = data;
        //   console.log(token);
          const accessToken = `Bearer ${token.plainTextToken}`;
          axios.defaults.headers.common = {'Authorization':accessToken };
          localStorage.setItem('accessToken',accessToken);
         }else{

        }
        setState({email:"" , password:"", isLoading: false});
      })
      .catch((err) => {
        console.log(err);
        setState({...state, isLoading: false});
      });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={onChangeHandler}
            placeholder="Enter your Email"
            value={state.email}
            disabled={state.isLoading}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={onChangeHandler}
            placeholder="Enter your password"
            value={state.password}
            disabled={state.isLoading}
          />
        </div>
        <div className="input-group">
          <input
            type="submit"
            className="btn"
            value={state.isLoading ? "Loading..." : "LOGIN"}
            disabled={state.isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
