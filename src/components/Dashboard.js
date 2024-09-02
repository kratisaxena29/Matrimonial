import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import mobileLogo from "../images/logo_maroon.png";
import noProfile from "../images/profiles/noProfile.jpg";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Box,
  ListItemText,
  ListItem,
  Paper,
  List,
  Tabs,
  Grid,
  useMediaQuery,
  styled,
  Card,
  CardContent,
  Avatar,
  CardActions,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { Tab } from "bootstrap";
import { useNavigate } from "react-router-dom";
import { Cancel, CheckCircle, Verified, Visibility } from "@mui/icons-material";


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ScrollableBox = styled(Box)({
  maxHeight: 440,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0.3em'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey'
  }
});
function Dashboard({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
 const [registration,setRegistration] = useState("")
 const [monthlyUser,setMonthlyUser] = useState([])
  const [numberOfProfiles, setNumberOfProfiles] = useState(0);
  const [active, setactive] = useState("");
  const [isVerified, setIsVerified] = useState(false);


//   const navigate = useNavigate();
const isMobile = useMediaQuery('(max-width:600px)');
const [verifiedProfiles, setVerifiedProfiles] = useState({});
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate()
  console.log("..user...", user);
//   console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const URL = process.env.REACT_APP_API_BASE_URL;
  const Sidebar = () => (
    <Box sx={{ width: 240, flexShrink: 0 }}>
      <List>
        {['Dashboard', 'User Management', 'Profile Verification', 'Matches', 'Payments', 'Reports', 'Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleVerify = async (profileId) => {
    console.log("Verify button clicked for profile:", profileId);
    try {
      const response = await axios.get(`${URL}/verify-profile/${profileId}`);
      console.log("Profile verification updated:", response.data);
      
      // Update the verified status for this profile
      setVerifiedProfiles(prev => ({...prev, [profileId]: true}));

      // Update the profiles state to reflect the verified status
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile._id === profileId
            ? { ...profile, verifyProfile: true }
            : profile
        )
      );
    } catch (error) {
      console.error("Error verifying profile:", error);
    }
  };


const handleReject = async(profileId) => {
  console.log("Reject button clicked for profile:", profileId);
  try {
    const response = await axios.delete(`${URL}/deleteProfile/${profileId}`);
    console.log("Profile deleted:", response.data);

    // Remove the rejected profile from the state
    setProfiles((prevProfiles) => prevProfiles.filter(profile => profile._id !== profileId));

  } catch (error) {
    console.error("Error verifying profile:", error);
  }
};

  
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${URL}/getNoOfProfiles`);
        console.log("...response...",response)
        setProfiles(response.data.profiles); // Set the profiles data in state
        setNumberOfProfiles(response.data.numberOfProfiles); // Set the number of profiles in state
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await axios.get(`${URL}/Today-registration`);
        console.log("...fetchRegistration...",response.data.count)
        setRegistration(response.data.count)
        // setProfiles(response.data.profiles); // Set the profiles data in state
        // setNumberOfProfiles(response.data.numberOfProfiles); // Set the number of profiles in state
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchRegistration();
  }, []);

  useEffect(() => {
    const fetchActive = async () => {
      try {
        const response = await axios.get(`${URL}/active-subscription`);
        console.log("...fetchactive...",response.data.ActiveSub)
        setactive(response.data)
        // setProfiles(response.data.profiles); // Set the profiles data in state
        // setNumberOfProfiles(response.data.numberOfProfiles); // Set the number of profiles in state
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchActive();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/getMonthlyUserCount`); // Replace with your API endpoint
        const data = response.data;

        // Map the data to ensure all months are represented
        const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const mappedData = allMonths.map(month => {
          const found = data.find(item => item.month === month);
          return {
            month,
            count: found ? found.count : 0,
            year: found ? found.year : "No Year" // Include year here
          };
        });

        setMonthlyUser(mappedData);
      } catch (error) {
        console.error("Error fetching activity data", error);
      }
    };

    fetchData();
  }, []);



  const NewProfiles = () => (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>
        All Profiles
      </Typography>
      <ScrollableBox>
        <Grid container spacing={2}>
          {profiles.map((profile) => (
            <Grid item xs={12} key={profile._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{ marginRight: 2, pb: "1px", textAlign: "center" }}
                    >
                      {profile.name ? profile.name[0] : "U"}
                    </Avatar>
                    <Typography variant="subtitle1">
                      {profile.name || "No Name"}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<Visibility />}
                    onClick={() => handleProfileDetails(profile._id)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ScrollableBox>
    </StyledPaper>
  );
  
  // const UserManagement = () => (
  //   <Paper sx={{ p: 2, mb: 3 }}>
  //     <Typography variant="h6" sx={{ mb: 2 }}>User Management</Typography>
  //     <List>
  //       {['Approve Users', 'Suspend Users', 'Delete Users', 'Edit User Profiles'].map((action) => (
  //         <ListItem button key={action}>
  //           <ListItemText primary={action} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Paper>
  // );
  
  const VerificationRequests = () => (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>
        Verification Requests
      </Typography>
      <ScrollableBox>
        <List>
          {profiles.map((profile, index) => (
            <React.Fragment key={profile._id}>
              <ListItem>
                <ListItemText
                  primary={profile.name}
                  secondary={`Status: ${
                    profile.verifyProfile || verifiedProfiles[profile._id]
                      ? "Verified"
                      : "Pending"
                  }`}
                />
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        color: "white",
                        backgroundColor:
                          profile.verifyProfile || verifiedProfiles[profile._id]
                            ? "#4CAF50"
                            : "#FFA500",
                        fontSize: "12px",
                      },
                    },
                  }}
                  title={
                    profile.verifyProfile || verifiedProfiles[profile._id]
                      ? "Verified"
                      : "Verify"
                  }
                  placement="top"
                  arrow
                >
                  <IconButton
                    color={
                      profile.verifyProfile || verifiedProfiles[profile._id]
                        ? "success"
                        : "warning"
                    }
                    onClick={() => handleVerify(profile._id)}
                  >
                    {profile.verifyProfile || verifiedProfiles[profile._id] ? (
                      <Verified />
                    ) : (
                      <NewReleasesIcon />
                    )}
                  </IconButton>
                </Tooltip>
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        color: "white",
                        backgroundColor: "red",
                        fontSize: "12px",
                      },
                    },
                  }}
                  title="Reject"
                  placement="top"
                  arrow
                >
                  <IconButton
                    color="error"
                    onClick={() => handleReject(profile._id)}
                  >
                    <Cancel />
                  </IconButton>
                </Tooltip>
              </ListItem>
              {index < profiles.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </ScrollableBox>
    </StyledPaper>
  );
  
  const Statistics = () => (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>Statistics</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Total Users" secondary={numberOfProfiles} />
        </ListItem>
        <ListItem>
          <ListItemText primary="New Registrations (Today)" secondary={registration} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Active Subscriptions" secondary={active.ActiveSub} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gold Subscriptions" secondary={active.plan100} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Diamond Subscriptions" secondary={active.plan200} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Platinum Subscriptions" secondary={active.plan300} />
        </ListItem>
      </List>
    </StyledPaper>
  );
  
  
  const RecentActivity = () => (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>Monthly Activity</Typography>
      <ScrollableBox>
        <List>
          {monthlyUser.map((activity) => (
            <ListItem key={activity.month}>
              <ListItemText 
                primary={`${activity.month} - ${activity.count} registrations (${activity.year})`} 
                secondary={activity.count > 0 ? "Recently active" : "No activity"} 
              />
            </ListItem>
          ))}
        </List>
      </ScrollableBox>
    </StyledPaper>
  );

  const handleChat = async () => {
    try {
      const payload = {
        AllprofilesId: interestedProfiles,
      };

      // Add email or phoneno to the payload based on available user data
      if (user.email) {
        // payload.email = user.email;
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
    //   navigate("/chat");
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
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    fatherOccupation: "",
    motherOccupation: "",
    familyType: "",
    highestEducation: "",
    occupation: "",
    annualIncome: "",
    diet: "",
    smoking: false,
    drinking: false,
    ageRange: "",
    heightRange: "",
    aboutMe: "",
  });

  useEffect(() => {
    // Fetch profile data from API
    // For now, we'll use dummy data
    const dummyData = {
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      gender: "male",
      maritalStatus: "never_married",
      religion: "hindu",
      caste: "brahmin",
      fatherOccupation: "Business",
      motherOccupation: "Homemaker",
      familyType: "nuclear",
      highestEducation: "masters",
      occupation: "Software Engineer",
      annualIncome: "100000",
      diet: "non_veg",
      smoking: false,
      drinking: false,
      ageRange: "25-30",
      heightRange: "5'5\" - 5'10\"",
      aboutMe: "I'm a software engineer looking for a life partner.",
    };
    setProfileData(dummyData);
  }, []);

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData({
      ...profileData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit updated profile data to API
  //   console.log("Updated profile data:", profileData);
  //   setIsEditMode(false);
  // };

  // const renderField = (label, value, name, type = "text", options = []) => {
  //   if (isEditMode) {
  //     switch (type) {
  //       case "select":
  //         return (
  //           <TextField
  //             fullWidth
  //             select
  //             label={label}
  //             variant="outlined"
  //             name={name}
  //             value={value}
  //             onChange={handleInputChange}
  //           >
  //             {options.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //         );
  //       case "radio":
  //         return (
  //           <FormControl component="fieldset">
  //             <RadioGroup
  //               row
  //               aria-label={name}
  //               name={name}
  //               value={value}
  //               onChange={handleInputChange}
  //             >
  //               {options.map((option) => (
  //                 <FormControlLabel
  //                   key={option.value}
  //                   value={option.value}
  //                   control={<Radio />}
  //                   label={option.label}
  //                 />
  //               ))}
  //             </RadioGroup>
  //           </FormControl>
  //         );
  //       case "checkbox":
  //         return (
  //           <FormControlLabel
  //             control={
  //               <Checkbox
  //                 checked={value}
  //                 onChange={handleInputChange}
  //                 name={name}
  //               />
  //             }
  //             label={label}
  //           />
  //         );
  //       case "textarea":
  //         return (
  //           <TextField
  //             fullWidth
  //             multiline
  //             rows={4}
  //             label={label}
  //             variant="outlined"
  //             name={name}
  //             value={value}
  //             onChange={handleInputChange}
  //           />
  //         );
  //       default:
  //         return (
  //           <TextField
  //             fullWidth
  //             label={label}
  //             variant="outlined"
  //             name={name}
  //             value={value}
  //             onChange={handleInputChange}
  //             type={type}
  //           />
  //         );
  //     }
  //   } else {
  //     return (
  //       <Typography variant="body1">
  //         <strong>{label}:</strong> {value}
  //       </Typography>
  //     );
  //   }
  // };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };


  const handleProfileDetails = async (profileId) => {
    console.log("...handleProfileDetails for profileId...", profileId);
    navigate("/dashboard-profiles",{
      state: {
        _id : profileId
      }
    })
    // navigate("/PersonDetails", { state: { profileId } });
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
    // navigate("/");
  };
  const handlePlans = () => {
    // navigate("/plan");
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
        
        <img src={isMobile ? mobileLogo : logo} alt="Logo" style={{ height: "60px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid",
              borderColor: "#F68C1E",
              "&:hover": {
                backgroundColor: "#E57D0F",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={() => {
              handlePlans();
            }}
          >
            Plans
          </Button> */}
          
          {/* <div
            onClick={triggerFileInput}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Uploaded Profile"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            ) : (
              <img
                src={noProfile}
                alt="Default Profile"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            )}
          </div> */}
          <h5  style={{color : "white", marginBottom:0}}>Admin</h5 >
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
        </div>
      </nav>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Admin Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <NewProfiles />
            </Grid>
            <Grid item xs={12}>
              <VerificationRequests />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Statistics />
            </Grid>
            <Grid item xs={12}>
              <RecentActivity />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>

    <section>
        <div className="cr">
          <div className="container">
            <div className="footer-content">
              <p style={{ textAlign: "center", fontSize: "18px" }}>
                Copyright © <span id="cry">2024</span>{" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#FFBF00",
                  }}
                  href="#!"
                  target="_blank"
                >
                  SoulMatch
                </a>{" "}
                All rights reserved.
              </p>
              <p style={{ fontSize: "20px" }}>
                <strong>Contact Us: </strong>
                <a
                  href="mailto:soulmatchinfo@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "#FFBF0E",
                  }}
                >
                  soulmatchinfo@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
