import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import Profile1 from "../images/profiles/profile1.jpg";
import Profile2 from "../images/profiles/Profile6.jpg";
import Profile3 from "../images/profiles/Profile7.jpg";
import Profile4 from "../images/profiles/Profile8.jpg";
import Profile5 from "../images/profiles/Profile5.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profiles() {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  const handleChat = async () => {
    navigate('/chat');
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      // Trigger the upload function
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
        // Set the photo URL state with the URL returned from the backend
        setPhotoUrl(data.fileUpload);
      } else {
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  useEffect(() => {
    // Fetch profiles from the API using Axios
    axios.get('http://127.0.0.1:3002/getAllprofile')
      .then(response => {
        console.log("..response...",response)
        // The response data is directly available in response.data
        // setProfiles(response.data);
        // setLoading(false);
      })
      .catch(error => {
console.log("...error..",error)
        // setError(error);
        // setLoading(false);
      });
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
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
          style={{ display: 'none' }}
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
            cursor: "pointer"
          }}
        >
          {photoUrl ? <img src={photoUrl} alt="Uploaded Profile" style={{ height: "100%", width: "100%", borderRadius: "50%" }} /> : "Upload"}
        </div>
      </nav>
      <div>
        <section style={{ paddingTop: "0px" }}>
          <div className="all-weddpro all-jobs all-serexp chosenini">
            <div className="container">
              <div className="row">
                <div className="col-md-3 fil-mob-view">
                  <span className="filter-clo">+</span>
                  {/* START */}
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-search" aria-hidden="true" /> I'm looking for
                    </h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option value="">I'm looking for</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                      </select>
                    </div>
                  </div>
                  {/* END */}
                  {/* START */}
                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      Age
                    </h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option value="">Select age</option>
                        <option value="">18 to 30</option>
                        <option value="">31 to 40</option>
                        <option value="">41 to 50</option>
                        <option value="">51 to 60</option>
                        <option value="">61 to 70</option>
                        <option value="">71 to 80</option>
                        <option value="">81 to 90</option>
                        <option value="">91 to 100</option>
                      </select>
                    </div>
                  </div>
                  {/* END */}
                  {/* START */}
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
                  {/* END */}
                  {/* START */}
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
                  {/* END */}
                </div>
                <div className="col-md-9">
                  <div className="short-all">
                    <div className="short-lhs">
                      Showing <b>5</b> profiles
                    </div>
                  </div>
                  <div className="all-list-sh">
                    <ul>
                      <li>
                        <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                          {/*PROFILE IMAGE*/}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src={Profile1} alt="" />
                            </a>
                            <div className="pro-ave" title="User currently available">
                              <span />
                            </div>
                          </div>
                          {/*END PROFILE IMAGE*/}
                          {/*PROFILE NAME*/}
                          <div className="pro-detail">
                            <h4>
                              <a href="profile-details.html">Ashley emyy</a>
                            </h4>
                            <div className="pro-bio">
                              <span>B.Sc</span>
                              <span>IT Profession</span>
                              <span>29 Yeard old</span>
                              <span>Height: 155Cms</span>
                            </div>
                            <div className="links" style={{}}>
                              <span onClick={handleChat} className="cta-chat">Chat now</span>
                            </div>
                          </div>
                          {/*END PROFILE NAME*/}
                          {/*SAVE*/}
                          <span className="enq-sav" data-toggle="tooltip" title="Click to save this provile.">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                          </span>
                          {/*END SAVE*/}
                        </div>
                      </li>
                      <li>
                        <div className="all-pro-box" data-useravil="avilno" data-aviltxt="Offline">
                          {/*PROFILE IMAGE*/}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src={Profile2} alt="" />
                            </a>
                            <div className="pro-ave" title="User currently available">
                              <span />
                            </div>
                          </div>
                          {/*END PROFILE IMAGE*/}
                          {/*PROFILE NAME*/}
                          <div className="pro-detail">
                            <h4>
                              <a href="profile-details.html">Elizabeth Taylor</a>
                            </h4>
                            <div className="pro-bio">
                              <span>B.Sc</span>
                              <span>IT Profession</span>
                              <span>29 Yeard old</span>
                              <span>Height: 155Cms</span>
                            </div>
                            <div className="links">
                              <span onClick={handleChat} className="cta-chat">Chat now</span>
                            </div>
                          </div>
                          {/*END PROFILE NAME*/}
                          {/*SAVE*/}
                          <span className="enq-sav" data-toggle="tooltip" title="Click to save this provile.">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                          </span>
                          {/*END SAVE*/}
                        </div>
                      </li>
                      <li>
                        <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                          {/*PROFILE IMAGE*/}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src={Profile3} alt="" />
                            </a>
                            <div className="pro-ave" title="User currently available">
                              <span />
                            </div>
                          </div>
                          {/*END PROFILE IMAGE*/}
                          {/*PROFILE NAME*/}
                          <div className="pro-detail">
                            <h4>
                              <a href="profile-details.html">Tom harddy</a>
                            </h4>
                            <div className="pro-bio">
                              <span>B.Sc</span>
                              <span>IT Profession</span>
                              <span>29 Yeard old</span>
                              <span>Height: 155Cms</span>
                            </div>
                            <div className="links">
                              <span onClick={handleChat} className="cta-chat">Chat now</span>
                            </div>
                          </div>
                          {/*END PROFILE NAME*/}
                          {/*SAVE*/}
                          <span className="enq-sav" data-toggle="tooltip" title="Click to save this provile.">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                          </span>
                          {/*END SAVE*/}
                        </div>
                      </li>
                      <li>
                        <div className="all-pro-box" data-useravil="avilno" data-aviltxt="Offline">
                          {/*PROFILE IMAGE*/}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src={Profile4} alt="" />
                            </a>
                            <div className="pro-ave" title="User currently available">
                              <span />
                            </div>
                          </div>
                          {/*END PROFILE IMAGE*/}
                          {/*PROFILE NAME*/}
                          <div className="pro-detail">
                            <h4>
                              <a href="profile-details.html">Bella Hardy</a>
                            </h4>
                            <div className="pro-bio">
                              <span>B.Sc</span>
                              <span>IT Profession</span>
                              <span>29 Yeard old</span>
                              <span>Height: 155Cms</span>
                            </div>
                            <div className="links">
                              <span onClick={handleChat} className="cta-chat">Chat now</span>
                            </div>
                          </div>
                          {/*END PROFILE NAME*/}
                          {/*SAVE*/}
                          <span className="enq-sav" data-toggle="tooltip" title="Click to save this provile.">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                          </span>
                          {/*END SAVE*/}
                        </div>
                      </li>
                      <li>
                        <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                          {/*PROFILE IMAGE*/}
                          <div className="pro-img">
                            <a href="profile-details.html">
                              <img src={Profile5} alt="" />
                            </a>
                            <div className="pro-ave" title="User currently available">
                              <span />
                            </div>
                          </div>
                          {/*END PROFILE IMAGE*/}
                          {/*PROFILE NAME*/}
                          <div className="pro-detail">
                            <h4>
                              <a href="profile-details.html">Nancy Deams</a>
                            </h4>
                            <div className="pro-bio">
                              <span>B.Sc</span>
                              <span>IT Profession</span>
                              <span>29 Yeard old</span>
                              <span>Height: 155Cms</span>
                            </div>
                            <div className="links">
                              <span onClick={handleChat} className="cta-chat">Chat now</span>
                            </div>
                          </div>
                          {/*END PROFILE NAME*/}
                          {/*SAVE*/}
                          <span className="enq-sav" data-toggle="tooltip" title="Click to save this provile.">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                          </span>
                          {/*END SAVE*/}
                        </div>
                      </li>
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
