import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useNavigate } from "react-router-dom";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  styled,
  Avatar,
  Menu,
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

function Profiles({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const [subcaste, setSubCaste] = useState("");
  const [oneProfile, setOneProfiles] = useState("");
  const navigate = useNavigate();

  const casteOptions = [
    "Agarwal",
    "Kanyakubj Brahmin",
    "Gaur Brahmin",
    "Brahmin",
    "Jat",
    "Jain",
    "Maheshwari",
    "Kayastha",
    "Khatri",
    "Kshatriya",
    "Maratha",
    "Rajput",
    "Sindhi",
    "Sunni",
    "Oberoi",
    "Arora",
    "Shwetamber",
    "Yadav",
    "Bania",
    "Scheduled Caste",
    "Digamber",
    "Sikh Jat",
    "Gupta",
    "Scheduled Tribes",
    "Tei",
    "Vaishnav",
    "Kurmi kshatriya",
    "Other",
  ];

  const subCasteOptions = [
    "Select Sub Caste",
    "Arora",
    "Baniya",
    "24 Manai Telugu Chettiar",
    "96 Kuli Maratha",
    "96K Kokanastha",
    "Adi Andhra",
    "Adi Dharmi",
    "Adi Dravida",
    "Adi Karnataka",
    "Agamudayar",
    "Agnikula Kshatriya",
    "Agri",
    "Ahir",
    "Ahom",
    "Ambalavasi",
    "Arcot",
    "Arekatica",
    "Arora",
    "Arunthathiyar",
    "Arya Vysya",
    "Aryasamaj",
    "Ayyaraka",
    "Bhandari",
    "Brahmin - Audichya",
    "Brahmin - Anavil",
    "Brahmin - Audichya",
    "Brahmin - Barendra",
    "Brahmin - Bhatt",
    "Brahmin - Bhumihar",
    "Brahmin - Brahmbhatt",
    "Brahmin - Dadhich/Dadheech",
    "Brahmin - Daivadnya",
    "Brahmin - Danua",
    "Brahmin - Deshastha",
    "Brahmin - Dhiman",
    "Brahmin - Dravida",
    "Brahmin - Embrandiri",
    "Brahmin - Goswami",
    "Brahmin - Gour",
    "Brahmin - Gowd Saraswat",
    "Brahmin - Gujar Gour",
    "Brahmin - Gurukkal",
    "Brahmin - Halua",
    "Brahmin - Havyaka",
    "Brahmin - Himachali",
    "Brahmin - Hoysala",
    "Brahmin - Iyengar",
    "Brahmin - Iyer",
    "Brahmin - Jangid",
    "Brahmin - Jhadua",
    "Brahmin - Jhijhotiya",
    "Brahmin - Kanyakubja",
    "Brahmin - Karhade",
    "Brahmin - Kashmiri Pandit",
    "Brahmin - Kokanastha",
    "Brahmin - Kota",
    "Brahmin - Kulin",
    "Brahmin - Kumaoni",
    "Brahmin - Madhwa",
    "Brahmin - Maithili",
    "Brahmin - Modh",
    "Brahmin - Mohyal",
    "Brahmin - Nagar",
    "Brahmin - Namboodiri",
    "Brahmin - Niyogi",
    "Brahmin - Niyogi Nandavariki",
    "Brahmin - Other",
    "Brahmin - Paliwal",
    "Brahmin - Panda",
    "Brahmin - Pareek",
    "Brahmin - Pushkarna",
    "Brahmin - Rarhi",
    "Brahmin - Rudraj",
    "Brahmin - Sakaldwipi",
    "Brahmin - Sanadya",
    "Brahmin - Saraswat",
    "Brahmin - Sanketi",
    "Brahmin - Sarua",
    "Brahmin - Vyas",
    "Brahmbatt",
    "Badaga",
    "Baghel/Pal/Gaderiya",
    "Bahi",
    "Baidya",
    "Baishnab",
    "Brahmo",
    "Buddar",
    "Bunt (Shetty)",
    "CKP",
    "Chalawadi Holeya",
    "Chambhar",
    "Chandravanshi Kahar",
    "Chasa",
    "Chattada Sri Vaishnava",
    "Chaudary",
    "Chaurasia",
    "Chekkala - Nair",
    "Chennadasar",
    "Cheramar",
    "Chettiar",
    "Chhetri",
    "Chippolu/Mera",
    "Devadiga",
    "Devanga",
    "Devar/Thevar/Mukkulathor",
    "Devendra Kula Vellalar",
    "Dhangar",
    "Dheevara",
    "Dhiman",
    "Dhoba",
    "Digambar",
    "Dommala",
    "Dusadh",
    "Ediga",
    "Ezhava",
    "Ezhuthachan",
    "Gabit",
    "Ganakar",
    "Gowda",
    "Halwai",
    "Hegde",
    "Helava",
    "Intercaste",
    "Jaalari",
    "Jaiswal",
    "Jandra",
    "Jangam",
    "Jat",
    "Jatav",
    "Jetty Malla",
    "Kachara",
    "Kaibarta",
    "Kakkalan",
    "Kalar",
    "Kalinga",
    "Kalinga Vysya",
    "Kashyap",
    "Kayastha",
    "Khandelwal",
    "Koli",
    "Koli Patel",
    "Kshatriya",
    "Lambadi",
    "Laxminarayan gola",
    "Leva Patidar",
    "Leva Patil",
    "Lingayat",
    "Lingayat-Agasa",
    "Lingayat-Akkasali",
    "Lingayat-Aradhya",
    "Lingayat-Balegala",
    "Lingayat-Banagar",
    "Lingayat-Banajiga",
    "Lingayat-Bhandari",
    "Lingayat-Bilijedaru",
    "Lingayat-Bilimagga",
    "Lingayat-Chaturtha",
    "Lingayat-Dikshwant",
    "Lingayat-Ganiga",
    "Lingayat-Gowda",
    "Lingayat-Gowli",
    "Lingayat-Gurav",
    "Lingayat-Hadapada",
    "Lingayat-Hatgar",
    "Lingayat-Hoogar / Hugar / Jeer",
    "Lingayat-Jadaru",
    "Lingayat-Jangam",
    "Lingayat-Kudu Vokkaliga",
    "Lingayat-Kumbar / Kumbara",
    "Lingayat-Kumbhar",
    "Lingayat-Kuruhina Setty",
    "Lingayat-lamba",
    "Lingayat-Lolagonda",
    "Lingayat-Madivala",
    "Lingayat-Malgar",
    "Lingayat-Mali",
    "Lingayat-Neelagar",
    "Lingayat-Neeli / Neelagar",
    "Lingayat-Neygi",
    "Lingayat-Nolamba",
    "Lingayat-Pancham",
    "Lingayat-Panchamasali",
    "Lingayat-Pattasali",
    "Lingayat-Reddy Reddi",
    "Lingayat-Sadar",
    "Lingayat-Sajjan / Sajjanaganigar ",
    "Lingayat-Setty",
    "Lingayat-Shilwant",
    "Lingayat-Shiva Simpi",
    "Lingayat-Vani",
    "Lingayat-Veerashaiva",
    "Lohana",
    "Lohana-Ghoghari",
    "Lohana-Halai",
    "Lohana-Kutchi",
    "Lohana-Vaishnav",
    "Lohar",
    "Lubana",
    "Madiga",
    "Mahar",
    "Mahendra",
    "Maheshwari",
    "Mahindra",
    "Mahisya",
    "Majabi Mazhbi",
    "Mala",
    "Mali",
    "Mallah",
    "Mallah-Kewat / Keot",
    "Mallah-Nishad",
    "Manikpuri",
    "Manipuri",
    "Manjhi",
    "Mannan / Velon / Vannan",
    "Mapila",
    "Maratha",
    "Maratha-96 Kuli Maratha",
    "Maratha-Aramari Gabit",
    "Maratha-Deshastha Maratha",
    "Maratha-Deshmukh",
    "Maratha-Deshtha Maratha",
    "Maratha-Gomantak Maratha",
    "Maratha-Jhadav",
    "Maratha-Kokanastha Maratha",
    "Maratha-Kunbi Dhanoje",
    "Maratha-Kunbi Khaire",
    "Maratha-Kunbi Khedule",
    "Maratha-Kunbi Lonari",
    "Maratha-Kunbi Maratha",
    "Maratha-Kunbi Tirale",
    "Maratha-Malwani",
    "Maratha-Maratha Kshatriya",
    "Maratha-Parit",
    "Maratha-Patil",
    "Maratha-Sonar",
    "Maratha-Suthar",
    "Maratha-Vani",
    "Maravar",
    "Maruthuvar",
    "Matang",
    "Maurya",
    "Maurya-Kachchi",
    "Maurya-Kushwaha",
    "Meda",
    "Meena",
    "Meenavar",
    "Meghwal",
    "Mehra",
    "Mehtar",
    "Menon",
    "Meru",
    "Meru darji",
    "Mochi",
    "Modak",
    "Mogaveera",
    "Monchi",
    "Motati Reddy",
    "Mudaliar",
    "Mudaliar-Agamudayar/Arcot/Thuluva Vellala",
    "Mudaliar-Isai Vellalar",
    "Mudaliar-Kerala Mudali",
    "Mudaliar-Kongu Vellala Gounder",
    "Mudaliar-Mudailiar Arcot",
    "Mudaliar-Mudaliar All",
    "Mudaliar-Mudaliar Saiva",
    "Mudaliar-Mudaliar Sengupta",
    "Mudaliar-Saiva Pillai Tirunelveli",
    "Mudaliar-Sengunthar/Kaikolar",
    "Mudaliar-Sozhiya Vellalar",
    "Mudaliar-Thondai Mandala Vellala",
    "Mudaliar-Veerakodi Vellala",
    "Mudaliar Arcot",
    "Mudiraj",
    "Muthuraja",
    "Naagavamsam",
    "Nadar",
    "Nadar-Kongu Nadar",
    "Nagaralu",
    "Naicker",
    "Naicker-Naicker others",
    "Naicker-Naicker-Vanniya Kula Kshatriyar",
    "Naicker-Rajaka Chakali Dhobi",
    "Naidu",
    "Naidu-Balija Naidu",
    "Naidu-Ediga /Goud",
    "Naidu-Gajula Kavarai",
    "Naidu-Gavara",
    "Naidu-Kamma",
    "Naidu-Kapu Naidu",
    "Naidu-Munnuru Kapu",
    "Naidu-Mutharaja",
    "Naidu-Perika",
    "Naidu-Raja Kambalathu Naicker",
    "Naidu-Raju",
    "OBC - Barber/Naayee",
    "Oswal",
    "Otari",
    "Patel",
    "Padmasali",
    "Panchal",
    "Pandaram",
    "Panicker",
    "Paravan",
    "Parit",
    "Parkava Kulam",
    "Partraj",
    "Pasi",
    "Rajaka/Chakali/Dhobi",
    "Rajbhar",
    "Rajput",
    "Rajput - Kumaoni",
    "Rajput - Lodhi",
    "Ramdasia",
    "Ramgharia",
    "Rauniyar",
    "Ravidasia",
    "Rawat",
    "Reddiar",
    "Reddy",
    "Relli",
    "SSK",
    "Sagara - Uppara",
    "Shilpkar",
    "Shimpi",
    "Sindhi - Bhanusali",
    "Sindhi - Bhatia",
    "Sindhi - Chhapru",
    "Sindhi - Dadu",
    "Sindhi - Hyderabadi",
    "Sindhi - Larai",
    "Sindhi - Lohana",
    "Telaga",
    "Teli",
    "Thuluva Vellala",
    "Vysya",
    "Yadav",
    "Other",
  ];

  const ReligionOptions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Bahai",
  ];
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const URL = process.env.REACT_APP_API_BASE_URL;

  const handleChat = async () => {
    try {
      const payload = {
        AllprofilesId: interestedProfiles,
      };

      // Add email or phoneno to the payload based on available user data
      if (user.email) {
        payload.email = user.email;
      } else if (user.phoneno) {
        payload.phoneno = user.phoneno;
      } else {
        console.log("Neither email nor phone number is available.");
        return;
      }

      const response = await axios.post(`${URL}/allProfileId`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);
      navigate("/chat");
    } catch (error) {
      console.log("..error...", error);
    }
  };

  const handleInterest = (profileId) => {
    console.log("Interest button clicked for profile:", profileId);

    setInterestedProfiles((prevState) => {
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
    // document.getElementById('fileInput').click();
    navigate("/user-profile");
  };

  const uploadImageToServer = async (file) => {
    console.log("...upload image...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      let apiUrl = `${URL}/upload?`;
      if (user.email) {
        apiUrl += `email=${user.email}`;
      } else if (user.phoneno) {
        console.log("...user.phoneno...", user.phoneno);
        apiUrl += `phoneno=${user.phoneno}`;
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("File uploaded successfully:", data.fileUpload);
        handlegetImageUrl();
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handlegetImageUrl = async () => {
    axios
      .get(`${URL}/getimagepath?email=${user.email}`)
      .then((response) => {
        console.log(
          ".get image url response...",
          response.data.response.imageUrl
        );
        setPhotoUrl(response.data.response.imageUrl);
      })
      .catch((error) => {
        console.log("...error..", error);
      });
  };

  useEffect(() => {
    handlegetImageUrl();
  }, []);

  useEffect(() => {
    // Construct the API URL based on filters
    let apiUrl = `${URL}/getAllprofile?`;
    if (user.email) {
      apiUrl += `email=${user.email}`;
    } else if (user.phoneno) {
      console.log("...user.phoneno...", user.phoneno);
      apiUrl += `phoneno=${user.phoneno}`;
    }

    if (age) {
      apiUrl += `&ageRange=${age}`;
    }
    if (religion) {
      apiUrl += `&religion=${religion}`;
    }
    if (caste) {
      apiUrl += `&caste=${caste}`;
    }
    if (subcaste) {
      apiUrl += `&subcaste=${subcaste}`;
    }

    console.log("Constructed API URL:", apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("..response...", response.data);
        setProfiles(response.data.response);
      })
      .catch((error) => {
        console.log("...error..", error);
      });
  }, [age, religion, caste, subcaste]);

  useEffect(() => {
    axios
      .get(`${URL}/oneProfileByEmail/${user.email}`)
      .then((response) => {
        console.log("..response...", response.data);
        setOneProfiles(response.data);
      })
      .catch((error) => {
        console.log("...error...", error);
      });
  }, []);
  console.log("...krati...", oneProfile);

  const handleProfileDetails = async (profileId) => {
    console.log("...handleProfileDetails for profileId...", profileId);
    navigate("/PersonDetails", { state: { profileId } });
  };
  const StyledAppBar = styled(AppBar)({
    backgroundColor: "#6D0B32",
  });

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
  });

  const LogoImage = styled("img")({
    height: "40px",
  });

  const ButtonGroup = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "16px",
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "#F68C1E",
    "&:hover": {
      backgroundColor: "#E57D0F",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      padding: "6px 10px",
    },
  }));

  const ProfileButton = styled(Button)({
    textTransform: "none",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    borderRadius: "8px",
    padding: "6px 12px",
    border: "1px solid orange",
    alignItems: "center",
  });

  const UserInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "12px",
  });

  const UserName = styled(Typography)({
    fontWeight: "bold",
    fontSize: "0.9rem",
    lineHeight: "1.2",
  });

  const UserId = styled(Typography)({
    fontSize: "0.75rem",
    marginRight:6,
    // opacity: 0.8,
    color: "white",
  });

  const Navbar = ({
    logo,
    oneProfile,
    handlePlans,
    triggerFileInput,
    photoUrl,
    noProfile,
    handleLogout,
  }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const getPlanName = () => {
      switch (oneProfile.plan) {
        case "100":
          return "Gold";
        case "200":
          return "Diamond";
        case "300":
          return "Platinum";
        default:
          return "Membership Plan";
      }
    };

    return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <LogoImage src={logo} alt="Logo" />
          <ButtonGroup>
            <ProfileButton onClick={handleClick}>
              <Avatar src={photoUrl || noProfile} alt={oneProfile?.name} />
              <UserInfo>
                <UserName>{oneProfile?.name}</UserName>
                <UserId>ID: {oneProfile?.userId || "12345"}</UserId>
              </UserInfo>
              <KeyboardArrowDownIcon sx={{marginBottom:0.2}} />
            </ProfileButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={triggerFileInput}>
                Change Profile Photo
              </MenuItem>
              <MenuItem onClick={handlePlans}>View Membership Plan</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            <StyledButton variant="outlined" onClick={handlePlans}>
              {getPlanName()}
            </StyledButton>
          </ButtonGroup>
        </StyledToolbar>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => {
            // Your image upload logic here
            handleClose();
          }}
        />
      </StyledAppBar>
    );
  };
  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
    navigate("/");
  };
  const handlePlans = () => {
    navigate("/plan");
  };
  useEffect(() => {
    console.log("..interestedProfiles after update..", interestedProfiles);
  }, [interestedProfiles]);

  return (
    <div>
      <Navbar
        logo={logo}
        oneProfile={oneProfile}
        handlePlans={handlePlans}
        triggerFileInput={triggerFileInput}
        photoUrl={photoUrl}
        noProfile={noProfile}
        handleLogout={handleLogout}
      />
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
                      <select
                        className="chosen-select"
                        value={religion}
                        onChange={(event) => setReligion(event.target.value)}
                      >
                        <option value="">Select Religion</option>
                        {ReligionOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
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
                        className="chosen-select"
                        value={caste}
                        onChange={(event) => setCaste(event.target.value)}
                      >
                        <option value="">Select Caste</option>
                        {casteOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="filt-com lhs-cate">
                    <h4>
                      <i className="fa fa-users" aria-hidden="true" />
                      Select Sub Caste
                    </h4>
                    <div className="form-group">
                      <select
                        className="chosen-select"
                        value={subcaste}
                        onChange={(event) => setSubCaste(event.target.value)}
                      >
                        {/* <option value="">Select Sub Caste</option> */}
                        {subCasteOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
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
                              <a
                                onClick={() =>
                                  handleProfileDetails(profile._id)
                                }
                              >
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
                                <a
                                  onClick={() =>
                                    handleProfileDetails(profile._id)
                                  }
                                >
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
                                  style={{
                                    cursor: "pointer",
                                    color: interestedProfiles.includes(
                                      profile._id
                                    )
                                      ? "red"
                                      : "black",
                                  }}
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
                              {/* <h6>{profile.plan || "free"}</h6> */}

                              {(() => {
                                switch (profile.plan) {
                                  case "100":
                                    return "Gold";
                                  case "200":
                                    return "Diamond";
                                  case "300":
                                    return "Platinum";
                                  default:
                                    return "";
                                }
                              })()}
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
                <strong style={{ color: "#FFBF0E" }}>Email:</strong>{" "}
                soulmatchinfo@gmail.com
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
                {/* All rights reserved. |{" "} */}
                {/* <a
                  style={{
                    cursor: "pointer",
                    color: "#FFBF00",
                    textDecoration: "none",
                  }}
                  onClick={() => navigate("/terms&conditions")}
                >
                  Terms and Conditions
                </a> */}
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

export default Profiles;
