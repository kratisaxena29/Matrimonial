import React, { lazy, useEffect, useState } from "react";
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import EditIcon from '@mui/icons-material/Edit';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

import { useLocation, useNavigate } from "react-router-dom";
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
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import mobileLogo from "../images/logo_maroon.png";

function DashboardProfiles({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');



  const URL = process.env.REACT_APP_API_BASE_URL;



  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    _id: "",
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

  const location = useLocation()
  console.log("...id..",location.state._id)


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
console.log("...profileData...",profileData.dateOfBirth)
  const handleSubmit = (e) => {

  };

  const [gallery, setGallery] = useState([]);
console.log("...gallery...",gallery)
  const handleGalleryUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGallery([...gallery, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
  formData.append("file", file);


  };

 

  const removePhoto = async (index) => {
    console.log("...removePhoto...", index);
    
    // Assuming gallery is an array of photo URLs
    const photoToDelete = gallery[index];
    // const profileIdentifier = user.email || user.phoneno; // Replace with actual user data
  console.log("...profile...",profileData)
    const profileIdentifier = profileData.email || profileData.phoneNo
    try {
      // Make an API call to delete the photo from the server
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/deletephotosByEmailOrPhoneNo/${profileIdentifier}`,
        { photoToDelete: photoToDelete }, // Request body
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      // Check if the API call was successful
      if (response.status === 200) {
        console.log('Photo deleted successfully:', response.data);
        
        // Remove the photo from the gallery in the frontend
        setGallery(gallery.filter((_, i) => i !== index));
      } else {
        console.error('Failed to delete photo:', response.data.message);
      }
    } catch (error) {
      console.error('Error during photo deletion:', error);
    }
  };
  useEffect(() => {
    axios(`${URL}/profile/${location.state._id}`)
    .then(response => {
        console.log("...response..profile..",response.data)
        setProfileData(response.data)
        setPhotoUrl(response.data.fileUpload)

    })
    .catch(error => {
                    console.log("...error...", error);
                  });
  },[])
  
// console.log("...check..",profileData)

  useEffect(() => {
    console.log("...profile photo..",profileData._id)
    axios.get(`${URL}/getphotosById/${profileData._id}`)
    .then(response => {
      console.log("..user profile response...", response.data);
      const photos = response.data.photoUrl
      
      setGallery(photos);
    })
    .catch(error => {
      console.log("...error...", error);
    });
   
  }, [profileData]);

  const renderField = (label, value, name, type = "text", options = []) => {
    if (isEditMode) {
      switch (type) {
        case "select":
          return (
            <TextField
              fullWidth
              select
              label={label}
              variant="outlined"
              name={name}
              value={value}
              onChange={handleInputChange}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          );
        case "radio":
          return (
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label={name}
                name={name}
                value={value}
                onChange={handleInputChange}
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          );
        case "checkbox":
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={handleInputChange}
                  name={name}
                />
              }
              label={label}
            />
          );
        case "textarea":
          return (
            <TextField
              fullWidth
              multiline
              rows={4}
              label={label}
              variant="outlined"
              name={name}
              value={value}
              onChange={handleInputChange}
            />
          );
        default:
          return (
            <TextField
              fullWidth
              label={label}
              variant="outlined"
              name={name}
              value={value}
              onChange={handleInputChange}
              type={type}
            />
          );
      }
    } else {
      return (
        <Typography variant="body1">
          <strong>{label}:</strong> {value}
        </Typography>
      );
    }
  };
  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      uploadImageToServer(file);
    }
  };

 

  const uploadImageToServer = async (file) => {
    console.log("...upload image...");

    const formData = new FormData();
    formData.append("image", file);

    
 
  };

  

  const handlegetImageUrl = async () => {
    console.log("...handleImageUrl....")
 
    
  };

  useEffect(() => {
    handlegetImageUrl();
  }, []);





  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
    navigate("/");
  };
  // const handlePlans = () => {
  //   navigate("/plan");
  // };
 
 
  
  const handleLogo = () => {
    navigate('/profiles')
  }

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

        <img onClick={handleLogo} src={isMobile ? mobileLogo : logo} alt="Logo" style={{ height: "60px" }} />
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
      <section className="profile-header">
        <div className="profile-image-container">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={uploadImage}
          />
          <div
            // onClick={triggerFileInput}
            style={{
              position: "relative",
              height: "100px",
              width: "100px",
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
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            ) : (
              <img
                src={noProfile}
                alt="Default Profile"
                style={{ height: "140%", width: "140%", objectFit: "contain" }}
              />
            )}
            {/* <div className="edit-icon">
              <EditIcon style={{ color: "#fff", fontSize: "15px" }} />
            </div> */}
          </div>
        </div>
        <div className="profile-name">
          <h2>{profileData.name}</h2>
        </div>
      </section>

      <section>
        <div className="login pro-edit-update">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="rhs">
                  <div className="form-login">
                    <form onSubmit={handleSubmit}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                      >
                        <Typography variant="h4">User Profile</Typography>
                        {/* <Button
                          variant="contained"
                          onClick={handleEditToggle}
                          sx={{
                            backgroundColor: "#FB6A6B",
                            "&:hover": {
                              backgroundColor: "#FB6A6B",
                            },
                          }}
                        >
                          {isEditMode ? "Cancel" : "Edit Profile"}
                        </Button> */}
                      </Box>

                      {/* Basic Information */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic Information</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Full Name",
                            profileData.name,
                            "fullName"
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Contact Detail",
                            profileData.email || profileData.phoneNo,
                            "Contact Detail"
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Date of Birth",
                            profileData.dateOfBirth,
                            "dateOfBirth",
                            // "date"
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Gender",
                            profileData.gender,
                            "gender",
                            // "radio",
                            [
                              { value: "female", label: "Female" },
                              { value: "male", label: "Male" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Marital Status",
                            profileData.martialStatus,
                            "maritalStatus",
                            "select",
                            [
                              {
                                value: "Never Married",
                                label: "Never Married",
                              },
                              { value: "Divorced", label: "Divorced" },
                              { value: "Widowed", label: "Widowed" },
                              {
                                value: "Awaiting Divorce",
                                label: "Awaiting Divorce",
                              },
                              { value: "Annulled", label: "Annulled" },
                            ]
                          )}
                        </div>
                      </div>

                      {/* Religious Information */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Religious Information</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Religion",
                            profileData.religion,
                            "religion",
                            "select",
                            [
                              { value: "Hindu", label: "Hindu" },
                              { value: "Muslim", label: "Muslim" },
                              { value: "Christian", label: "Christian" },
                              { value: "Sikh", label: "Sikh" },
                              { value: "Buddhist", label: "Buddhist" },
                              { value: "Jain", label: "Jain" },
                              { value: "Bahai", label: "Bahai" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Caste",
                            profileData.caste,
                            "caste",
                            "select",
                            [
                              { value: "Agarwal", label: "Agarwal" },
                              { value: "Kanyakubj", label: "Kanyakubj" },
                              { value: "Brahmin", label: "Brahmin" },
                              { value: "Gaur Brahmin", label: "Gaur Brahmin" },
                              { value: "Brahmin", label: "Brahmin" },
                              { value: "Jat", label: "Jat" },
                              { value: "Jain", label: "Jain" },
                              { value: "Maheshwari", label: "Maheshwari" },
                              { value: "Kayastha", label: "Kayastha" },
                              { value: "Khatri", label: "Khatri" },
                              { value: "Kshatriya", label: "Kshatriya" },
                              { value: "Maratha", label: "Maratha" },
                              { value: "Rajput", label: "Rajput" },
                              { value: "Sindhi", label: "Sindhi" },
                              { value: "Sunni", label: "Sunni" },
                              { value: "Oberoi", label: "Oberoi" },
                              { value: "Arora", label: "Arora" },
                              { value: "Shwetamber", label: "Shwetamber" },
                              { value: "Yadav", label: "Yadav" },
                              { value: "Bania", label: "Bania" },
                              { value: "Digamber", label: "Digamber" },
                              { value: "Sikh Jat", label: "Sikh Jat" },
                              { value: "Gupta", label: "Gupta" },
                              {
                                value: "Scheduled Tribes",
                                label: "Scheduled Tribes",
                              },
                              { value: "Tei", label: "Tei" },
                              { value: "Vaishnav", label: "Vaishnav" },
                              {
                                value: "Kurmi kshatriya",
                                label: "Kurmi kshatriya",
                              },
                              { value: "Other", label: "Other" },
                            ]
                          )}
                        </div>
                      </div>

                      {/* Family Details */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Family Details</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Father's Occupation",
                            profileData.Fathers_prof || "Not Available",
                            "fatherOccupation",
                            
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Mother's Occupation",
                            profileData.Mothers_prof || "Not Available",
                            "motherOccupation",
                            
                            
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Family Type",
                            profileData.family_Type || "Not Available",
                            "familyType",
                            
                          )}
                        </div>
                      </div>

                      {/* Education and Career */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Education and Career</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Highest Education",
                            profileData.heighestEduction || "Not Available" ,
                            "highestEducation",
                           
                          )}
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            {renderField(
                              "Profession",
                              profileData.profession || "Not Available",
                            //   "occupation",
                            //   "select",
                            //   ProfessionOption
                            )}
                          </div>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Annual Income",
                            profileData.annualIncome,
                            "annualIncome",
                            
                            
                          )}
                        </div>
                      </div>

                      {/* Lifestyle */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Lifestyle</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Diet",
                            profileData.diet,
                            "diet",
                           
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Smoking",
                            profileData.smoke,
                            "smoking",
                          )}
                          
                          
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Drinking",
                            profileData.drink || "Not Available",
                            "drinking",
                          
                          )}
                        </div>
                      </div>

                      {/* Partner Preferences */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Partner Preferences</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Age Range",
                            profileData.Part_ageFrom ||  "Not Available",
                            "ageRange",
                           
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Height Range",
                            profileData.Part_height || "Not Available",
                            "heightRange",
                           
                          )}
                        </div>
                      </div>

                      {/* About Me */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>About Me</h4>
                        </div>
                        <div className="form-group">
                          {renderField (
                             "About",
                            profileData.aboutYourSelf ||  "Not Available",
                            // "aboutMe",
                            // "textarea"
                          )}
                        </div>
                      </div>

                      {/* {isEditMode && (
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            mt: 4,
                            mb: 2,
                            width: 150,
                            height: 40,
                            textTransform: "inherit",
                            fontSize: "18px",
                            backgroundColor: "#FB6A6B",
                            "&:hover": {
                              backgroundColor: "#FB6A6B",
                            },
                          }}
                        >
                          Save
                        </Button>
                      )} */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, borderRadius: 2, marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px",
          color: "#76001C"
        }}
      >
        Photo Gallery
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          marginTop: 3,
          padding: { xs: 2, sm: 3 },
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="gallery-upload"
          type="file"
          multiple
          onChange={handleGalleryUpload}
        />
        <Grid container spacing={2} justifyContent="center">
          {gallery.map((photo, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  onClick={() => removePhoto(index)}
                >
                  <CloseIcon size={16} />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
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

export default DashboardProfiles;
