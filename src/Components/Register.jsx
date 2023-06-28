import React, { useState } from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [dealershipName, setDealershipName] = useState("");
  const [dealershipCode, setDealershipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Perform validation
    const validationErrors = {};

    if (firstName.trim() === "") {
      validationErrors.firstName = "Required Field";
    } else if (!isValidName(firstName)) {
      validationErrors.firstName = "First name should only contain alphabets";
    }

    if (lastName.trim() === "") {
      validationErrors.lastName = "Required Field";
    } else if (!isValidName(lastName)) {
      validationErrors.lastName = "Last name should only contain alphabets";
    }

    if (email.trim() === "") {
      validationErrors.email = "Required Field";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Enter a valid email";
    }

    if (password === "") {
      validationErrors.password = "Required Field";
    } else if (!isValidPassword(password)) {
      validationErrors.password =
        "Must contain minimum 1 Lowercase,Uppercase and digit";
    }

    if (confirmPassword === "") {
      validationErrors.confirmPassword = "Required Field";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (userType === "") {
      validationErrors.userType = "Required Field";
    }

    if (dealershipName.trim() === "") {
      validationErrors.dealershipName = "Required Field";
    } else if (!isValidName(dealershipName)) {
      validationErrors.dealershipName =
        "Dealership name should only contain alphabets";
    }

    if (dealershipCode.trim() === "") {
      validationErrors.dealershipCode = "Required Field";
    } else if (!isValidDealerCode(dealershipCode)) {
      validationErrors.dealershipCode =
        "Dealership number should only contain numbers ";
    }

    if (city.trim() === "") {
      validationErrors.city = "Required Field";
    } else if (!isValidName(city)) {
      validationErrors.city = "Only contain alphabets ";
    }

    if (state === "") {
      validationErrors.state = "Required Field";
    }

    if (gstNumber.trim() === "") {
      validationErrors.gstNumber = "Required Field";
    } else if (!isValidGSTNumber(gstNumber)) {
      validationErrors.gstNumber = " Only can contain numbers";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form data is valid
      const newUser = {
        id: Date.now(), 
        firstName,
        lastName,
        email,
        password,
        userType,
        dealershipName,
        dealershipCode,
        city,
        state,
        gstNumber,
      };

      // Send the user data to the server
      fetch("http://localhost:4000/NewUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          // Handle the response
          if (response.ok) {
            // Registration successful
            // Reset the form
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setUserType("");
            setDealershipName("");
            setDealershipCode("");
            setCity("");
            setState("");
            setGstNumber("");
            console.log("Registration Successful");
          } else {
            // Registration failed
            // You can handle the error based on the response status and show appropriate feedback to the user
            throw new Error("Registration failed");
          }
        })
        .catch((error) => {
          // Handle any network or server errors
          console.error("Error:", error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z]{1,30}$/;
    return nameRegex.test(name);
  };

  const isValidDealerCode = (dealerCode) => {
    const dealerCodeRegex = /^\d{1,15}$/;
    return dealerCodeRegex.test(dealerCode);
  };

  const isValidGSTNumber = (gstNumber) => {
    const gstNumberRegex = /^\d{1,25}$/;
    return gstNumberRegex.test(gstNumber);
  };

  return (
    <div className="container2 border-1 border" id="cont">
      <div className="row">
        <div className="col-12 py-1 shadow  mt-5">
          <h3 className="ms-2 ">Sign Up with Acecraft</h3>
          <form className="registration-form" onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="lastName"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <div>
              <label className="ms-5">
                <input
                  type="radio"
                  value="school"
                  checked={userType === "school"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                School
              </label>
              <label className="ms-5">
                <input
                  type="radio"
                  value="enterprise"
                  checked={userType === "enterprise"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Enterprise
              </label>
            </div>
            {errors.userType && (
              <div className="invalid-feedback">{errors.userType}</div>
            )}

            <div className="form-group">
              <input
                type="text"
                id="dealershipName"
                className={`form-control ${
                  errors.dealershipName ? "is-invalid" : ""
                }`}
                placeholder="Enter your dealership name"
                value={dealershipName}
                onChange={(e) => setDealershipName(e.target.value)}
              />
              {errors.dealershipName && (
                <div className="invalid-feedback">{errors.dealershipName}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="dealershipCode"
                className={`form-control ${
                  errors.dealershipCode ? "is-invalid" : ""
                }`}
                placeholder="Enter your dealership number or code"
                value={dealershipCode}
                onChange={(e) => setDealershipCode(e.target.value)}
              />
              {errors.dealershipCode && (
                <div className="invalid-feedback">{errors.dealershipCode}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="city"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
            </div>

            <div className="form-group">
              <select
                id="state"
                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="gstNumber"
                className={`form-control ${
                  errors.gstNumber ? "is-invalid" : ""
                }`}
                placeholder="Enter your GST number"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
              />
              {errors.gstNumber && (
                <div className="invalid-feedback">{errors.gstNumber}</div>
              )}
            </div>

            <button className="bg-black text-white" type="submit">
              Register
            </button>
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-black w-25">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
