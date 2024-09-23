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
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import axios from "axios";
import "../styles/profile.css";
import {
  ApartmentOutlined,
  AttributionOutlined,
  Cake,
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
  Height,
  Language,
  LocalBar,
  LocationOn,
  Person,
  Pets,
  Restaurant,
  School,
  SmokeFree,
  Verified,
  Wc,
  Work,
  X,
} from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import image1 from "../images/gallery/couple-1.jpg";
import image2 from "../images/gallery/couple-3.jpg";
import image3 from "../images/gallery/couple-6.png";
import image4 from "../images/gallery/couple-4.png";
import image5 from "../images/gallery/couple-5.png";
import image6 from "../images/gallery/couple-7.jpg";
import image7 from "../images/gallery/couple-8.jpg";
import image8 from "../images/gallery/couple-2.jpg";

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
  const [profileData, setprofileData] = useState([]);
  const location = useLocation();
  console.log(
    "...locationof response...",
    location.state.response.responseData ||
      location.state.response.data.map((value) => value._id)
  );
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const triggerFileInput = () => {
    // document.getElementById('fileInput').click();
    navigate("/user-profile");
  };

  useEffect(() => {
    // const idData  = location.state.response.responseData || location.state.response.data.map(value => value._id)
    const idData =
      location.state?.response?.responseData ||
      (Array.isArray(location.state?.response?.data)
        ? location.state.response.data.map((value) => value._id)
        : []);

    console.log("..iddata.", idData);
    axios
      .post(`${URL}/getIdProfile`, {
        ids: idData,
      })
      .then((response) => {
        console.log("..request...", response.data);
        setprofileData(response.data);
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
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const galleryPhotos = [
  //   [image1, image2, image3, image4],
  //   [image5, image6, image7, image8],
  //   [image3, image5, image1, image8],
  // ];

  const galleryPhotos = profileData.map(profile => profile.photoSection?.photoUrl || []);
  const currentGallery = galleryPhotos[currentIndex % galleryPhotos.length] || [];

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

  const persons = profileData;
  // const [currentIndex, setCurrentIndex] = useState(0);

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
     <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: 2 }}>
      <Card sx={{ width: '60%', borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="400"
            image={currentProfile.fileUpload}
            alt={currentProfile.name}
            sx={{ objectFit: 'cover' }}
          />
          <Box sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 16,
            padding: '4px 8px',
          }}>
            {currentProfile.verifyProfile && (
              <Verified color="primary" sx={{ mr: 1 }} />
            )}
            <Typography variant="body2" fontWeight="bold">
              ID: {currentProfile._id.substr(-6)}
            </Typography>
          </Box>
          <Box sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
              onClick={prevProfile}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
              onClick={nextProfile}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>
        <CardContent sx={{ padding: 3 }}>
          <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
            {currentProfile.name}, {currentProfile.age}
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>Basic Information</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Wc fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.gender}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.city || 'Not Available'}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Work fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.profession}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <School fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.heighestEduction}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Language fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.motherTongue}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CurrencyRupee fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.annualIncome}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Height fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.height}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Cake fontSize="small" color="action" sx={{ mr: 1 }} />
                <Typography variant="body2">{currentProfile.dateOfBirth}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item>
              <Chip icon={<Diversity3 fontSize="small" />} label={currentProfile.caste} />
            </Grid>
            <Grid item>
              <Chip icon={<ApartmentOutlined fontSize="small" />} label={currentProfile.subCaste} />
            </Grid>
            <Grid item>
              <Chip icon={<Restaurant fontSize="small" />} label={currentProfile.diet} />
            </Grid>
            <Grid item>
              <Chip icon={<LocalBar fontSize="small" />} label={currentProfile.alcohol} />
            </Grid>
            <Grid item>
              <Chip icon={<SmokeFree fontSize="small" />} label={currentProfile.smoke} />
            </Grid>
            <Grid item>
              <Chip icon={<Pets fontSize="small" />} label={currentProfile.petFriendly} />
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            <strong>About:</strong> {currentProfile.aboutYourSelf}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Family Information</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Family Type:</strong> {currentProfile.family_Type}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Father's Name:</strong> {currentProfile.FathersName}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Father's Profession:</strong> {currentProfile.Fathers_prof}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Mother's Name:</strong> {currentProfile.MothersName}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Mother's Profession:</strong> {currentProfile.Mothers_prof}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Sisters:</strong> {currentProfile.sisterName[0]}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Sister's Profession:</strong> {currentProfile.sisterProfession[0]}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Brothers:</strong> {currentProfile.brotherName[0]}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Brother's Profession:</strong> {currentProfile.brotherProfession[0]}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Partner Preferences</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Age Range:</strong> {currentProfile.Part_ageFrom}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Marital Status:</strong> {currentProfile.Part_martialStatus}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Religion:</strong> {currentProfile.Part_Religion}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Caste:</strong> {currentProfile.Part_Caste}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Mother Tongue:</strong> {currentProfile.Part_motherTongue}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Sub Caste:</strong> {currentProfile.Part_subCaste}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Height:</strong> {currentProfile.Part_height}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Education:</strong> {currentProfile.Part_heighestEduction}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Profession:</strong> {currentProfile.Part_profession}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Annual Income:</strong> {currentProfile.Part_annualIncome}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Diet:</strong> {currentProfile.Part_deit}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Alcohol:</strong> {currentProfile.Part_alcohol}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}><strong>Smoking:</strong> {currentProfile.Part_smoke}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Gallery</Typography>
          <Grid container spacing={2}>
            {currentGallery.map((photo, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <img 
                  src={photo} 
                  alt={`Gallery photo ${index + 1}`} 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
      <ToastContainer />
    </div>
  );
}

export default Interests;
