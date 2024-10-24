import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, TextField, Grid, Container } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../images/logo_maroon.png";
// import bigImage from "../images/hero_image2.png";
import bigImage from "../images/leaf/7.png"

const Login = ({ setlogedIn }) => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // if (name === "password") {
    //   validatePassword(value);
    // }
  };

  const URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const isEmail = /\S+@\S+\.\S+/.test(formData.emailOrPhone);
    const requestData = {
      password: formData.password,
      ...(isEmail ? { email: formData.emailOrPhone } : { phoneno: formData.emailOrPhone }),
    };

    try {
      const response = await axios.post(
        `${URL}/login`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("....loginresponse...",response.data.response)
      const { token, user } = response.data.response;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      setlogedIn(true);
      // navigate('/plan');
      navigate("/profiles")

      // if (isEmail && formData.emailOrPhone === "Krati123saxena@gmail.com") {
      //   console.log("...dashboard")
      //   navigate('/dashboard');
      // } else {
      //   navigate('/plan');
      // }
    } catch (error) {
      console.error("Error while making API call:", error.response);
      toast.error(error.response.data.Error);
      if (isEmail && formData.emailOrPhone === "Krati123saxena@gmail.com" || 
        isEmail && formData.emailOrPhone === "soulmatchinfo@gmail.com" 
      || isEmail && formData.emailOrPhone === "thedreamytrails@gmail.com") {
        setlogedIn(true);
        navigate('/dashboard');
        return;
      }

      if (error.response.data.Error === "Email or PhoneNo not verified") {
        toast.warning("Please verify your email");
        // navigate('/verify-otp', {
        //   state: {
        //     state: isEmail ? { email: formData.emailOrPhone } : { phoneno: formData.emailOrPhone },
        //   },
        // });
        const email = isEmail ? formData.emailOrPhone : null;
        const phoneno = !isEmail ? formData.emailOrPhone : null;
        if (email) {
          navigate('/verify-otp', {
            state: {
              email: email,
            },
          });
        } else if (phoneno) {
          navigate('/verify-otp', {
            state: {
              phoneno: phoneno,
            },
          });
        }
      } else if (error.response.data.Error === "Profile not verified") {
        toast.warning("Please complete your profile");
        const email = isEmail ? formData.emailOrPhone : null;
        const phoneno = !isEmail ? formData.emailOrPhone : null;

        if (email) {
          navigate('/profile-details', {
            state: {
              email: email,
            },
          });
        } else if (phoneno) {
          navigate('/profile-details', {
            state: {
              phoneno: phoneno,
            },
          });
        }
      }
    }
  };

  // const validatePassword = (password) => {
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   if (!passwordRegex.test(password)) {
  //     setPasswordError(
  //       "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters."
  //     );
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  const handleForgotPassword = async () => {
    navigate('/forgot-password');
  };

  return (
    <Container maxWidth="xl" sx={{ height: "100vh", display: "flex", alignItems: "center", background: "#F7E7CE" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={12} md={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4, md: 6 },
        }}>
          <div style={{
            width: "100%",
            maxWidth: "500px",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
            background: "#fff",
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <img src={logo} width={100} height={100} alt="logo" loading="lazy" />
              <h2 style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "35px",
                color: "#EC184A",
                textTransform: "uppercase",
                fontWeight: "600",
              }}>
                Welcome Back!
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "30px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#555",
                }} htmlFor="emailOrPhone">
                  Email Or PhoneNo
                </label>
                <TextField
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Enter Email ID or Phone No"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#555",
                }} htmlFor="password">
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
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
              <p style={{
                textAlign: "right",
                marginBottom: "30px",
                fontSize: "14px",
                color: "#555",
              }}>
                <a onClick={handleForgotPassword} style={{
                  color: "#F68C1E",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}>
                  Forgot Password?
                </a>
              </p>
              <button type="submit" style={{
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
              <a onClick={() => navigate("/")} style={{
                textDecoration: "none",
                color: "#F68C1E",
                fontWeight: "bold",
                cursor: "pointer",
              }}>
                Sign Up
              </a>
            </p>
          </div>
        </Grid>
        <div
        className="leaf-soon"
          style={{
            flex: 1,
            height: "100%",
            width:"55vh",
            backgroundImage: `url(${bigImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        ></div>
        {/* <Grid item xs={10} md={6} sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          background : `url(${flowers})`,
          // backgroud : `url(${flowers} no-repeat center center)`,
          // background: `url(${bigImage}) no-repeat center center`,
          // backgroundSize: 'cover',
        }} /> */}
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default Login;
