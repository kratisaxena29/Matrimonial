import React, { useRef, useState } from "react";
import "../styles/home.css";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/fontAwesome.css";
import { useNavigate } from "react-router-dom";
import couple1 from "../images/gallery/couple-1.jpg";
import couple2 from "../images/gallery/couple-2.jpg";
import couple3 from "../images/gallery/couple-3.jpg";
import couple4 from "../images/gallery/couple-4.png";
import couple5 from "../images/gallery/couple-5.png";
import couple6 from "../images/gallery/couple-6.png";
import couple7 from "../images/gallery/couple-7.jpg";
import couple8 from "../images/gallery/couple-8.jpg";
import logo from "../images/logo.png";
import aboutUsImage from "../images/gallery/owner_matrimonial.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [registerMethod, setRegisterMethod] = useState(null);

  const URL = process.env.REACT_APP_API_BASE_URL;
  const formContainerRef = useRef(null);
  const navigate = useNavigate();
  const handleRegisterNowClick = () => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    console.log("phoneno..", phone);
    if (email) {
      console.log("..under email");
      try {
        const response = await axios.post(
          `${URL}/user-register`,
          {
            firstName,
            lastName,
            email: email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("User registered successfully!");
        console.log("API Response:", response.data.response.email);

        navigate("/verify-otp", {
          state: { email: response.data.response.email },
        });
        handleEmailOtp(response.data.response.email);
      } catch (error) {
        console.error(
          "Error while making API call:",
          error.response?.data?.Error || error.message
        );
        toast.error(error.response?.data?.Error || "An error occurred");
      }
    }
    if (phone) {
      console.log("..under phone");
      try {
        const response = await axios.post(
          `${URL}/user-register`,
          {
            firstName,
            lastName,
            password,
            phoneno: Number(phone),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("User registered successfully!");
        console.log("API Response:", response.data.response.email);

        navigate("/verify-otp", {
          state: { phoneno: response.data.response.phoneno },
        });
        handlePhoneOtp(response.data.response.phoneno);
      } catch (error) {
        console.error(
          "Error while making API call:",
          error.response?.data?.Error || error.message
        );
        toast.error(error.response?.data?.Error || "An error occurred");
      }
    }
  };

  const handlePhoneOtp = async (phone) => {
    try {
      const response = await axios.post(
        `${URL}/phone-otp`,
        {
          subject: "Hey! Your One Time Password",
          phoneno: phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP response:", response);
    } catch (error) {
      console.log("Error in OTP request:", error);
    }
  };

  const handleEmailOtp = async (email) => {
    try {
      const response = await axios.post(
        `${URL}/email-otp`,
        {
          subject: "Hey! Your One Time Password",
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP response:", response);
    } catch (error) {
      console.log("Error in OTP request:", error);
    }
  };

  return (
    <div className="body">
      <ToastContainer />
      <div className="hom-top" style={{ width: "100rem" }}>
        <div className="container">
          <div className="row">
            <div className="hom-nav">
              <div className="logo">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                  className="logo-brand"
                >
                  <img src={logo} alt="" loading="lazy" className="ic-logo" />
                </a>
              </div>
              <div className="bl">
                <ul>
                  <p style={{ marginTop: 10, paddingRight: "-30px" }}>
                    <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong>{" "}
                    <span style={{ color: "white" }}>94490 65433</span>
                  </p>
                </ul>
                {/* <div className="bl"> */}
                <ul>
                  <button
                    onClick={() => navigate("/login")}
                    className="custom-button"
                  >
                    Login
                  </button>
                </ul>
                {/* </div> */}
              </div>
              {/* <div className="bl">
                <ul>
                <p>
          <strong style={{color:"#FFBF0E"}}>Support:</strong> 94490 65433
        </p>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section className="responsive-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hom-ban">
                <div className="ban-tit">
                  <span>
                    <i className="no1">#1</i> Matrimony
                  </span>
                  <h1>
                    Find your
                    <br />
                    <b>Right Match</b> here
                  </h1>
                  <p>Most trusted Matrimony Brand in the World.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-container" ref={formContainerRef}>
                <h1 className="form-title">Sign up to Matrimony</h1>
                {registerMethod === null ? (
                  <div className="button-container">
                    <button
                      onClick={() => setRegisterMethod("email")}
                      className="register-button"
                    >
                      Register with Email
                    </button>
                    <button
                      onClick={() => setRegisterMethod("phone")}
                      className="phone-button"
                    >
                      Register with Phone
                    </button>
                  </div>
                ) : (
                  <form className="form" onSubmit={handleRegister}>
                    <div className="form-group">
                      <label htmlFor="first">First Name</label>
                      <input
                        type="text"
                        id="first"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last">Last Name</label>
                      <input
                        type="text"
                        id="last"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                      />
                    </div>
                    {registerMethod === "email" ? (
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                    ) : (
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          required
                        />
                      </div>
                    )}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="register-button">
                      Register
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="str">
          <div className="ban-inn ban-home">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span>
                      <i className="no1">#1</i> Wedding Website
                    </span>
                    <h2>Find your Perfect Match Now</h2>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ab-team">
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <p>Collections</p>
                <h2>
                  <span>Photo Gallery</span>
                </h2>
                <span className="leaf1" />
              </div>
              <ul>
                <li>
                  <div>
                    <img src={couple1} alt="" loading="lazy" />
                    <h4>Harman & Palak</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple3} alt="" loading="lazy" />
                    <h4>Amit & Shruti</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple2} alt="" loading="lazy" />
                    <h4>Arshdeep & Kirat</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple4} alt="" loading="lazy" />
                    <h4>Shivam & Raman</h4>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={couple5} alt="" loading="lazy" />
                    <h4>Yash and Palavi</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple6} alt="" loading="lazy" />
                    <h4>Mahesh & Sravani</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple7} alt="" loading="lazy" />
                    <h4>Jashan & Samriti</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple8} alt="" loading="lazy" />
                    <h4>Aneesh & Harpreet</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="str count">
          <div className="container">
            <div className="row">
              <div className="fot-ban-inn">
                <div className="lhs">
                  <h2>Discover your ideal partner today.</h2>
                  <p>
                    Take the first step towards finding your perfect soulmate
                  </p>
                  <a onClick={handleRegisterNowClick} className="cta-3">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="image-founders-container">
                <img
                  src={aboutUsImage}
                  alt="Happy couple"
                  className="about-us-image img-fluid rounded shadow-lg"
                />
                <div className="founders-info mt-4">
                  <h4 className="founders-title mb-3">
                    The Visionaries Behind SoulMatch
                  </h4>
                  <div className="founders-grid">
                    <div className="co-founder">
                      <p className="founder-name">Shipra Agarwala</p>
                      <p className="founder-role">Co-Founder</p>
                    </div>
                    <div className="founder">
                      <p className="founder-name">Ayush Agarwala</p>
                      <p className="founder-role">Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 about-us-content">
              <h2 className="about-us-title mb-4">About Us</h2>
              <h3 className="about-us-subtitle mb-4">
                "Bringing Together Two Souls"
              </h3>
              <p className="about-us-text mb-4">
                Soulmatch believes in building a bridge between prospective
                Brides and Grooms. If you are seeking a forever relationship
                through a sacred matrimonial alliance, we provide you with one
                of the best platforms to meet your soulmate.
              </p>
              <a href="#" className="learn-more-btn">
                Join Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cr">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "20px 0",
              }}
            >
              <p>
                <strong>Email: </strong>
                <a
                  href="mailto:soulmatchinfo@gmail.com"
                  style={{ textDecoration: "none", color: "#FFBF0E" }}
                >
                  soulmatchinfo@gmail.com
                </a>{" "}
              </p>
              <p style={{ width: "200rem", textAlign: "center" }}>
                Copyright © <span id="cry">2024</span>{" "}
                <a
                  style={{ textDecoration: "none", color: "#FFBF00" }}
                  href="#!"
                  target="_blank"
                >
                  SoulMatch
                </a>{" "}
                All rights reserved. |{" "}
                <a
                  style={{
                    cursor: "pointer",
                    color: "#FFBF00",
                    textDecoration: "none",
                  }}
                  onClick={() => navigate("/terms&conditions")}
                >
                  Terms and Conditions
                </a>
              </p>
              <p>
                <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong> 94490
                65433
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
