import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profiles({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const URL = process.env.REACT_APP_API_BASE_URL;

  const handleChat = async () => {
    try {
      
      const response = await axios.post(
        `${URL}/api/allProfileId`,
        {
          email: user.email,
          AllprofilesId: interestedProfiles
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
      console.log("..error...", error);
    }
  };

  const handleInterest = (profileId) => {
    console.log("Interest button clicked for profile:", profileId);

    setInterestedProfiles(prevState => {
      const updatedProfiles = [...prevState, profileId];
      console.log("..updatedProfile..", updatedProfiles);
      return updatedProfiles;
    });
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
      const response = await fetch(`${URL}/api/upload?email=${user.email}`, {
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
    axios.get(`${URL}/api/getimagepath?email=${user.email}`)
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
    // Construct the API URL based on filters
    let apiUrl = `${URL}/api/getAllprofile?email=${user.email}`;

    if (age) {
      apiUrl += `&ageRange=${age}`;
    }
    if (religion) {
      apiUrl += `&religion=${religion}`;
    }
    if (caste) {
      apiUrl += `&caste=${caste}`;
    }

    console.log("Constructed API URL:", apiUrl);

    axios.get(apiUrl)
      .then(response => {
        console.log("..response...", response.data);
        setProfiles(response.data.response);
      })
      .catch(error => {
        console.log("...error..", error);
      });
  }, [age, religion, caste]);

  const handleProfileDetails = async (profileId) => {
    console.log("...handleProfileDetails for profileId...", profileId)
    navigate('/PersonDetails', { state: { profileId } });
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    localStorage.setItem("logedIn", "false");
    navigate('/');
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
            <img
            src= {noProfile}
            alt="Uploaded Profile"
            style={{ height: "100%", width: "100%", borderRadius: "50%" }}
          />
          )}
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div>
        <section style={{ paddingTop: "0px" }}>
          <div className="all-weddpro all-jobs all-serexp chosenini">
            <div className="container">
              <div className="row">
                <div className="col-md-3 fil-mob-view">
                  <span className="filter-clo">+</span>
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
                      <select className="chosen-select" 
                        value={religion}
                        onChange={(event) => setReligion(event.target.value)}
                      >
                        <option value="">Select Religion</option>
                        <option value="Any">Any</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Jain">Jain</option>
                        <option value="Christian">Christian</option>
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
                        value={caste}
                        onChange={(event) => setCaste(event.target.value)}
                      >
                        <option value="">Select Caste</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
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
                              <a onClick={() => handleProfileDetails(profile._id)}>
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
                                <a onClick={() => handleProfileDetails(profile._id)}>
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
                 {/* <div className="mor-prof">
                    <button className="mor-but">Load more profiles</button>
                  </div>*/}
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
