import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Profile1 from "../images/gallery/noProfile.jpg";
// import Profile7 from "../images/profiles/Profile7.jpg";
// import Profile8 from "../images/profiles/Profile8.jpg";
import "../styles/home.css";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/fontAwesome.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function PersonDetails({ setlogedIn }) {
  const location = useLocation();
  const [profileData, setProfileData] = useState(null);
  const [gallery , setGallery] = useState("")
  console.log("...location.state...",location?.state?.profileId)
  const profileId = location?.state?.profileId;
 
  const URL = process.env.REACT_APP_API_BASE_URL;

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
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

  const handleShowPhoneNumber = () => {
    navigate('/plan');
  };

  const handleLogo = () => {
    navigate('/profiles')
  }

  console.log("...personDetails....",profileData)

  useEffect(() => {
   if(profileData){
console.log("...photos phoneno...",profileData.phoneNo)
const identifier = profileData.phoneNo || profileData.email
      axios
        .get(`${URL}/getphotosByEmailOrPhoneNo/${identifier}`)
        .then(response => {
          console.log("..user profile response...", response.data);
          const photos = response.data.photoUrl;
          console.log("..photos...", photos);
          setGallery(photos);
        })
        .catch(error => {
          console.log("...error...", error);
        });
    }
  }, [
    profileData, 
    URL]);
  

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav
        className="nav-bar-fixed"
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between"
        }}
      >
        <img onClick={handleLogo} src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        <Button
            variant="contained"
            sx={{
              backgroundColor: "#F68C1E",
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
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
                            City: <strong>{profileData?.city || "Not Available"}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-age.png" loading="lazy" alt="" />
                          <span>
                            Age: <strong>{profileData?.age || "Not Available"}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-city.png" loading="lazy" alt="" />
                          <span>
                            Height: <strong>{profileData?.height || "Not Available"}</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="images/icon/pro-city.png" loading="lazy" alt="" />
                          <span>
                            Religion: <strong>{profileData?.religion || "Not Available"}</strong>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="pr-bio-c pr-bio-abo">
                    <h3>About</h3>
                    <p>{profileData?.aboutYourSelf || "Not Available"}</p>
                  </div>
                  <div className="pr-bio-c pr-bio-conta">
                    <h3>Contact info</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="fa fa-mobile" aria-hidden="true" />
                          <b>Phone:</b>
                          {profileData?.phoneNo ? (
                            <button onClick={handleShowPhoneNumber}>Show Phone Number</button>
                          ) : (
                            " Not Available"
                          )}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          <b>Email:</b> {profileData?.email || "Not Available"}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa fa-map-marker" aria-hidden="true" />
                          <b>Address:</b> {profileData?.address || "Not Available"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pr-bio-c pr-bio-hob">
                    <h3>Hobbies</h3>
                    {profileData?.hobbies ? (
                      <ul>
                        {profileData.hobbies.map((hobby, index) => (
                          <li key={index}>
                            <span>{hobby}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Data is not available</p>
                    )}
                  </div>
                  <div className="pr-bio-c pr-bio-gallery">
  <h3>Photo Gallery</h3>
  <div className="gallery-grid">
    {gallery.length > 0 ? (
      gallery.map((image, index) => (
        <div key={index} className="gallery-item">
          <img 
            src={image} 
            alt={`Gallery image ${index + 1}`}
            className="gallery-image"
          />
        </div>
      ))
    ) : (
      <p>No photos available</p>
    )}
  </div>
</div>

                  {/* <div className="pr-bio-c menu-pop-soci pr-bio-soc">
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
                  </div> */}
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
