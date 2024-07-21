import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Profile1 from "../images/profiles/profile1.jpg";
import "../styles/home.css";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/fontAwesome.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function PersonDetails({setlogedIn}) {
  const location = useLocation();
  const [profileData, setProfileData] = useState(null);
  const profileId = location?.state?.profileId;

  const URL = process.env.REACT_APP_API_BASE_URL;

const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    localStorage.setItem("logedIn", "false");
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/profile/${profileId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (profileId) {
      fetchData();
    }
  }, [profileId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav
        className="nav-bar-fixed"
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <section className="main-content">
        <div className="profi-pg profi-ban">
          <div className="">
            <div className="">
              <div className="profile">
              <div className="pg-pro-big-im">
  <div className="s1">
    <img
      src={profileData?.fileUpload || Profile1}
      loading="lazy"
      className="pro"
      alt="Profile"
      onError={(e) => { e.target.src = Profile1; }}
    />
  </div>
</div>
              </div>
              <div className="profi-pg profi-bio">
                <div className="lhs">
                  <div className="pro-pg-intro">
                    <h1>{profileData?.name || "Angelina Jolie"}</h1>
                    <ul>
                      <li>
                        <div>
                          <img src="images/icon/pro-city.png" loading="lazy" alt="" />
                          <span>
                            City: <strong>{profileData?.city}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-age.png" loading="lazy" alt="" />
                          <span>
                            Age: <strong>{profileData?.age}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-city.png" loading="lazy" alt="" />
                          <span>
                            Height: <strong>{profileData?.height}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-city.png" loading="lazy" alt="" />
                          <span>
                            Religion: <strong>{profileData?.religion}</strong>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="pr-bio-c pr-bio-abo">
                    <h3>About</h3>
                    <p>{profileData?.aboutYourSelf}</p>
                  </div>
                  <div className="pr-bio-c pr-bio-conta">
                    <h3>Contact info</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="fa fa-mobile" aria-hidden="true" />
                          <b>Phone:</b> {profileData?.phoneNo}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          <b>Email:</b> {profileData?.email}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa fa-map-marker" aria-hidden="true" />
                          <b>Address:</b> {profileData?.address}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pr-bio-c pr-bio-hob">
                    <h3>Hobbies</h3>
                    <ul>
                      {profileData?.hobbies?.split(',').map((hobby, index) => (
                        <li key={index}>
                          <span>{hobby}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pr-bio-c menu-pop-soci pr-bio-soc">
                    <h3>Social media</h3>
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
                </div>
                {/* PROFILE lHS */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END PROFILE */}
    </div>
  );
}

export default PersonDetails;
