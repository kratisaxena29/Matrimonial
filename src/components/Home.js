import React, { useState } from 'react';
import "../styles/home.css";
import "../styles/animate.css"
import "../styles/bootstrap.css"
import "../styles/fontAwesome.css"
import { useNavigate } from 'react-router-dom';
import couple1 from "../images/gallery/couple-1.jpg"
import couple2 from "../images/gallery/couple-2.jpg"
import couple3 from "../images/gallery/couple-3.jpg"
import couple4 from "../images/gallery/couple-4.png"
import couple5 from "../images/gallery/couple-5.png"
import couple6 from "../images/gallery/couple-6.png"
import couple7 from "../images/gallery/couple-7.jpg"
import couple8 from "../images/gallery/couple-8.jpg"
import logo from "../images/logo.png"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  const [firstName , setfirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const URL = process.env.REACT_APP_API_BASE_URL;

  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log("firstName..", firstName)
    console.log("lastname...", lastName)
    console.log("...email..", email)
  
    try {
      const response = await axios.post(
        `${URL}/api/user-register`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User registered successfully!");
      console.log("API Response:", response.data.response.email);
      
       navigate('/verify-otp', { state: { email: response.data.response.email } });
      handleEmailOtp();
    } catch (error) {
      console.error("Error while making API call:", error.response.data.Error);
      toast.error(error.response.data.Error);
    }
  }

  const handleEmailOtp = async() => {
    try {
      const response = await axios.post(
        `${URL}/api/email-otp`,
        {
          "subject" : "Hey! Your One Time Password",
          email : email
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("...otp response..",response)
    } catch (error) {
      console.log("...catch..",error)
    }
  }

  return (
    <div className="body">
      <ToastContainer/>
      <div className="hom-top">
        <div className="container">
          <div className="row">
            <div className="hom-nav">
              <div className="logo">
                <a style={{cursor:"pointer"}} onClick={() => navigate('/')} className="logo-brand">
                  <img src={logo} alt="" loading="lazy" className="ic-logo" />
                </a>
              </div>
              <div className="bl">
                <ul>
                  <button onClick={() => navigate('/login')} className="custom-button">Login</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="str">
          <div className="hom-head">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit" style={{ width: "85%", paddingTop:"10rem" }}>
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
            </div>
            <div className="form-container">
              <h1 style={{ color: "#CD6900", textAlign: "center", paddingBottom:"40px", width:"250px" }}>
                Sign up to Matrimony
              </h1>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="first">First Name</label>
                  <input 
                    type="text"
                    id="first" 
                    value={firstName}
                    onChange={(event) => setfirstName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text">Last Name</label>
                  <input 
                    type="text" 
                    id="last" 
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Email</label>
                  <input 
                    type="text" 
                    id="phone" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="first">Password</label>
                  <input 
                    type="Password"
                    id="first" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </form>
              <button onClick={handleRegister} type="submit" className="register-button" style={{textAlign:"center", marginRight:"0px"}}>
                Register
              </button>
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
                  <a onClick={() => navigate('/profile-details')} className="cta-3">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
