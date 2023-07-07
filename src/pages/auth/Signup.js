import React, { useState } from "react";
import Button from "../../components/Button";
import signupAvata from "../../assets/Rectangle 20 (1).png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Singin from "./Signin";
import { HOME_ROUTE } from "../../content-mgt/Landing";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [toggle, setToggle] = useState(true);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigator = useNavigate();

  const toHomePage = () => {
    navigator(`/${HOME_ROUTE}`);
  };

  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        toHomePage();
      })
      .catch((error) => [console.log(error)]);
  };

  return (
    <>
      {toggle ? (
        <div className="signin">
          <div className="rectangle-logo">
            <img src={signupAvata} alt="sing img" />
          </div>
          <form onSubmit={handleSignOut} className="input-section">
            <h3>Sign Up to Enjoy The Best of Healthcare</h3>
            <div>
              <label>Enter Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                name="name"
                value={values.name}
                onChange={handleOnchange}
              />
            </div>
            <div>
              <label>Enter Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleOnchange}
              />
            </div>
            <div>
              <label>Enter Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleOnchange}
              />
            </div>
            <Button text="SIGN UP" />
            <h4 className="acc-switch">
              Already have an Account Singin{" "}
              <span onClick={() => setToggle((prev) => !prev)}>here</span>
            </h4>
          </form>
        </div>
      ) : (
        <Singin />
      )}
    </>
  );
};

export default Signup;
