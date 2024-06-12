import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../images/logo_maroon.png";
import bigImage from "../images/hero_image2.png"; // Replace with your big image path

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const floatingAnimation = {
    '@keyframes float': {
      '0%': { transform: 'translatey(0px)' },
      '50%': { transform: 'translatey(-10px)' },
      '100%': { transform: 'translatey(0px)' },
    },
    animation: 'float 3s ease-in-out infinite',
  };
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate password dynamically
    if (name === "password") {
      validatePassword(value);
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);
    const API_BASE_URL = 'http://localhost:3002';
    try {
      const response = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email: formData.email,
          password : formData.password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response);
      navigate('/profiles')
    } catch (error) {
      console.error("Error while making API call:", error.response);
      toast.error(error.response.data.Error);
      if(error.response.data.ErrorCode == 404){
        
        console.log("In 404 console..email")
        toast.warning("Please verify your email");
        navigate('/verify-otp',{state : {
          email : formData.email
        }})
      } 
      else if (error.response.data.ErrorCode == 405) {
        console.log("In 404 console..profile")
        
        toast.warning("Please complete your profile");
        navigate('/profile-details')
      } 

    }
    // You can send this formData to your backend for further processing
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleForgotPassword = async () => {
    navigate('/reset-password');
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#F7E7CE",
      }}
    >
      
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
              className="ic-logo"
            />
            <h2
              style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "35px",
                color: "#EC184A",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Welcome Back!
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#555",
                }}
                htmlFor="email"
              >
                Email
              </label>
              <TextField
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div style={{ position: "relative", marginBottom: "10px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#555",
                }}
                htmlFor="password"
              >
                Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: "100%" }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {passwordError && formData.password.length > 0 && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                  {passwordError}
                </p>
              )}
            </div>
            <p
              style={{
                textAlign: "right",
                marginBottom: "30px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              <a
                onClick={handleForgotPassword}
                style={{
                  color: "#F68C1E",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </a>
            </p>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                background: "#F68C1E",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#e07b17")}
              onMouseOut={(e) => (e.target.style.background = "#F68C1E")}
            >
              Login
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account?&nbsp;
            <a
              onClick={() => navigate("/")}
              style={{
                textDecoration: "none",
                color: "#F68C1E",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          background: `url(${bigImage}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default Login;
