import React from "react";
import logo from "../images/logo.png";
import Profile1 from "../images/profiles/profile1.jpg";
import "../styles/home.css";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/fontAwesome.css";
function PersonDetails() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <nav
      className="nav-bar-fixed"
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", marginRight: "40px" }}
        />
      </nav>
      <section className="main-content">
        <div className="profi-pg profi-ban">
          <div className="">
            <div className="">
              <div className="profile">
                <div className="pg-pro-big-im">
                  <div className="s1">
                    <img src={Profile1} loading="lazy" className="pro" alt="" />
                  </div>
                  <div className="s3">
                    <a href="#!" className="cta fol cta-chat">
                      Chat now
                    </a>
                    <span
                      className="cta cta-sendint"
                      data-toggle="modal"
                      data-target="#sendInter"
                    >
                      Send interest
                    </span>
                  </div>
                </div>
              </div>
              <div className="profi-pg profi-bio">
                <div className="lhs">
                  <div className="pro-pg-intro">
                    <h1>Angelina Jolie</h1>
                    <div className="pro-info-status">
                      <span className="stat-1">
                        <b>100</b> viewers
                      </span>
                      <span className="stat-2">
                        <b>Available</b> online
                      </span>
                    </div>
                    <ul>
                      <li>
                        <div>
                          <img
                            src="images/icon/pro-city.png"
                            loading="lazy"
                            alt=""
                          />
                          <span>
                            City: <strong>New York</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/icon/pro-age.png"
                            loading="lazy"
                            alt=""
                          />
                          <span>
                            Age: <strong>21</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/icon/pro-city.png"
                            loading="lazy"
                            alt=""
                          />
                          <span>
                            Height: <strong>5.7</strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/icon/pro-city.png"
                            loading="lazy"
                            alt=""
                          />
                          <span>
                            Job: <strong>Working</strong>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* PROFILE ABOUT */}
                  <div className="pr-bio-c pr-bio-abo">
                    <h3>About</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.{" "}
                    </p>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                  </div>
                  {/* END PROFILE ABOUT */}
                  {/* PROFILE ABOUT */}
                  <div className="pr-bio-c pr-bio-gal" id="gallery">
                    <h3>Photo gallery</h3>
                    <div id="image-gallery">
                      <div className="pro-gal-imag">
                        <div className="img-wrapper">
                          <a href="#!">
                            <img
                              src="images/profiles/1.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </a>
                          <div className="img-overlay">
                            <i
                              className="fa fa-arrows-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pro-gal-imag">
                        <div className="img-wrapper">
                          <a href="#!">
                            <img
                              src="images/profiles/6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </a>
                          <div className="img-overlay">
                            <i
                              className="fa fa-arrows-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pro-gal-imag">
                        <div className="img-wrapper">
                          <a href="#!">
                            <img
                              src="images/profiles/14.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </a>
                          <div className="img-overlay">
                            <i
                              className="fa fa-arrows-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROFILE ABOUT */}
                  {/* PROFILE ABOUT */}
                  <div className="pr-bio-c pr-bio-conta">
                    <h3>Contact info</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="fa fa-mobile" aria-hidden="true" />
                          <b>Phone:</b>+92 (8800) 68 - 8960
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          <b>Email:</b>angelinajoliewed@gmail.com
                        </span>
                      </li>
                      <li>
                        <span>
                          <i
                            className="fa fa fa-map-marker"
                            aria-hidden="true"
                          />
                          <b>Address: </b>28800 Orchard Lake Road, Suite 180
                          Farmington Hills, U.S.A.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* END PROFILE ABOUT */}
                  {/* END PROFILE ABOUT */}
                  {/* PROFILE ABOUT */}
                  <div className="pr-bio-c pr-bio-hob">
                    <h3>Hobbies</h3>
                    <ul>
                      <li>
                        <span>Modelling</span>
                      </li>
                      <li>
                        <span>Watching movies</span>
                      </li>
                      <li>
                        <span>Playing volleyball</span>
                      </li>
                      <li>
                        <span>Hangout with family</span>
                      </li>
                      <li>
                        <span>Adventure travel</span>
                      </li>
                      <li>
                        <span>Books reading</span>
                      </li>
                      <li>
                        <span>Music</span>
                      </li>
                      <li>
                        <span>Cooking</span>
                      </li>
                      <li>
                        <span>Yoga</span>
                      </li>
                    </ul>
                  </div>
                  {/* END PROFILE ABOUT */}
                  {/* PROFILE ABOUT */}
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
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* END PROFILE ABOUT */}
                </div>
                {/* PROFILE lHS */}

                {/* END PROFILE lHS */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END PROFILE */}
      {/* INTEREST POPUP */}
      <div className="modal fade" id="sendInter">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title seninter-tit">
                Send interest to <span className="intename">Jolia</span>
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body seninter">
              <div className="lhs">
                <img
                  src="images/profiles/1.jpg"
                  alt=""
                  className="intephoto1"
                />
              </div>
              <div className="rhs">
                <h4>
                  <span className="intename1">Jolia</span> Can able to view the
                  below details
                </h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_about" defaultChecked="" />
                      <label htmlFor="pro_about">About section</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_photo" />
                      <label htmlFor="pro_photo">Photo gallery</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_contact" />
                      <label htmlFor="pro_contact">Contact info</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_person" />
                      <label htmlFor="pro_person">Personal info</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_hobbi" />
                      <label htmlFor="pro_hobbi">Hobbies</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input type="checkbox" id="pro_social" />
                      <label htmlFor="pro_social">Social media</label>
                    </div>
                  </li>
                </ul>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="comment"
                    name="text"
                    placeholder="Comment goes here"
                    defaultValue={""}
                  />
                  <label htmlFor="comment">
                    Write some message to <span className="intename" />
                  </label>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Send interest
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END INTEREST POPUP */}
      {/*- CHAT CONVERSATION BOX START -*/}
      <div className="chatbox">
        <span className="comm-msg-pop-clo">
          <i className="fa fa-times" aria-hidden="true" />
        </span>
        <div className="inn">
          <form name="new_chat_form" method="post">
            <div className="s1">
              <img src="images/profiles/2.jpg" className="intephoto2" alt="" />
              <h4>
                <b>Angelina Jolie</b>,
              </h4>
              <span className="avlsta avilyes">Available online</span>
            </div>
            <div className="s2 chat-box-messages">
              <span className="chat-wel">Start a new chat!!! now</span>
              <div className="chat-con">
                <div className="chat-lhs">Hi</div>
                <div className="chat-rhs">Hi</div>
              </div>
              {/*<span>Start A New Chat!!! Now</span>*/}
            </div>
            <div className="s3">
              <input
                type="text"
                name="chat_message"
                placeholder="Type a message here.."
                required=""
              />
              <button id="chat_send1" name="chat_send" type="submit">
                Send <i className="fa fa-paper-plane-o" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <section>
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
      </section> */}
    </div>
  );
}

export default PersonDetails;
