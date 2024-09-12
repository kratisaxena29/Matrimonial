import React, { useEffect, useState } from "react";
import mobileLogo from "../images/logo_maroon.png";
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  MenuItem,
  Button,
  styled,
  Avatar,
  Menu,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Card,
  Badge,
  CardContent,
} from "@mui/material";
import axios from "axios";
import "../styles/profile.css";
import { ChevronLeft, ChevronRight, Clear, Close, FavoriteBorder, HeartBroken, X } from "@mui/icons-material";

function Interests({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const [subcaste, setSubCaste] = useState("");
  const [oneProfile, setOneProfiles] = useState("");
  const [sendRequest, setSendRequest] = useState([]);
  const [interestSent, setInterestSent] = useState("");

  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_BASE_URL;
  const [requests, setRequests] = useState([]);

  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const triggerFileInput = () => {
    // document.getElementById('fileInput').click();
    navigate("/user-profile");
  };

  const handlegetImageUrl = async () => {
    console.log("...handleImageUrl....");
    const identifier = user.email ? user.email : user.phoneno;

    axios
      .get(`${URL}/getimagepath/${identifier}`)
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
  console.log("..check...", user.phoneno);

  useEffect(() => {
    let id = oneProfile._id;
    console.log("...id...", id);

    // Make the axios request without wrapping it inside a function
    axios
      .get(`${URL}/getAllRequestById/${id}`)
      .then((response) => {
        console.log("..request...", response.data);
        // Update state with the response data (uncomment this when you're ready to use it)
        // setProfiles(response.data.response);
        const fetchedRequests = response.data.data.map((item) => ({
          _id: item._id,
          name: item.name,
          photo: item.fileUpload, // Assuming fileUpload is the image URL
        }));
        setRequests(fetchedRequests);
      })
      .catch((error) => {
        console.log("...error...", error);
      });

    // No need to call request() since axios.get() is already executed
  }, [oneProfile._id]); // Assuming oneProfile._id is the dependency

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
    let identifier = user.email ? user.email : user.phoneno;
    axios
      .get(`${URL}/oneProfileByEmail/${identifier}`)
      .then((response) => {
        console.log("..response...", response.data);
        setOneProfiles(response.data);
      })
      .catch((error) => {
        console.log("...error...", error);
      });
  }, []);
  console.log("...krati...", oneProfile);

  useEffect(() => {
    const identifier = user.email ? user.email : user.phoneno;
    axios
      .get(`${URL}/getSendRequestIds/${identifier}`)
      .then((response) => {
        const sendResponse = response.data.data.AllprofilesId;
        console.log("...sendResponse..", sendResponse);
        setInterestSent(sendResponse);
      })
      .catch((error) => {
        console.log("Error fetching photos:", error);
      });
  }, [URL, user.email, user.phoneno]);

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
    height: "52px",
  });

  const ButtonGroup = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "16px",
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "#F68C1E",
    borderRadius: "8px",
    padding: "13px 15px",
    fontSize: "14px",

    "&:hover": {
      backgroundColor: "#E57D0F",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      padding: "16px 10px",
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
    color: "white",
  });

  const UserId = styled(Typography)({
    fontSize: "0.75rem",
    marginRight: 6,
    // opacity: 0.8,
    color: "white",
  });

  const Navbar = ({
    logo,
    oneProfile,
    handlePlans,
    handleChat,
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
        case "69900":
          return "Gold";
        case "99900":
          return "Diamond";
        case "139900":
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
                {/* <UserId>ID: {oneProfile?.userId || "12345"}</UserId> */}
              </UserInfo>
              <KeyboardArrowDownIcon sx={{ marginBottom: 0.2 }} />
            </ProfileButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={triggerFileInput}>Edit Your Profile</MenuItem>
              <MenuItem onClick={handlePlans}>View Membership Plan</MenuItem>
              <MenuItem onClick={handleChat}>Chat</MenuItem>
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
  const handleChat = () => {
    navigate("/chat");
  };
  useEffect(() => {
    console.log("..interestedProfiles after update..", interestedProfiles);
  }, [interestedProfiles]);
  const isMobile = useMediaQuery("(max-width:600px)");

  const persons = [
    {
      id: "YRST8794",
      name: "Priya Sharma",
      age: 28,
      location: "Gurgaon, India",
      profession: "Software Engineer",
      education: "Master's in Computer Science",
      height: "5'5\"",
      religion: "Hindu",
      caste: "Khatri Sood",
      motherTongue: "Punjabi",
      income: "Rs. 7.5 - 10 Lakh per Annum",
      maritalStatus: "Never Married",
      matchPercentage: 82,
      about:
        "Looking for a companion for life to share everything and anything! Originally from Hoshiarpur in Punjab but born and brought up in Kolkata. I've done my schooling from Pratt Memorial School and Master's in English from Calcutta University.",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: "YRST8794",
      name: "Vineet Vashist",
      age: 22,
      location: "Mohali, India",
      profession: "Frontend Developer",
      education: "Bachelor's in Computer Science",
      height: "5'9\"",
      religion: "Hindu",
      caste: "Brahmin",
      motherTongue: "Punjabi",
      income: "Rs. 7.5 - 10 Lakh per Annum",
      maritalStatus: "Never Married",
      matchPercentage: 82,
      about:
        "Looking for a companion for life to share everything and anything! Originally from Hoshiarpur in Punjab but born and brought up in Kolkata. I've done my schooling from Pratt Memorial School and Master's in English from Calcutta University.",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: "YRST8794",
      name: "Aneesh Kapoor",
      age: 25,
      location: "Toronto, Canada",
      profession: "HR",
      education: "MBA",
      height: "5'5\"",
      religion: "Punjabi",
      caste: "Kaur",
      motherTongue: "Punjabi",
      income: "Rs. 7.5 - 10 Lakh per Annum",
      maritalStatus: "Never Married",
      matchPercentage: 82,
      about:
        "Looking for a companion for life to share everything and anything! Originally from Hoshiarpur in Punjab but born and brought up in Kolkata. I've done my schooling from Pratt Memorial School and Master's in English from Calcutta University.",
      imageUrl: "/api/placeholder/400/500",
    },
    // Add more profile objects here...
  ];
  const [currentProfile, setCurrentProfile] = useState(0);

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % persons.length);
  };

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev - 1 + persons.length) % persons.length);
  };

  const profile = persons[currentProfile];
  return (
    <div>
      <Navbar
        logo={isMobile ? mobileLogo : logo}
        oneProfile={oneProfile}
        handlePlans={handlePlans}
        handleChat={handleChat}
        triggerFileInput={triggerFileInput}
        photoUrl={photoUrl}
        noProfile={noProfile}
        handleLogout={handleLogout}
      />
      <div>
        
      <div>
      <Card>
        <>
          <img
            src={noProfile}
            alt={profile.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
            <Badge variant="secondary" className="text-sm font-semibold">
              {profile.matchPercentage}% Match
            </Badge>
          </div>
          <Button
            variant="ghost"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1"
            onClick={prevProfile}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="ghost"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1"
            onClick={nextProfile}
          >
            <ChevronRight size={20} />
          </Button>
        </>
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}, {profile.age}</h2>
            <p className="text-sm text-gray-600">{profile.location}</p>
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <Button variant="outline" className="text-xs bg-pink-100 text-pink-600 hover:bg-pink-200 border-pink-300">
              <FavoriteBorder className="mr-1 h-3 w-3" /> Interest
            </Button>
            <Button variant="outline" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-300">
              <Clear className="mr-1 h-3 w-3" /> Decline
            </Button>
          </div>
          <div className="space-y-2 mb-4">
            <p className="text-center text-sm"><span className="font-semibold">Profession:</span> {profile.profession}</p>
            <p className="text-center text-sm"><span className="font-semibold">Education:</span> {profile.education}</p>
            <p className="text-center text-sm"><span className="font-semibold">Religion:</span> {profile.religion}</p>
            <p className="text-center text-sm"><span className="font-semibold">Mother Tongue:</span> {profile.motherTongue}</p>
          </div>
          <p className="text-xs text-gray-600 text-center italic line-clamp-3">{profile.about}</p>
        </CardContent>
      </Card>
    </div>
            </div>
          {/* </div> */}
      <ToastContainer />
    </div>
  );
}

export default Interests;
