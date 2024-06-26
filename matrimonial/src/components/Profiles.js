import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import Profile1 from "../images/profiles/profile1.jpg";
import Profile2 from "../images/profiles/Profile6.jpg";
import Profile3 from "../images/profiles/Profile7.jpg";
import Profile4 from "../images/profiles/Profile8.jpg";
import Profile5 from "../images/profiles/Profile5.jpg";
import noProfile from "../images/profiles/noProfile.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profiles() {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const navigate = useNavigate();

  console.log("...age..", age);

  const handleChat = async () => {
    try {
      const API_BASE_URL = 'http://localhost:3002';
      const response = await axios.post(
        `${API_BASE_URL}/allProfileId`,
        {
          
          email: "kratiwork7@gmail.com",
          AllprofilesId : interestedProfiles
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("API Response:", response);
      navigate('/chat');
    } catch (error) {
      console.log("..error...",error)
    }
   
  };

  const handleInterest = (profileId) => {
    console.log("Interest button clicked for profile:", profileId);

    // Update the state and then log the updated state inside the callback
    setInterestedProfiles(prevState => {
      const updatedProfiles = [...prevState, profileId];
      console.log("..updatedProfile..", updatedProfiles);
      return updatedProfiles;
    });

    // Note: Logging here will not reflect the updated state immediately due to the asynchronous nature of setState
    //  console.log("..interestedProfiles..", interestedProfiles);
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      uploadImageToServer(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const uploadImageToServer = async (file) => {
    console.log("...upload image...");

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://127.0.0.1:3002/upload?email=kratiwork7@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("File uploaded successfully:", data.fileUpload);
        handlegetImageUrl();
      } else {
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handlegetImageUrl = async () => {
    axios.get('http://127.0.0.1:3002/getimagepath?email=kratiwork7@gmail.com')
      .then(response => {
        console.log(".get image url response...", response.data.response.imageUrl);
        setPhotoUrl(response.data.response.imageUrl);
      })
      .catch(error => {
        console.log("...error..", error);
      });
  };

  useEffect(() => {
    handlegetImageUrl();
  }, []);

  useEffect(() => {
    let apiUrl = 'http://127.0.0.1:3002/getAllprofile?email=kratiwork7@gmail.com';

    if (age) {
      apiUrl += `&ageRange=${age}`;
    }

    axios.get(apiUrl)
      .then(response => {
        console.log("..response...", response.data);
        setProfiles(response.data.response);
      })
      .catch(error => {
        console.log("...error..", error);
      });
  }, [age]);

  const handleProfileDetails = async () => {
    navigate('/PersonDetails');
  };

  useEffect(() => {
    console.log("..interestedProfiles after update..", interestedProfiles);
  }, [interestedProfiles]);

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", marginRight: "40px" }}
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={uploadImage}
        />
        <div
          onClick={triggerFileInput}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "#FF0000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Uploaded Profile"
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
            />
          ) : (
            "Upload"
          )}
        </div>
      </nav>
      <div>
        <section style={{ paddingTop: "0px" }}>
          <div className="all-weddpro all-jobs all-serexp chosenini">
            <div className="container">
              <div className="row">
                <div className="col-md-3 fil-mob-view">
                  <span className="filter-clo">+</span>
                  {/* Filter Options */}
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-search" aria-hidden="true" /> I'm
                      looking for
                    </h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option value="">I'm looking for</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                      </select>
                    </div>
                  </div>
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      Age
                    </h4>
                    <div className="form-group">
                      <select
                        className="chosen-select"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                      >
                        <option value="">Select age</option>
                        <option value="18-30">18 to 30</option>
                        <option value="31-40">31 to 40</option>
                        <option value="41-50">41 to 50</option>
                        <option value="51-60">51 to 60</option>
                        <option value="61-70">61 to 70</option>
                        <option value="71-80">71 to 80</option>
                        <option value="81-90">81 to 90</option>
                        <option value="91-100">91 to 100</option>
                      </select>
                    </div>
                  </div>
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-bell-o" aria-hidden="true" />
                      Select Religion
                    </h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>Religion</option>
                        <option>Any</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Jain</option>
                        <option>Christian</option>
                      </select>
                    </div>
                  </div>
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      Location
                    </h4>
                    <div className="form-group">
                      <select className="chosen-select" name="addjbmaincate">
                        <option value="Chennai">Chennai</option>
                        <option value="Bangaluru">Bangaluru</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-users" aria-hidden="true" />
                      Select Caste
                    </h4>
                    <div className="form-group">
                      <select
                        id="caste-select"
                        className="chosen-select"
                        // value={caste}
                        // onChange={(event) => setCaste(event.target.value)}
                      >
                        <option value="aggrawal">Aggrawal</option>
                        <option value="sharma">Sharma</option>
                        <option value="gupta">Gupta</option>
                        <option value="verma">Verma</option>
                        <option value="singh">Singh</option>
                        <option value="jain">Jain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="short-all">
                    <div className="short-lhs">
                      Showing <b>{profiles.length}</b> profiles
                    </div>
                  </div>
                  <div className="all-list-sh">
                    <ul>
                      {profiles.map((profile) => (
                        <li key={profile._id}>
                          <div
                            className="all-pro-box user-avil-onli"
                            data-useravil="avilyes"
                            data-aviltxt="Available online"
                          >
                            <div className="pro-img">
                              <a onClick={handleProfileDetails}>
                                <img
                                  src={profile.fileUpload || noProfile}
                                  alt=""
                                />
                              </a>
                              <div
                                className="pro-ave"
                                title="User currently available"
                              >
                                <span />
                              </div>
                            </div>
                            <div className="pro-detail">
                              <h4>
                                <a onClick={handleProfileDetails}>
                                  {profile.name}
                                </a>
                              </h4>
                              <div className="pro-bio">
                                <span>{profile.heighestEduction}</span>
                                <span>{profile.profession}</span>
                                <span>{profile.age}</span>
                                <span>Height: {profile.height}</span>
                              </div>
                              <div className="links" style={{}}>
                                <span onClick={handleChat} className="cta-chat">
                                  Chat now
                                </span>
                                <span
                                  onClick={() => handleInterest(profile._id)}
                                  className="cta-interest"
                                >
                                  Interested
                                </span>
                              </div>
                            </div>
                            <span
                              className="enq-sav"
                              data-toggle="tooltip"
                              title="Click to save this profile."
                            >
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mor-prof">
                    <button className="mor-but">Load more profiles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profiles;
