import singAvata from "../../assets/Rectangle 20.png";
import longinLogo from "../../assets/Polygon 2.png";
import Button from "../../components/Button";
import "./signin.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-mgt/Landing";

const Singin = () => {
  const [toggle, setToggle] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigator = useNavigate()

  const toHomePage = () =>{
    navigator(`/${HOME_ROUTE}`)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmitSignin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        toHomePage()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {toggle ? (
        <div className="signin">
          <div className="rectangle-logo">
            <img src={singAvata} alt="sing img" />
          </div>
          <form onSubmit={handleSubmitSignin} className="input-section">
            <h3>Sign in for yur personalized premium experience</h3>
            <img src={longinLogo} alt="accss" />
            <div>
              <label>Enter Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Enter Password</label> <br />
              <input
                type="password"
                placeholder="Enter your email"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <Button text="SIGN IN" />
            <h4 className="acc-switch">
              Don't have an account? click{" "}
              <span onClick={() => setToggle((prev) => !prev)}>here</span> to
              create an account
            </h4>
          </form>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};
export default Singin;
