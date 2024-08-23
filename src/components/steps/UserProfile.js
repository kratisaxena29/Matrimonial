import React, { lazy, useEffect, useState } from "react";
import logo from "../../images/logo.png";
import noProfile from "../../images/profiles/noProfile.jpg";
import EditIcon from '@mui/icons-material/Edit';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

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
  Grid,
  IconButton,
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
    plan : "",
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
console.log("...profileData...",profileData.dateOfBirth)
  const handleSubmit = (e) => {
    console.log("....save...")
    e.preventDefault();
    // Submit updated profile data to API
    console.log("Updated profile data:", profileData);
    let data  = user.email
      if(data.includes('@')){
        data = user.email
      }
      else{
        data = user.phoneno
      }
    axios.put(`${URL}/ProfileUpdate/${data}`,{
      name : profileData.fullName,
      aboutYourSelf :    profileData.aboutMe,
      Part_ageFrom :profileData.ageRange,
      annualIncome : profileData.annualIncome,
      caste : profileData.caste,
      dateOfBirth : profileData.dateOfBirth,
      diet :   profileData.diet,
      alcohol : profileData.drinking,
      family_Type : profileData.familyType,
      Fathers_prof : profileData.fatherOccupation,
      gender : profileData.gender,
      height : profileData.heightRange,
      heighestEduction :profileData.highestEducation,
      martialStatus :  profileData.maritalStatus,
      Mothers_prof : profileData.motherOccupation,
      profession :  profileData.occupation,
      religion : profileData.religion,
      smoke : profileData.smoking
    }) 
    .then((response) => {
      console.log("Profile updated successfully:", response.data);
      setIsEditMode(false);
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
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

  axios.post(`${URL}/upload-multiple-photo/${user.email}`, formData, {
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

  const removePhoto = async (index) => {
    console.log("...removePhoto...", index);
    
    // Assuming gallery is an array of photo URLs
    const photoToDelete = gallery[index];
    const profileIdentifier = user.email || user.phoneno; // Replace with actual user data
  
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
    const userdata = sessionStorage.getItem('user');
    if (userdata) {
      const user = JSON.parse(userdata);
      if (user && user.email) {
        axios.get(`${URL}/getphotosByEmailOrPhoneNo/${user.email}`)
          .then(response => {
            console.log("..user profile response...", response.data);
            const photos = response.data.photoUrl
            setGallery(photos);
          })
          .catch(error => {
            console.log("...error...", error);
          });
      }
    }
  }, [URL]);

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
  const ProfessionOption = [
    // { value: "Administration", label: "Administration", style: { color: "red", fontWeight: "bold" } },
    { value: "Admin Professional", label: "Admin Professional" },
    { value: "Clerk", label: "Clerk" },
    { value: "Operator/Technician", label: "Operator/Technician" },
    { value: "Secretary/Front Office", label: "Secretary/Front Office" },
    // { value: "Advertising", label: "Advertising, Media & Entertainment", style: { color: "red", fontWeight: "bold" } },
    { value: "Actor/Model", label: "Actor/Model" },
    { value: "Advertising Professional", label: "Advertising Professional" },
    { value: "Film/Entertainment Professional", label: "Film/Entertainment Professional" },
    { value: "Journalist", label: "Journalist" },
    { value: "Media Professional", label: "Media Professional" },
    { value: "PR Professional", label: "PR Professional" },
    // { value: "Agriculture", label: "Agriculture", style: { color: "red", fontWeight: "bold" } },
    { value: "Agriculture Professional", label: "Agriculture Professional" },
    { value: "Farming", label: "Farming" },
    // { value: "Airline", label: "Airline & Aviation", style: { color: "red", fontWeight: "bold" } },
    { value: "Airline Professional", label: "Airline Professional" },
    { value: "Flight Attendant", label: "Flight Attendant" },
    { value: "Pilot", label: "Pilot" },
    // { value: "Architecture", label: "Architecture", style: { color: "red", fontWeight: "bold" } },
    { value: "Architect", label: "Architect" },
    // { value: "BPO", label: "BPO & Customer Service", style: { color: "red", fontWeight: "bold" } },
    { value: "BPO/ITes Professional", label: "BPO/ITes Professional" },
    { value: "Customer Service", label: "Customer Service" },
    // { value: "Banking", label: "Banking & Finance", style: { color: "red", fontWeight: "bold" } },
    { value: "Accounting Professional", label: "Accounting Professional" },
    { value: "Auditor", label: "Auditor" },
    { value: "Banking Professional", label: "Banking Professional" },
    { value: "Chartered Accountant", label: "Chartered Accountant" },
    { value: "Finance Professional", label: "Finance Professional" },
    // { value: "Corporate Management", label: "Corporate Management Professionals", style: { color: "red", fontWeight: "bold" } },
    { value: "Analyst", label: "Analyst" },
    { value: "Consultant", label: "Consultant" },
    { value: "Corporate Communication", label: "Corporate Communication" },
    { value: "Corporate Planning", label: "Corporate Planning" },
    { value: "HR Professional", label: "HR Professional" },
    { value: "Marketing Professional", label: "Marketing Professional" },
    { value: "Operations Management", label: "Operations Management" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "Program Manager", label: "Program Manager" },
    { value: "Project Manager - Non IT", label: "Project Manager - Non IT" },
    { value: "Sales Professional", label: "Sales Professional" },
    { value: "Sr. Manager/ Manager", label: "Sr. Manager/ Manager" },
    { value: "Subject Matter Expert", label: "Subject Matter Expert" },
    // { value: "Doctor", label: "Doctor", style: { color: "red", fontWeight: "bold" } },
    { value: "Dentist", label: "Dentist" },
    { value: "Doctor", label: "Doctor" },
    { value: "Surgeon", label: "Surgeon" },
    // { value: "Education & Training", label: "Education & Training", style: { color: "red", fontWeight: "bold" } },
    { value: "Education Professional", label: "Education Professional" },
    { value: "Educational Institution Owner", label: "Educational Institution Owner" },
    { value: "Librarian", label: "Librarian" },
    { value: "Professor/Lecturer", label: "Professor/Lecturer" },
    { value: "Research Assistant", label: "Research Assistant" },
    { value: "Teacher", label: "Teacher" },
    // { value: "Engineering", label: "Engineering", style: { color: "red", fontWeight: "bold" } },
    { value: "Electronics Engineer", label: "Electronics Engineer" },
    { value: "Hardware/Telecom Engineer", label: "Hardware/Telecom Engineer" },
    { value: "Non - IT Engineer", label: "Non - IT Engineer" },
    { value: "Quality Assurance Engineer", label: "Quality Assurance Engineer" },
    // { value: "Hospitality", label: "Hospitality", style: { color: "red", fontWeight: "bold" } },
    { value: "Hotels/Hospitality Professional", label: "Hotels/Hospitality Professional" },
    { value: "Legal", label: "Legal", style: { color: "red", fontWeight: "bold" } },
    { value: "Lawyer & Legal Professional", label: "Lawyer & Legal Professional" },
    // { value: "Merchant Navy", label: "Merchant Navy", style: { color: "red", fontWeight: "bold" } },
    { value: "Mariner", label: "Mariner" },
    { value: "Merchant Naval Officer", label: "Merchant Naval Officer" },
    // { value: "Other Medical & Healthcare", label: "Other Medical & Healthcare", style: { color: "red", fontWeight: "bold" } },
    { value: "Nurse", label: "Nurse" },
    { value: "Paramedic", label: "Paramedic" },
    { value: "Pharmacist", label: "Pharmacist" },
    { value: "Physiotherapist", label: "Physiotherapist" },
    { value: "Psychologist", label: "Psychologist" },
    { value: "Veterinary Doctor", label: "Veterinary Doctor" },
    // { value: "Science & Research", label: "Science & Research", style: { color: "red", fontWeight: "bold" } },
    { value: "Research Professional", label: "Research Professional" },
    { value: "Science Professional", label: "Science Professional" },
    { value: "Scientist", label: "Scientist" },
    // { value: "Software & IT", label: "Software & IT", style: { color: "red", fontWeight: "bold" } },
    { value: "Animator", label: "Animator" },
    { value: "Cyber/Network Security", label: "Cyber/Network Security" },
    { value: "Project Lead - IT", label: "Project Lead - IT" },
    { value: "Project Manager - IT", label: "Project Manager - IT" },
    { value: "Quality Assurance Engineer - IT", label: "Quality Assurance Engineer - IT" },
    { value: "Software Professional", label: "Software Professional" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
    { value: "Web/Graphic Designer", label: "Web/Graphic Designer" },
    // { value: "Top Management", label: "Top Management", style: { color: "red", fontWeight: "bold" } },
    { value: "CxO/Chairman/President/Director", label: "CxO/Chairman/President/Director" },
    { value: "VP/AVP/GM/DGM", label: "VP/AVP/GM/DGM" },
    { value: "Others", label: "Others", style: { color: "red", fontWeight: "bold" } },
    { value: "Agent", label: "Agent" },
    { value: "Artist", label: "Artist" },
    { value: "Beautician", label: "Beautician" },
    { value: "Broker", label: "Broker" },
    { value: "Fashion Designer", label: "Fashion Designer" },
    { value: "Fitness Professional", label: "Fitness Professional" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Security Professional", label: "Security Professional" },
    { value: "Singer", label: "Singer" },
    { value: "Social Services/NGO/Volunteer", label: "Social Services/NGO/Volunteer" },
    { value: "Sportsperson", label: "Sportsperson" },
    { value: "Travel Professional", label: "Travel Professional" },
    { value: "Writer", label: "Writer" },
    { value: "Others", label: "Others" },
  ];
  

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
        const response = await axios.get(`${URL}/profilebyid/${data}`);
      
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
        plan : response.data.plan || "Not Available"
      };
      setProfileData(dummyData);
      } catch (error) {
        console.log("...error..", error);
      }
    };
  
    handleData();
  }, [user.email, user.phoneno]);
  
  const handleLogo = () => {
    navigate('/profiles')
  }
  const getPlanName = () => {
    console.log("...getplan...",profileData?.plan)
    switch (profileData?.plan) {
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
  
  {getPlanName()}
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
      <section className="profile-header">
        <div className="profile-image-container">
          <input
            accept="image/*"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={uploadImage}
          />
          <div
            onClick={triggerFileInput}
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
            <div className="edit-icon">
              <EditIcon style={{ color: "#fff", fontSize: "15px" }} />
            </div>
          </div>
        </div>
        <div className="profile-name">
          <h2>{profileData.fullName}</h2>
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
                        <Button
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
                        </Button>
                      </Box>

                      {/* Basic Information */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic Information</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Full Name",
                            profileData.fullName,
                            "fullName"
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
                            profileData.maritalStatus,
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
                            profileData.fatherOccupation,
                            "fatherOccupation",
                            "select",
                            [
                              { value: "Doctor", label: "Doctor" },
                              { value: "Engineer", label: "Engineer" },
                              { value: "Teacher", label: "Teacher" },
                              { value: "Business", label: "Business" },
                              { value: "Artist", label: "Artist" },
                              { value: "Other", label: "Other" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Mother's Occupation",
                            profileData.motherOccupation,
                            "motherOccupation",
                            "select",
                            [
                              { value: "Doctor", label: "Doctor" },
                              { value: "Engineer", label: "Engineer" },
                              { value: "Teacher", label: "Teacher" },
                              { value: "Business", label: "Business" },
                              { value: "Artist", label: "Artist" },
                              { value: "Other", label: "Other" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Family Type",
                            profileData.familyType,
                            "familyType",
                            "select",
                            [
                              { value: "Nuclear", label: "Nuclear" },
                              { value: "Joint", label: "Joint" },
                              { value: "Extended", label: "Extended" },
                              { value: "Others", label: "Others" },
                            ]
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
                            profileData.highestEducation,
                            "highestEducation",
                            "select",
                            [
                              {
                                value: "Computers",
                                label: "Computers",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "MCA", label: "MCA" },
                              { value: "BCA", label: "BCA" },
                              { value: "B.IT", label: "B.IT" },
                              { value: "MCM", label: "MCM" },
                              { value: "PGDCA", label: "PGDCA" },
                              { value: "DCA", label: "DCA" },
                              { value: "ADCA", label: "ADCA" },
                              {
                                value: "Finance/Commerce/Economics",
                                label: "Finance/Commerce/Economics",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "B.Com", label: "B.Com" },
                              { value: "CA", label: "CA" },
                              { value: "CS", label: "CS" },
                              { value: "ICWA", label: "ICWA" },
                              { value: "M.Com", label: "M.Com" },
                              { value: "CFA", label: "CFA" },
                              { value: "BBI", label: "BBI" },
                              { value: "BBE", label: "BBE" },
                              { value: "B.Com(Hons)", label: "B.Com(Hons)" },
                              { value: "MBE", label: "MBE" },
                              { value: "MFC", label: "MFC" },
                              { value: "MFM", label: "MFM" },
                              { value: "CFP", label: "CFP" },
                              { value: "CIA", label: "CIA" },
                              { value: "CPA", label: "CPA" },
                              {
                                value: "Management",
                                label: "Management",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "MBA/PGDM", label: "MBA/PGDM" },
                              { value: "BBA", label: "BBA" },
                              { value: "BHM", label: "BHM" },
                              { value: "BAM", label: "BAM" },
                              { value: "BBM", label: "BBM" },
                              { value: "BFM", label: "BFM" },
                              { value: "BFT", label: "BFT" },
                              { value: "B.H.A", label: "B.H.A" },
                              { value: "BHMCT", label: "BHMCT" },
                              { value: "BHMTT", label: "BHMTT" },
                              { value: "BMS", label: "BMS" },
                              { value: "MAM", label: "MAM" },
                              { value: "MHA", label: "MHA" },
                              { value: "MMS", label: "MMS" },
                              { value: "MMM", label: "MMM" },
                              { value: "MTM", label: "MTM" },
                              { value: "MTA", label: "MTA" },
                              { value: "MHRM", label: "MHRM" },
                              { value: "MBM", label: "MBM" },
                              {
                                value: "Executive MBA/PGDM",
                                label: "Executive MBA/PGDM",
                              },
                              { value: "CWM", label: "CWM" },
                              { value: "FPM", label: "FPM" },
                              {
                                value: "Engineering/Technology/Design",
                                label: "Engineering/Technology/Design",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "B.E/B.Tech", label: "B.E/B.Tech" },
                              { value: "B.Pharma", label: "B.Pharma" },
                              { value: "M.E/M.Tech", label: "M.E/M.Tech" },
                              { value: "M.Pharma", label: "M.Pharma" },
                              {
                                value: "M.S. (Engineering)",
                                label: "M.S. (Engineering)",
                              },
                              { value: "B.Arch", label: "B.Arch" },
                              { value: "M.Arch", label: "M.Arch" },
                              { value: "B.Des", label: "B.Des" },
                              { value: "M.Des", label: "M.Des" },
                              { value: "B.FAD", label: "B.FAD" },
                              { value: "B.FTech", label: "B.FTech" },
                              { value: "BID", label: "BID" },
                              { value: "B.Tech LL.B.", label: "B.Tech LL.B." },
                              { value: "M.FTech", label: "M.FTech" },
                              { value: "MID", label: "MID" },
                              { value: "MIB", label: "MIB" },
                              { value: "M.Plan", label: "M.Plan" },
                              { value: "MPH", label: "MPH" },
                              { value: "A.M.E.", label: "A.M.E." },
                              { value: "CISE", label: "CISE" },
                              { value: "ITIL", label: "ITIL" },
                              {
                                value: "Medicine/Health",
                                label: "Medicine/Health",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "MBBS", label: "MBBS" },
                              { value: "M.D", label: "M.D" },
                              { value: "BAMS", label: "BAMS" },
                              { value: "BHMS", label: "BHMS" },
                              { value: "BDS", label: "BDS" },
                              {
                                value: "M.S(Medicine)",
                                label: "M.S(Medicine)",
                              },
                              { value: "MVSc.", label: "MVSc." },
                              { value: "BVSc.", label: "BVSc." },
                              { value: "MDS", label: "MDS" },
                              { value: "BPT", label: "BPT" },
                              { value: "MPT", label: "MPT" },
                              { value: "DM", label: "DM" },
                              { value: "MCh", label: "MCh" },
                              { value: "BCVT", label: "BCVT" },
                              { value: "BMLT", label: "BMLT" },
                              { value: "BMRIT", label: "BMRIT" },
                              { value: "BMRT", label: "BMRT" },
                              { value: "BNYS", label: "BNYS" },
                              { value: "BOT", label: "BOT" },
                              { value: "B.O.Th", label: "B.O.Th" },
                              { value: "BOPTM", label: "BOPTM" },
                              { value: "BPMT", label: "BPMT" },
                              { value: "B.P.Ed", label: "B.P.Ed" },
                              { value: "B.P.E.S", label: "B.P.E.S" },
                              { value: "BPO", label: "BPO" },
                              { value: "BPH", label: "BPH" },
                              { value: "BRDIT", label: "BRDIT" },
                              { value: "BUMS", label: "BUMS" },
                              { value: "MOT", label: "MOT" },
                              { value: "M.Optom.", label: "M.Optom." },
                              { value: "MS", label: "MS" },
                              { value: "DMLT", label: "DMLT" },
                              { value: "D.Pharm", label: "D.Pharm" },
                              { value: "D.P.Ed", label: "D.P.Ed" },
                              { value: "ANM", label: "ANM" },
                              { value: "GNM", label: "GNM" },
                              {
                                value: "Law",
                                label: "Law",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "L.L.B", label: "L.L.B" },
                              { value: "L.L.M", label: "L.L.M" },
                              { value: "B.A.LL.B.", label: "B.A.LL.B." },
                              {
                                value: "B.A.LL.B.(Hons)",
                                label: "B.A.LL.B.(Hons)",
                              },
                              { value: "BBALL.B.", label: "BBALL.B." },
                              {
                                value: "BBALL.B.(Hons)",
                                label: "BBALL.B.(Hons)",
                              },
                              { value: "B.Com LL.B", label: "B.Com LL.B" },
                              { value: "B.L.S.LL.B.", label: "B.L.S.LL.B." },
                              { value: "M.B.L", label: "M.B.L" },
                              { value: "L.L.B", label: "L.L.B" },
                              { value: "L.L.M.", label: "L.L.M." },
                              {
                                value: "Arts/Science",
                                label: "Arts/Science",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "B.A", label: "B.A" },
                              { value: "B.Sc", label: "B.Sc" },
                              { value: "M.A", label: "M.A" },
                              { value: "M.Sc", label: "M.Sc" },
                              { value: "B.Ed", label: "B.Ed" },
                              { value: "M.Ed", label: "M.Ed" },
                              { value: "MSW", label: "MSW" },
                              { value: "BFA", label: "BFA" },
                              { value: "MFA", label: "MFA" },
                              { value: "BJMC", label: "BJMC" },
                              { value: "MJMC", label: "MJMC" },
                              { value: "B.Agri", label: "B.Agri" },
                              { value: "B.A(Hons)", label: "B.A(Hons)" },
                              { value: "BCT & CA", label: "BCT & CA" },
                              { value: "B.EI.ED", label: "B.EI.ED" },
                              { value: "B.F.Sc", label: "B.F.Sc" },
                              { value: "B.J", label: "B.J" },
                              { value: "B.Lib.I.Sc.", label: "B.Lib.I.Sc." },
                              { value: "B.Lib.Sc.", label: "B.Lib.Sc." },
                              { value: "B.Litt", label: "B.Litt" },
                              { value: "B.M.C.", label: "B.M.C." },
                              { value: "B.M.M.", label: "B.M.M." },
                              { value: "B.M.M.M.C.", label: "B.M.M.M.C." },
                              { value: "B.Mus.", label: "B.Mus." },
                              { value: "BPA", label: "BPA" },
                              {
                                value: "B.Sc(Post Basic)",
                                label: "B.Sc(Post Basic)",
                              },
                              { value: "BSW", label: "BSW" },
                              { value: "BVA", label: "BVA" },
                              { value: "B.Voc", label: "B.Voc" },
                              { value: "M.F.Sc.", label: "M.F.Sc." },
                              { value: "M.H.Sc.", label: "M.H.Sc." },
                              { value: "M.J.", label: "M.J." },
                              { value: "M.Lib.I.Sc.", label: "M.Lib.I.Sc." },
                              { value: "M.Lib.Sc.", label: "M.Lib.Sc." },
                              { value: "M.M.C.", label: "M.M.C." },
                              { value: "M.O.L.", label: "M.O.L." },
                              { value: "MPA", label: "MPA" },
                              { value: "M.P.Ed", label: "M.P.Ed" },
                              { value: "MVA", label: "MVA" },
                              { value: "M.Voc", label: "M.Voc" },
                              { value: "D.Ed", label: "D.Ed" },
                              { value: "D.EI.Ed", label: "D.EI.Ed" },
                              { value: "D.Voc", label: "D.Voc" },
                              { value: "CPT", label: "CPT" },
                              { value: "ETT", label: "ETT" },
                              { value: "TTC", label: "TTC" },
                              { value: "P.P.T.T.C", label: "P.P.T.T.C" },
                              { value: "B.A", label: "B.A" },
                              {
                                value: "Doctorate",
                                label: "Doctorate",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "PhD", label: "PhD" },
                              { value: "M.Phil", label: "M.Phil" },
                              { value: "LL.D.", label: "LL.D." },
                              { value: "D.Litt", label: "D.Litt" },
                              { value: "Pharm.D", label: "Pharm.D" },
                              { value: "PhD", label: "PhD" },
                              { value: "M.Phil", label: "M.Phil" },
                              {
                                value: "Non-Graduate",
                                label: "Non-Graduate",
                                style: { color: "red", fontWeight: "bold" },
                              },
                              { value: "Diploma", label: "Diploma" },
                              { value: "High School", label: "High School" },
                              { value: "Trade School", label: "Trade School" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            {renderField(
                              "Profession",
                              profileData.occupation,
                              "occupation",
                              "select",
                              ProfessionOption
                            )}
                          </div>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Annual Income",
                            profileData.annualIncome,
                            "annualIncome",
                            "select",
                            [
                              { value: "Rs 2-5 lakh", label: "Rs 2-5 lakh" },
                              { value: "Rs 5-7 lakh", label: "Rs 5-7 lakh" },
                              { value: "Rs 7-10 lakh", label: "Rs 7-10 lakh" },
                              {
                                value: "Rs 10-15 lakh",
                                label: "Rs 10-15 lakh",
                              },
                              {
                                value: "Rs 15-20 lakh",
                                label: "Rs 15-20 lakh",
                              },
                              {
                                value: "Rs 20-30 lakh",
                                label: "Rs 20-30 lakh",
                              },
                              {
                                value: "More than 30 lakh",
                                label: "More than 30 lakh",
                              },
                            ]
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
                            "select",
                            [
                              { value: "Vegetarian", label: "Vegetarian" },
                              {
                                value: "Non-vegetarian",
                                label: "Non-vegetarian",
                              },
                              { value: "Eggitarian", label: "Eggitarian" },
                              { value: "Pescatarian", label: "Pescatarian" },
                              { value: "Vegan", label: "Vegan" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Smoking",
                            profileData.smoking,
                            "smoking","select",
                            
                            [
                              { value: "Non-smoker", label: "Non-smoker" },
                              { value: "Social Smoker", label: "Social Smoker" },
                              { value: "Regular-Smoker", label: "Regular-Smoker" },
                              { value: "Occasionally", label: "Occasionally" }
                            ]
                            // "checkbox"
                          )}
                          
                          
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Drinking",
                            profileData.drinking,
                            "drinking",
                            // "checkbox"
                            "select",
                            
                            [
                              { value: "Occasionally", label: "Occasionally" },
                              { value: "Social Drinker", label: "Social Drinker" },
                              { value: "Regular Drinker", label: "Regular Drinker" },
                              { value: "Non-drinker", label: "Non-drinker" }
                            ]
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
                            profileData.ageRange,
                            "ageRange",
                            "select",
                            [
                              { value: "18-25", label: "18-25 years" },
                              { value: "25-30", label: "25-30 years" },
                              { value: "30-35", label: "30-35 years" },
                              { value: "35-40", label: "35-40 years" },
                              { value: "40-45", label: "40-45 years" },
                              { value: "45-50", label: "45-50 years" },
                              { value: "50-55", label: "50-55 years" },
                              { value: "55-60", label: "55-60 years" },
                              { value: "60-65", label: "60-65 years" },
                              { value: "65-70", label: "65-70 years" },
                              { value: "70-75", label: "70-75 years" },
                            ]
                          )}
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Height Range",
                            profileData.heightRange,
                            "heightRange",
                            "select",
                            [
                              { value: "4'0''", label: "4'0'' (1.22 mts)" },
                              { value: "4'1''", label: "4'1'' (1.24 mts)" },
                              { value: "4'2''", label: "4'2'' (1.28 mts)" },
                              { value: "4'3''", label: "4'3'' (1.31 mts)" },
                              { value: "4'4''", label: "4'4'' (1.34 mts)" },
                              { value: "4'5''", label: "4'5'' (1.35 mts)" },
                              { value: "4'6''", label: "4'6'' (1.37 mts)" },
                              { value: "4'7''", label: "4'7'' (1.40 mts)" },
                              { value: "4'8''", label: "4'8'' (1.42 mts)" },
                              { value: "4'9''", label: "4'9'' (1.45 mts)" },
                              { value: "4'10''", label: "4'10'' (1.47 mts)" },
                              { value: "4'11''", label: "4'11'' (1.50 mts)" },
                              { value: "5'0''", label: "5'0'' (1.52 mts)" },
                              { value: "5'1''", label: "5'1'' (1.55 mts)" },
                              { value: "5'2''", label: "5'2'' (1.58 mts)" },
                              { value: "5'3''", label: "5'3'' (1.60 mts)" },
                              { value: "5'4''", label: "5'4'' (1.63 mts)" },
                              { value: "5'5''", label: "5'5'' (1.65 mts)" },
                              { value: "5'6''", label: "5'6'' (1.68 mts)" },
                              { value: "5'7''", label: "5'7'' (1.70 mts)" },
                              { value: "5'8''", label: "5'8'' (1.73 mts)" },
                              { value: "5'9''", label: "5'9'' (1.75 mts)" },
                              { value: "5'10''", label: "5'10'' (1.78 mts)" },
                              { value: "5'11''", label: "5'11'' (1.80 mts)" },
                              { value: "6'0''", label: "6'0'' (1.83 mts)" },
                              { value: "6'1''", label: "6'1'' (1.85 mts)" },
                              { value: "6'2''", label: "6'2'' (1.88 mts)" },
                              { value: "6'3''", label: "6'3'' (1.91 mts)" },
                              { value: "6'4''", label: "6'4'' (1.93 mts)" },
                              { value: "6'5''", label: "6'5'' (1.96 mts)" },
                              { value: "6'6''", label: "6'6'' (1.98 mts)" },
                              { value: "6'7''", label: "6'7'' (2.01 mts)" },
                              { value: "6'8''", label: "6'8'' (2.03 mts)" },
                              { value: "6'9''", label: "6'9'' (2.06 mts)" },
                              { value: "6'10''", label: "6'10'' (2.08 mts)" },
                              { value: "6'11''", label: "6'11'' (2.11 mts)" },
                              { value: "7'", label: "7' (2.13 mts) plus" },
                            ]
                          )}
                        </div>
                      </div>

                      {/* About Me */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>About Me</h4>
                        </div>
                        <div className="form-group">
                          {renderField(
                            "Tell us about yourself",
                            profileData.aboutMe,
                            "aboutMe",
                            "textarea"
                          )}
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
      {/* </div> */}
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
              {/* <p>
                <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong> 94490
                65433
              </p> */}
               <p>
                <strong>Email: </strong>
                <a
                  href="mailto:soulmatchinfo@gmail.com"
                  style={{ textDecoration: "none", color: "#FFBF0E" }}
                >
                  soulmatchinfo@gmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
