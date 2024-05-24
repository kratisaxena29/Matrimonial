import React from 'react'
import logo from "../images/logo.png"
import Profile1 from "../images/profiles/profile1.jpg"
import Profile2 from "../images/profiles/Profile6.jpg"
import Profile3 from "../images/profiles/Profile7.jpg"
import Profile4 from "../images/profiles/Profile8.jpg"
import Profile5 from "../images/profiles/Profile5.jpg"
function Profiles() {
  return (
    <div>
         <nav
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
      <div>
  <section style={{paddingTop:"0px"}}>
    <div className="all-weddpro all-jobs all-serexp chosenini">
      <div className="container">
        <div className="row">
          <div className="col-md-3 fil-mob-view">
            <span className="filter-clo">+</span>
            {/* START */}
            <div className="filt-com lhs-cate">
              <h4>
                <i className="fa fa-search" aria-hidden="true" /> I'm looking
                for
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
            {/* START */}
            <div className="filt-com lhs-rati lhs-avail lhs-cate">
              <h4>
                <i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}
                Availablity
              </h4>
              <ul>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav1"
                      defaultChecked=""
                    />
                    <label htmlFor="exav1">All</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav2"
                    />
                    <label htmlFor="exav2">Available</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav3"
                    />
                    <label htmlFor="exav3">Offline</label>
                  </div>
                </li>
              </ul>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-rati lhs-ver lhs-cate">
              <h4>
                <i className="fa fa-shield" aria-hidden="true" />
                Profile
              </h4>
              <ul>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver1"
                      defaultChecked=""
                    />
                    <label htmlFor="exver1">All</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver2"
                    />
                    <label htmlFor="exver2">Premium</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver3"
                    />
                    <label htmlFor="exver3">Free</label>
                  </div>
                </li>
              </ul>
            </div>
            {/* END */}
            {/* START */}
            {/* <div className="filt-com filt-send-query">
              <div className="send-query">
                <h5>What are you looking for?</h5>
                <p>We will help you to arrage the best match to you.</p>
                <a href="#!" data-toggle="modal" data-target="#expfrm">
                  Send your queries
                </a>
              </div>
            </div> */}
            {/* END */}
          </div>
          <div className="col-md-9">
            <div className="short-all">
              <div className="short-lhs">
                Showing <b>5</b> profiles
              </div>
              {/* <div className="short-rhs">
                <ul>
                  <li>Sort by:</li>
                  <li>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option value="">Most relative</option>
                        <option value="Men">Date listed: Newest</option>
                        <option value="Men">Date listed: Oldest</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="sort-grid sort-grid-1">
                      <i className="fa fa-th-large" aria-hidden="true" />
                    </div>
                  </li>
                  <li>
                    <div className="sort-grid sort-grid-2 act">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="all-list-sh">
              <ul>
                <li>
                  <div
                    className="all-pro-box user-avil-onli"
                    data-useravil="avilyes"
                    data-aviltxt="Available online"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src={Profile1} alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span />
                      </div>
                      {/* <div className="pro-avl-status">
                        <h5>Available Online</h5>
                      </div> */}
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
                        <span className="cta-chat">Chat now</span>
                        </div>
                        {/* <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a> */}
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src={Profile2}alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span />
                      </div>
                      {/* <div className="pro-avl-status">
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div> */}
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
                        <span className="cta-chat">Chat now</span>
                        {/* <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a> */}
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box user-avil-onli"
                    data-useravil="avilyes"
                    data-aviltxt="Available online"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src={Profile3} alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span />
                      </div>
                      {/* <div className="pro-avl-status">
                        <h5>Available Online</h5>
                      </div> */}
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Angelina Jolie</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        {/* <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a> */}
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*END USER AND GET QUOTE*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src={Profile4} alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span />
                      </div>
                      {/* <div className="pro-avl-status">
                        <h5>Last login 10 mins ago</h5>
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div> */}
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Olivia mia</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        {/* <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a> */}
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src={Profile5} alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span />
                      </div>
                      {/* <div className="pro-avl-status">
                        <h5>Last login 10 mins ago</h5>
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div> */}
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Jennifer</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        {/* <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a> */}
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="modal fade" id="sendInter">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title seninter-tit">
            Send interest to <span className="intename2">Jolia</span>
          </h4>
          <button type="button" className="close" data-bs-dismiss="modal">
            ×
          </button>
        </div>
        {/* Modal body */}
        <div className="modal-body seninter">
          <div className="lhs">
            <img src="images/profiles/1.jpg" alt="" className="intephoto2" />
          </div>
          <div className="rhs">
            <h4>
              Permissions: <span className="intename2">Jolia</span> Can able to
              view the below details
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
  </div>
  {/* END INTEREST POPUP */}
  {/* CHAT CONVERSATION BOX START */}
  <div className="chatbox">
    <span className="comm-msg-pop-clo">
      <i className="fa fa-times" aria-hidden="true" />
    </span>
    <div className="inn">
      <form name="new_chat_form" method="post">
        <div className="s1">
          <img src="images/user/2.jpg" className="intephoto2" alt="" />
          <h4>
            <b className="intename2">Julia</b>,
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
  {/* END */}
  {/* FOOTER */}

  {/*<section className="wed-hom-footer">
    <div className="container">
      <div className="row foot-supp">
        <h2>
          <span>Free support:</span> +92 (8800) 68 - 8960
          &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span>
          info@example.com
        </h2>
      </div>
      <div className="row wed-foot-link wed-foot-link-1">
        <div className="col-md-4">
          <h4>Get In Touch</h4>
          <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
          <p>
            Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
          </p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
        <div className="col-md-4">
          <h4>HELP &amp; SUPPORT</h4>
          <ul>
            <li>
              <a href="about-us.html">About company</a>
            </li>
            <li>
              <a href="#!">Contact us</a>
            </li>
            <li>
              <a href="#!">Feedback</a>
            </li>
            <li>
              <a href="about-us.html#faq">FAQs</a>
            </li>
            <li>
              <a href="about-us.html#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 fot-soc">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <a href="#!">
                <img src="images/social/1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src="images/social/2.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src="images/social/3.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src="images/social/5.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row foot-count">
        <p>
          Company name Site - Trusted by over thousands of Boys &amp; Girls for
          successfull marriage.{" "}
          <a href="sign-up.html" className="btn btn-primary btn-sm">
            Join us today !
          </a>
        </p>
      </div>
    </div>
  </section> */}
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
    </div>
  )
}

export default Profiles