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

// import img1 from "../images/gallery/1.jpg"

// import loder1 from "../images/loder/1.png"
// import loder2 from "../images/loder/2.png"
// import loder3 from "../images/loder/3.png"
// import "../js/Gallery"
// import "../js/Chart"
// import "../js/Chart"
// import "../js/"
function Home() {

  const [firstName , setfirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const API_BASE_URL = 'http://localhost:3002';

  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log("firstName..", firstName)
    console.log("lastname...", lastName)
    console.log("...email..", email)
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user-register`,
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
        `${API_BASE_URL}/email-otp`,
        {
          "subject" : "Hey! Your One Time Password",
         email : email
        
        },
        {
          headers: {
            // Authorization: `Bearer ${token}`,
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
 {/* <div id="preloader">
    <div className="plod">
      <span className="lod1">
        <img src={loder1} alt="" loading="lazy" />
      </span>
      <span className="lod2">
        <img src={loder2} alt="" loading="lazy" />
      </span>
      <span className="lod3">
        <img src={loder3} alt="" loading="lazy" />
      </span>
    </div>
  </div> */}
      {/* <div className="pop-bg" /> */}
    

     
      <div className="hom-top">
        <div className="container">
          <div className="row">
            <div className="hom-nav">
              {/* LOGO */}
              <div className="logo">
                <a href="index.html" className="logo-brand">
                  <img src={logo} alt="" loading="lazy" className="ic-logo" />
                </a>
              </div>
              {/* EXPLORE MENU */}
              <div className="bl">
                <ul>
                  {/* <li className="smenu-pare">
                    <span className="">Explore</span>
                  </li> */}
                  {/* <li>
                    <a
                     onClick={() => navigate('/plan')}
                      className="smenu-pare"
                      style={{ textDecoration: "none" }}
                    >
                      Plans
                    </a>
                  </li> */}
                  <button onClick={() => navigate('/login')} class="custom-button" >Login</button>
                </ul>
              </div>
              {/*MOBILE MENU*/}
              {/*END MOBILE MENU*/}
            </div>
          </div>
        </div>
      </div>
      {/* END */}
      {/* EXPLORE MENU POPUP */}
      <div className="mob-me-all mobile_menu">
        <div className="mob-me-clo">
          <img src="images/icon/close.svg" alt="" />
        </div>
        <div className="mv-bus">
          <h4>
            <i className="fa fa-globe" aria-hidden="true" /> EXPLORE CATEGORY
          </h4>
          <ul>
            <li>
              <a href="all-profiles.html">Browse profiles</a>
            </li>
            <li>
              <a href="wedding.html">Wedding page</a>
            </li>
            <li>
              <a href="services.html">All Services</a>
            </li>
            <li>
              <a href="plans.html">Join Now</a>
            </li>
          </ul>
          <h4>
            <i className="fa fa-align-center" aria-hidden="true" /> All Pages
          </h4>
          <ul>
            <li>
              <a href="all-profiles.html">All profiles</a>
            </li>
            <li>
              <a href="profile-details.html">Profile details</a>
            </li>
            <li>
              <a href="wedding.html">Wedding</a>
            </li>
            <li>
              <a href="wedding-video.html">Wedding video</a>
            </li>
            <li>
              <a href="services.html">Our Services</a>
            </li>
            <li>
              <a href="plans.html">Pricing plans</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="sign-up.html">Sign-up</a>
            </li>
            <li>
              <a href="photo-gallery.html">Photo gallery</a>
            </li>
            <li>
              <a href="photo-gallery-1.html">Photo gallery 1</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="blog-detail.html">Blog detail</a>
            </li>
            <li>
              <a href="enquiry.html">Ask your doubts</a>
            </li>
            <li>
              <a href="make-reservation.html">Make Reservation</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="coming-soon.html" target="_blank">
                Coming soon
              </a>
            </li>
            <li>
              <a href="404.html">404</a>
            </li>
          </ul>
          <div className="menu-pop-help">
            <h4>Support Team</h4>
            <div className="user-pro">
              <img src="images/profiles/1.jpg" alt="" loading="lazy" />
            </div>
            <div className="user-bio">
              <h5>Ashley emyy</h5>
              <span>Senior personal advisor</span>
              <a href="enquiry.html" className="btn btn-primary btn-sm">
                Ask your doubts
              </a>
            </div>
          </div>
          <div className="menu-pop-soci">
            <ul>
              <li>
                <a href="#!">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="late-news">
            <h4>Latest news</h4>
            <ul>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/1.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick" />
              </li>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/3.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick" />
              </li>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/4.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick" />
              </li>
            </ul>
          </div>
          <div className="prof-rhs-help">
            <div className="inn">
              <h3>Tell us your Needs</h3>
              <p>Tell us what kind of service you are looking for.</p>
              <a href="enquiry.html">Register for free</a>
            </div>
          </div>
        </div>
      </div>
      {/* END MOBILE MENU POPUP */}
      {/* MOBILE USER PROFILE MENU POPUP */}
      <div className="mob-me-all dashbord_menu">
        <div className="mob-me-clo">
          <img src="images/icon/close.svg" alt="" />
        </div>
        <div className="mv-bus">
          <div className="head-pro">
            <img src="images/profiles/1.jpg" alt="" loading="lazy" />
            <b>user profile</b>
            <br />
            <h4>Ashley emyy</h4>
          </div>
          <ul>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="sign-up.html">Sign-up</a>
            </li>
            <li>
              <a href="plans.html">Pricing plans</a>
            </li>
            <li>
              <a href="all-profiles.html">Browse profiles</a>
            </li>
          </ul>
        </div>
      </div>
      {/* END USER PROFILE MENU POPUP */}
      {/* BANNER & SEARCH */}
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
                      value = {email}
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
        <div>
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <p>trusted brand</p>
                <h2>
                  <span>
                    Trust by <b className="num">1500</b>+ Couples
                  </span>
                </h2>
                <span className="leaf1" />
                <span className="tit-ani-" />
              </div>
              <div className="slid-inn cus-revi">
                <ul className="slider3">
                  <li>
                    <div className="cus-revi-box">
                      <div className="revi-im">
                        <img src="images/user/1.jpg" alt="" loading="lazy" />
                        <i className="cir-com cir-1" />
                        <i className="cir-com cir-2" />
                        <i className="cir-com cir-3" />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
                      </p>
                      <h5>Jack danial</h5>
                      <span>New york</span>
                    </div>
                  </li>
                  <li>
                    <div className="cus-revi-box">
                      <div className="revi-im">
                        <img src="images/user/2.jpg" alt="" loading="lazy" />
                        <i className="cir-com cir-1" />
                        <i className="cir-com cir-2" />
                        <i className="cir-com cir-3" />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
                      </p>
                      <h5>Jack danial</h5>
                      <span>New york</span>
                    </div>
                  </li>
                  <li>
                    <div className="cus-revi-box">
                      <div className="revi-im">
                        <img src="images/user/3.jpg" alt="" loading="lazy" />
                        <i className="cir-com cir-1" />
                        <i className="cir-com cir-2" />
                        <i className="cir-com cir-3" />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
                      </p>
                      <h5>Jack danial</h5>
                      <span>New york</span>
                    </div>
                  </li>
                  <li>
                    <div className="cus-revi-box">
                      <div className="revi-im">
                        <img src="images/user/5.jpg" alt="" loading="lazy" />
                        <i className="cir-com cir-1" />
                        <i className="cir-com cir-2" />
                        <i className="cir-com cir-3" />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
                      </p>
                      <h5>Jack danial</h5>
                      <span>New york</span>
                    </div>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* BANNER */}
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
                    {/* <p>Marketing Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple3} alt="" loading="lazy" />
                    <h4>Amit & Shruti</h4>
                    {/* <p>Marketing Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple2} alt="" loading="lazy" />
                    <h4>Arshdeep & Kirat</h4>
                    {/* <p>Creative Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple4} alt="" loading="lazy" />
                    <h4>Shivam & Raman</h4>
                    {/* <p>Client Coordinator</p> */}
                    
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={couple5} alt="" loading="lazy" />
                    <h4>Yash and Palavi</h4>
                    {/* <p>Marketing Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple6} alt="" loading="lazy" />
                    <h4>Mahesh & Sravani</h4>
                    {/* <p>Marketing Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple7} alt="" loading="lazy" />
                    <h4>Jashan & Samriti</h4>
                    {/* <p>Creative Manager</p> */}
                  </div>
                </li>
                <li>
                  <div>
                    <img src={couple8} alt="" loading="lazy" />
                    <h4>Aneesh & Harpreet</h4>
                    {/* <p>Client Coordinator</p> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* GALLERY START */}
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
                  <a onClick={() => navigate('/profile-details')}  className="cta-3">
                  
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* FOOTER */}

      {/* END */}
      {/* COPYRIGHTS */}
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright © <span id="cry">2024</span>{" "}
                <a
                  style={{ textDecoration: "none", color: "#FFBF00	" }}
                  href="#!"
                  target="_blank"
                >
                  SoulMatch
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
    </div>
  );
}

export default Home;
