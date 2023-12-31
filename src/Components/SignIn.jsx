import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Authentication } from "./Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    Authentication.login(() => {
      navigate(from);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch user details from the server
    fetch("https://acecraft-deploy.onrender.com/NewUser")
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find(
          (user) => user.email === username && user.password === password
        );

        if (foundUser) {
          // Login successful
          toast.success("Login successful");
          Authentication.login(() => {
            navigate("/cart");
          });
        } else {
          // Login failed
          toast.error("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container border-1 border" id="cont">
      <div className="row">
        <div className="col-12 py-5 shadow mb-5 my-custom-shadow">
          <h2 className="ms-5">Login with Acecraft</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                className="w-100"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group ms-1 pt-3">
              <input
                className="w-100"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button className="bg-black text-white btn-size" type="submit">
                Login
              </button>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-black w-25">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
