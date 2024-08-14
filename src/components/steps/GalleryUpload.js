import React, { lazy, useEffect, useState } from "react";
import logo from "../../images/logo.png";
import noProfile from "../../images/profiles/noProfile.jpg";
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
} from "@mui/material";
import axios from "axios";

function GalleryUpload({ setlogedIn }) {
  const location = useLocation()
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const [subcaste, setSubCaste] = useState("");
  const navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("user"));
//   console.log("..user...", user);
//   console.log("..user email...", user.email);
//   console.log("...age..", age);
//   console.log("...caste..", caste);
//   console.log("...religion...", religion);

  const URL = process.env.REACT_APP_API_BASE_URL;


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

  console.log("...phonene...",location.state)
  const email = location.state.email
  const phonene = location?.state?.phonene


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

  axios.post(`${URL}/upload-multiple-photo/${email}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      console.log("phot updated successfully:", response.data);
     
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    });
  };

  // const removePhoto = (index) => {
  //   console.log("...removePhoto...",index)
  //   setGallery(gallery.filter((_, i) => i !== index));
  // };

  // const removePhoto = async (index) => {
  //   console.log("...removePhoto...", index);
    
  //   // Assuming gallery is an array of photo URLs
  //   const photoToDelete = gallery[index];
  //   const profileIdentifier = email || phonene; // Replace with actual user data
  
  //   try {
  //     // Make an API call to delete the photo from the server
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_BASE_URL}/deletephotosByEmailOrPhoneNo/${profileIdentifier}`,
  //       { photoToDelete: photoToDelete }, // Request body
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );
  
  //     // Check if the API call was successful
  //     if (response.status === 200) {
  //       console.log('Photo deleted successfully:', response.data);
        
  //       // Remove the photo from the gallery in the frontend
  //       setGallery(gallery.filter((_, i) => i !== index));
  //     } else {
  //       console.error('Failed to delete photo:', response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error during photo deletion:', error);
  //   }
  // };
  
  const refreshGallery = async () => {
   
};

useEffect(() => {
  const profileIdentifier = email || phonene;
  axios.get(`${URL}/getphotosByEmailOrPhoneNo/${profileIdentifier}`)
        .then(response => {
          console.log("..user profile response...", response.data);
          const photos = response.data.photoUrl
          setGallery(photos);
        })
        .catch(error => {
          console.log("...error...", error);
        });
  // if (userdata) {
  //   const user = JSON.parse(userdata);
  //   if (user && user.email) {
  //     axios.get(`${URL}/getphotosByEmailOrPhoneNo/${user.email}`)
  //       .then(response => {
  //         console.log("..user profile response...", response.data);
  //         const photos = response.data.photoUrl
  //         setGallery(photos);
  //       })
  //       .catch(error => {
  //         console.log("...error...", error);
  //       });
  //   }
  // }
}, [URL]);

const removePhoto = async (index) => {
  const photoToDelete = gallery[index];
  const profileIdentifier = email || phonene;

  try {
    const response = await axios.post(
      `${URL}/deletephotosByEmailOrPhoneNo/${profileIdentifier}`,
      { photoToDelete },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 200) {
      console.log('Photo deleted successfully:', response.data);
      // Update the gallery state to remove the deleted photo from the frontend
      setGallery((prevGallery) => prevGallery.filter((_, i) => i !== index));
    } else {
      console.error('Failed to delete photo:', response.data.message);
    }
  } catch (error) {
    console.error('Error during photo deletion:', error);
  }
};



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

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const uploadImageToServer = async (file) => {
    console.log("...upload image...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      let apiUrl = `${URL}/upload?`;
      if (email) {
        apiUrl += `email`;
      } else if ("9871627742") {
        // console.log("...user.phoneno...", user.phoneno);
        apiUrl += `phoneno=9871627742`;
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
//   
console.log("...krati location...",location.state)
const handleConfirmation = async () => {
  navigate('/Confirmation-Profile',{
        state: {
      ...location.state,
    }
  }
  )
}
  

  const handlegetImageUrl = async () => {
    console.log("...handleImageUrl....")
    axios
      .get(`${URL}/getimagepath?email=${email}`)
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
        <img onClick={handleLogo} src={logo} alt="Logo" style={{ height: "60px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
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
          </Button>

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
      <Box sx={{ padding: 14, borderRadius: 2, marginTop:20 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                // color: "#333",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
                color:"#76001C"
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
            padding: 3,
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
          <label htmlFor="gallery-upload">
            <Button
              variant="outlined"
              startIcon={<AddPhotoAlternateIcon />}
              component="span"
              sx={{
                padding: "10px 20px",
                borderColor: "#3f51b5",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "rgba(63, 81, 181, 0.04)",
                },
              }}
            >
              Add Photos
            </Button>
          </label>
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
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
          <button onClick={handleConfirmation}>Next</button>
        </Box>
      </Box>
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
                <strong>Email: </strong>
                <a
                  href="mailto:soulmatchinfo@gmail.com"
                  style={{ textDecoration: "none", color: "#FFBF0E" }}
                >
                  soulmatchinfo@gmail.com
                </a>{" "}
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
                All rights reserved.{" "}
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

export default GalleryUpload;
