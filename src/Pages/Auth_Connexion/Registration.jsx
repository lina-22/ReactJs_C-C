import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LOG_IN } from "../../actionTypes";
import { AuthContext } from "../../contexts";
import { BACKEND_URL } from "../../utils";
import style from "./Registration.css";

function Registration() {
  const { auth ,authDispatch } = useContext(AuthContext);
  const [state, setState] = useState({
    isLoading: false,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(auth.user){
      navigate('/');
    }
  });

  const onChangeHandler = (e) => {
    setState((prevSt) => {
      return {
        ...prevSt,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setState({ ...state, isLoading: true });

    axios
      .post(`${BACKEND_URL}/register`, state)
      .then((res) => {
        const { status, data, message } = res.data;
        if (status) {
          authDispatch({
            type: LOG_IN,
            payload: data,
          });

          toast.success(message);
          

          setState({
            isLoading: false,
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          });

          navigate('/')
        } else {
          toast.error(message);
          setState({ ...state, isLoading: false });
        }
    
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong!!");
        setState({ ...state, isLoading: false });
      });
  };

  return (
    <Container className="mx-auto">
      <div className="register">
      <div className="créerCompte">
      <h5>Créer Un Compte</h5>
      </div>
      
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={state.first_name}
            onChange={onChangeHandler}
            disabled={state.isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={state.last_name}
            onChange={onChangeHandler}
            disabled={state.isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={state.email}
            onChange={onChangeHandler}
            disabled={state.isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your Password"
            value={state.password}
            onChange={onChangeHandler}
            disabled={state.isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password_confirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat Password"
            value={state.password_confirmation}
            onChange={onChangeHandler}
            disabled={state.isLoading}
          />
        </Form.Group>
        <div>
          <span>
            Already Registered? Please <Link to="/login">Login</Link>
          </span>
        </div>
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={state.isLoading}
        >
          {state.isLoading ? "Loading..." : "Register"}
        </Button>
      </Form>
      </div>
    </Container>
  );
}

export default Registration;