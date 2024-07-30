import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import noProfile from "../../images/profiles/noProfile.jpg";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import axios from "axios";

function UserProfile({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const [subcaste, setSubCaste] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated profile data to API
    console.log("Updated profile data:", profileData);
    setIsEditMode(false);
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
    console.log("...handleImageUrl....")
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
  useEffect(() => {
    const handleData = async () => {
      console.log("....user krati...",user.email)
      let data  = user.email
      if(data.includes('@')){
        data = user.email
      }
      else{
        data = user.phoneno
      }
      try {
        const response = await axios.get(`${URL}/profile/${data}`);
      
       console.log("...response...",response.data)
       const dummyData = {
        fullName: response.data.name || "Not Available",
        dateOfBirth: response.data.dateOfBirth || "Not Available" ,
        gender: response.data.gender || "Not Available" ,
        maritalStatus: response.data.martialStatus || "Not Available" ,
        religion: response.data.religion || "Not Available" ,
        caste: response.data.caste || "Not Available" ,
        fatherOccupation: response.data.Fathers_prof || "Not Available" ,
        motherOccupation: response.data.Mothers_prof || "Not Available" ,
        familyType: response.data.family_Type || "Not Available" ,
        highestEducation: response.data.heighestEduction || "Not Available" ,
        occupation: response.data.profession || "Not Available" ,
        annualIncome: response.data.annualIncome || "Not Available" ,
        diet: response.data.diet || "Not Available" ,
        smoking: response.data.smoke || "Not Available" ,
        drinking: response.data.drink || "Not Available" ,
        ageRange: response.data.Part_ageFrom || "Not Available" ,
        heightRange: response.data.Part_height || "Not Available" ,
        aboutMe: response.data.aboutYourSelf || "Not Available" ,
      };
      setProfileData(dummyData);
      } catch (error) {
        console.log("...error..", error);
      }
    };
  
    handleData();
  }, [user.email, user.phoneno]);
  
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
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
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
      <section>
      <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={uploadImage}
          />
          <div
            onClick={triggerFileInput}
            style={{
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
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            ) : (
              <img
                src={noProfile}
                alt="Default Profile"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            )}
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
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
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
                        {renderField("Full Name", profileData.fullName, "fullName")}
                      </div>
                      <div className="form-group">
                        {renderField("Date of Birth", profileData.dateOfBirth, "dateOfBirth", "date")}
                      </div>
                      <div className="form-group">
                        {renderField("Gender", profileData.gender, "gender", "radio", [
                          { value: "female", label: "Female" },
                          { value: "male", label: "Male" },
                        ])}
                      </div>
                      <div className="form-group">
                        {renderField("Marital Status", profileData.maritalStatus, "maritalStatus", "select", [
                          { value: "never_married", label: "Never Married" },
                          { value: "divorced", label: "Divorced" },
                          { value: "widowed", label: "Widowed" },
                        ])}
                      </div>
                    </div>

                    {/* Religious Information */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Religious Information</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Religion", profileData.religion, "religion", "select", [
                          { value: "hindu", label: "Hindu" },
                          { value: "muslim", label: "Muslim" },
                          { value: "christian", label: "Christian" },
                        ])}
                      </div>
                      <div className="form-group">
                        {renderField("Caste", profileData.caste, "caste")}
                      </div>
                    </div>

                    {/* Family Details */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Family Details</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Father's Occupation", profileData.fatherOccupation, "fatherOccupation")}
                      </div>
                      <div className="form-group">
                        {renderField("Mother's Occupation", profileData.motherOccupation, "motherOccupation")}
                      </div>
                      <div className="form-group">
                        {renderField("Family Type", profileData.familyType, "familyType", "select", [
                          { value: "nuclear", label: "Nuclear" },
                          { value: "joint", label: "Joint" },
                        ])}
                      </div>
                    </div>

                    {/* Education and Career */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Education and Career</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Highest Education", profileData.highestEducation, "highestEducation", "select", [
                          { value: "bachelors", label: "Bachelor's" },
                          { value: "masters", label: "Master's" },
                          { value: "phd", label: "PhD" },
                        ])}
                      </div>
                      <div className="form-group">
                        {renderField("Occupation", profileData.occupation, "occupation")}
                      </div>
                      <div className="form-group">
                        {renderField("Annual Income", profileData.annualIncome, "annualIncome", "number")}
                      </div>
                    </div>

                    {/* Lifestyle */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Lifestyle</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Diet", profileData.diet, "diet", "select", [
                          { value: "veg", label: "Vegetarian" },
                          { value: "non_veg", label: "Non-vegetarian" },
                          { value: "eggetarian", label: "Eggetarian" },
                        ])}
                      </div>
                      <div className="form-group">
                        {renderField("Smoking", profileData.smoking, "smoking", "checkbox")}
                      </div>
                      <div className="form-group">
                        {renderField("Drinking", profileData.drinking, "drinking", "checkbox")}
                      </div>
                    </div>

                    {/* Partner Preferences */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Partner Preferences</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Age Range", profileData.ageRange, "ageRange")}
                      </div>
                      <div className="form-group">
                        {renderField("Height Range", profileData.heightRange, "heightRange")}
                      </div>
                    </div>

                    {/* About Me */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>About Me</h4>
                      </div>
                      <div className="form-group">
                        {renderField("Tell us about yourself", profileData.aboutMe, "aboutMe", "textarea")}
                      </div>
                    </div>

                    {isEditMode && (
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
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                  <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong>{" "}
                  94490 65433
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default UserProfile;
