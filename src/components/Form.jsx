import React from "react";
import { setMode } from "../state";
import { useDispatch, useSelector } from "react-redux";
import {
  FaTwitterSquare,
  FaGoogle,
  FaLinkedin,
  FaFacebookSquare,
  FaToggleOn,
} from "react-icons/fa";

const Form = () => {

  const dispatch = useDispatch();
  return (
    <div className="main">
      <h1>Login Form</h1>
      <div className="login">
        <div className="top">
          <FaGoogle size={"25px"} />
          <FaFacebookSquare size={"25px"} />
          <FaLinkedin size={"25px"} />
          <FaTwitterSquare size={"25px"} />
        </div>
        <p className="divider">
          <span>Or</span>
        </p>
        <form className="container">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Enter Email Here!
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="test@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Enter Password Here!
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="password"
            />
          </div>
          <button className="btn m-4" type="submit" id="button">
            Login
          </button>
        </form>
      </div>
      <div className="theme-toggle">
        <h2>Theme Toggle</h2>
        <FaToggleOn onClick={() => dispatch(setMode())} size={"30px"} style={{cursor: "pointer"}}/>
      </div>
    </div>
  );
};

export default Form;
