import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../utils";

import "./Login.css";
function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });

  const onChangeHandler = (e) => {
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = (e) =>{
      e.preventDefault();

      setState({...state, isLoading: true});

      axios.post(`${BACKEND_URL}/login`, {email: state.email, password: state.password,}).then((res) =>{
          console.log(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  }

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
            value={state.email} disabled={state.isLoading} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={onChangeHandler}
            placeholder="Enter your password"
            value={state.password} disabled={state.isLoading}
          />
        </div>
        <div className="input-group">
          <input type="submit" className="btn" value={state.isLoading ? "Loading..." : "LOGIN"} disabled={state.isLoading} />
        </div>
      </form>
    </div>
  );
}

export default Login;
