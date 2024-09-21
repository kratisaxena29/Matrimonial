import React, { useEffect, useState } from "react";
import mobileLogo from "../images/logo_maroon.png";
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
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
  CardMedia,
  IconButton,
  Chip,
  Fade,
  Grow,
  Slide,
  useTheme,
} from "@mui/material";
import axios from "axios";
import "../styles/profile.css";
import {
  AttributionOutlined,
  Cancel,
  CancelOutlined,
  ChevronLeft,
  ChevronRight,
  Clear,
  Close,
  CurrencyRupee,
  CurrencyRupeeOutlined,
  Diversity3,
  Diversity3Outlined,
  Favorite,
  FavoriteBorder,
  HeartBroken,
  Language,
  LocationOn,
  Person,
  School,
  Work,
  X,
} from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import image1 from "../images/gallery/couple-1.jpg";
import image2 from "../images/gallery/couple-3.jpg";
import image3 from "../images/gallery/couple-6.png";

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
  const [interestSent, setInterestSent] = useState("");

  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_BASE_URL;
  const [requests, setRequests] = useState([]);
  const [profileData , setprofileData] = useState([]);
  const location = useLocation()
  console.log("...locationof response...", location.state.response.responseData || location.state.response.data.map(value => value._id))
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
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);




  useEffect(() => {
// const idData  = location.state.response.responseData || location.state.response.data.map(value => value._id)
const idData = 
location.state?.response?.responseData || 
(Array.isArray(location.state?.response?.data) ? location.state.response.data.map(value => value._id) : []);

console.log("..iddata.",idData)
    axios
      .post(`${URL}/getIdProfile`, {
        "ids": idData
      })
      .then((response) => {
        console.log("..request...", response.data);
        setprofileData(response.data)

      })
      .catch((error) => {
        console.log("...error...", error);
      });

    // No need to call request() since axios.get() is already executed
  }, [oneProfile._id]); // Assuming oneProfile._id is the dependency








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
  //   const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // [
  //   {
  //     id: "YRST8795",
  //     name: "Priya Sharma",
  //     age: 28,
  //     location: "Gurgaon, India",
  //     profession: "Software Engineer",
  //     education: "Master's in Computer Science",
  //     height: "5'10\"",
  //     religion: "Hindu",
  //     caste: "Khatri Sood",
  //     motherTongue: "Punjabi",
  //     income: "7.5 LPA",
  //     maritalStatus: "Never Married",
  //     matchPercentage: 82,
  //     about:
  //       "Looking for a companion for life to share everything and anything! Originally from Hoshiarpur in Punjab but born and brought up in Kolkata.",
  //     imageUrl: image1,
  //   },
  //   {
  //     id: "YRST8794",
  //     name: "Vineet Vashist",
  //     age: 22,
  //     location: "Mohali, India",
  //     profession: "Frontend Developer",
  //     education: "Bachelors in Computer Science",
  //     height: "5'9\"",
  //     religion: "Hindu",
  //     caste: "Brahmin",
  //     motherTongue: "Punjabi",
  //     income: "10 LPA",
  //     maritalStatus: "Never Married",
  //     matchPercentage: 90,
  //     about:
  //       "Working in a startup company as Frontend Developer and UI/UX Designer. Developed and Designed websites and apps for varous projects",
  //     imageUrl: image2,
  //   },
  //   {
  //     id: "YRST8796",
  //     name: "Aneesh Kapoor",
  //     age: 25,
  //     location: "Toronto, Canada",
  //     profession: "HR",
  //     education: "MBA",
  //     height: "5'5\"",
  //     religion: "Punjabi",
  //     caste: "Kaur",
  //     motherTongue: "Punjabi",
  //     income: "15 LPA",
  //     maritalStatus: "Never Married",
  //     matchPercentage: 75,
  //     about:
  //       "Worked in TCS for 2 year as Full stack developer. I have build websites and application using technologies like Angular, Spring Boot. I also Worked on AWS and Python",
  //     imageUrl: image3,
  //   },
  //   // Add more profile objects here...
  // ];

  useEffect(() => {
    let identifier = user.email ? user.email : user.phoneno;
    axios
      .get(`${URL}/oneProfileByEmail/${identifier}`)
      .then((response) => {
        console.log("..check response...", response.data);
        setOneProfiles(response.data);
      })
      .catch((error) => {
        console.log("...error...", error);
      });
  }, []);

  const persons = profileData
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % persons.length);
  };

  const prevProfile = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + persons.length) % persons.length
    );
  };

  const currentProfile = persons[currentIndex];

  if (!currentProfile) {
    return <div>No profiles available</div>;
  }

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
      <Card
        sx={{
          maxWidth: "100%",
          width: isMobile ? "100%" : "80%",
          margin: "40px auto",
          borderRadius: 4,
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height={isMobile ? "300px" : "500px"}
              image={currentProfile.fileUpload} // Updated to use dynamic image URL
              alt={currentProfile.name}
              sx={{ objectFit: "cover" }}
            />

            {/* <Chip
              label={`${currentProfile.matchPercentage}% Match`}
              size="medium"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "8px",
                color: "white",
                backgroundColor: "#D8465C",
                "& .MuiChip-label": {
                  color: "white",
                },
              }}
            /> */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
                }}
                onClick={prevProfile}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
                }}
                onClick={nextProfile}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                >
                  {currentProfile.name}, {currentProfile.age}
                </Typography>
                <Grid container spacing={3} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOn
                        fontSize="medium"
                        color="action"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body1">
                        {currentProfile.city || currentProfile.country || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Person fontSize="medium" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {currentProfile.martialStatus || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Work fontSize="medium" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {currentProfile.profession || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <School fontSize="medium" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {currentProfile.heighestEduction || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Diversity3
                        fontSize="medium"
                        color="action"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body1">
                        {currentProfile.caste || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Language
                        fontSize="medium"
                        color="action"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body1">
                        {currentProfile.motherTongue || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CurrencyRupeeOutlined
                        fontSize="medium"
                        color="action"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body1">
                        {currentProfile.annualIncome || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AttributionOutlined
                        fontSize="medium"
                        color="action"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body1">
                        {currentProfile.height || "Not Available"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                >
                  {currentProfile.aboutYourSelf || "Not Available"}
                </Typography>
              </Box>
              {/* <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
              >
                <Button
                  variant={hover ? "contained" : "outlined"} // Switch between contained and outlined based on hover
                  startIcon={
                    hover ? (
                      <Favorite sx={{ color: "white" }} />
                    ) : (
                      <FavoriteBorder sx={{ color: "#D8465C" }} />
                    )
                  }
                  sx={{
                    flex: 1,
                    mr: 2,
                    borderRadius: 8,
                    padding: "12px 24px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                    backgroundColor: hover ? "#D8465C" : "transparent", // Change background color on hover
                    color: hover ? "white" : "#D8465C", // Change text color on hover
                    borderColor: "#D8465C", // Border color for outlined variant
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: theme.shadows[8],
                      backgroundColor: "#D8465C", // Ensure background stays the same on hover
                    },
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Interest
                </Button>

                <Button
                  variant={hover2 ? "contained" : "outlined"} // Switch between contained and outlined based on hover
                  startIcon={
                    hover2 ? (
                      <Cancel sx={{ color: "white" }} />
                    ) : (
                      <CancelOutlined sx={{ color: "red" }} />
                    )
                  }
                  sx={{
                    flex: 1,
                    ml: 2,
                    borderRadius: 8,
                    padding: "12px 24px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                    backgroundColor: hover2 ? "#DC143C" : "transparent", // Change background color on hover
                    color: hover2 ? "white" : "red", // Change text color on hover
                    borderColor: "red", // Border color for outlined variant
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: theme.shadows[4],
                      backgroundColor: "red", // Ensure background stays red on hover
                    },
                  }}
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
                >
                  Decline
                </Button>
              </Box> */}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
}

export default Interests;
