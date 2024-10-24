import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  InputLabel,
  FormControl,
  FormHelperText,
  Checkbox, ListItemText,
  Grid
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileDetails() {
  const location = useLocation();
  const storedData = JSON.parse(sessionStorage.getItem("userData"));
  const [name, setName] = useState(location?.state?.name || storedData?.name ||"");
  const [gender, setGender] = useState(location?.state?.gender || storedData?.gender || "");
  const [age, setAge] = useState(location?.state?.age || storedData?.age || "");
  const [maritalStatus, setMaritalStatus] = useState(
    location?.state?.maritalStatus || storedData?.maritalStatus || ""
  );
  const [nationality, setNationality] = useState(
    location?.state?.nationality || storedData?.nationality || ""
  );
  const [city, setCity] = useState(location?.state?.city || storedData?.city ||"");
  const [religion, setReligion] = useState(location?.state?.religion || storedData?.religion || "");
  const [disability, setDisability] = useState(
    location?.state?.disability || storedData?.disability || ""
  );
  const [disabilityDetails, setDisabilityDetails] = useState(
    location?.state?.disabilityDetails || storedData?.disabilityDetails ||""
  );
  const [email, setEmail] = useState(location?.state?.email || storedData?.email || "");
  const [phoneNo, setPhoneNo] = useState(() => {
    if (location?.state?.phoneno) {
      return location.state.phoneno;
    } else if (storedData?.phoneNo) {
      return storedData.phoneNo.startsWith('+91')
        ? storedData.phoneNo
        : `+91${storedData.phoneNo}`;
    }
    return ""; // Default value if neither is available
  });
  // const [address, setAddress] = useState(location?.state?.address || "");
  const [hobbies, setHobbies] = useState(location?.state?.hobbies || storedData?.hobbies || []);
  const [indianCities, setIndianCities] = useState(
    location?.state?.indianCities ||  storedData?.indianCities || []
  );
  const [isNRI, setIsNRI] = useState(
    location?.state?.nationality && location?.state?.nationality !== "Indian"
  );
  const [country, setCountry] = useState(location?.state?.country || storedData?.country || "");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            paddingRight: "0px",
          },
        },
      },
    },
  });

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case "name":
        if (!value) newErrors.name = "Name is required";
        else delete newErrors.name;
        break;
      case "gender":
        if (!value) newErrors.gender = "Gender is required";
        else delete newErrors.gender;
        break;
      case "age":
        if (!value) newErrors.age = "Age is required";
        else delete newErrors.age;
        break;
      case "maritalStatus":
        if (!value) newErrors.maritalStatus = "Marital status is required";
        else delete newErrors.maritalStatus;
        break;
      case "nationality":
        if (!value) newErrors.nationality = "Nationality is required";
        else delete newErrors.nationality;
        break;
      case "city":
        if (!value) newErrors.city = "City is required";
        else delete newErrors.city;
        break;
      case "country":
        if (!value) newErrors.country = "Country is required";
        else delete newErrors.country;
        break;
      case "religion":
        if (!value) newErrors.religion = "Religion is required";
        else delete newErrors.religion;
        break;
      case "disability":
        if (!value) newErrors.disability = "Disability is required";
        else delete newErrors.disability;
        break;
      case "disabilityDetails":
        if (disability === "Yes" && !value)
          newErrors.disabilityDetails =
            "Please provide details about your disability";
        else delete newErrors.disabilityDetails;
        break;
      case "email":
        if (!value) newErrors.email = "Email is required";
        else if (value && !/\S+@\S+\.\S+/.test(value))
          newErrors.email = "Email is invalid";
        else delete newErrors.email;
        break;
      // case "phoneNo":
      //   if (!value) newErrors.phoneNo = "Phone number is required";
      //   else if (value.length < 10)
      //     newErrors.phoneNo = "Phone number must be 10 digits";
      //   else if (value.length > 10)
      //     newErrors.phoneNo = "Phone number must not be more than 10 digits";
      //   else delete newErrors.phoneNo;
        break;
      
      case "hobbies":
        if (!value || value.length < 3)
          newErrors.hobbies = "Hobbies  should be min 3";
        else delete newErrors.hobbies;
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleBlur = (fieldName) => (event) => {
    validateField(fieldName, event.target.value);
  };

  console.log("...location...", location.state);
  console.log("..email ...", location.state.email);
  console.log("..phone ...", location.state.phoneno);

  const handleProfileNext = async () => {
    const allFieldsValid = Object.keys(errors).length === 0;
  
    // if (!allFieldsValid) return;
  
    const profileData = {
      name,
      gender,
      age,
      maritalStatus,
      nationality,
      city,
      religion,
      disability,
      disabilityDetails: disability === "Yes" ? disabilityDetails : "",
      email,
      phoneNo,
      hobbies,
      country,
    };
  
    // Get the existing data from sessionStorage and merge it
    let existingData = JSON.parse(sessionStorage.getItem("userData")) || {};
    const updatedData = { ...existingData, ...profileData };
  
    // Save the merged data back to sessionStorage
    sessionStorage.setItem("userData", JSON.stringify(updatedData));
  
    // Navigate with state
    if (location.state.email || existingData.email) {
      if (email === location.state.email || email === existingData.email) {
        navigate("/additional-details", { state: { ...updatedData } });
      } else {
        toast.error("Email does not match with the registered one");
      }
    } else if (location.state.phoneno || existingData.phoneNo) {
      if (phoneNo === location.state.phoneno || phoneNo === existingData.phoneNo) {
        
        navigate("/additional-details", { state: { ...updatedData } });
      } else {
        toast.error("Phone number does not match with the registered one");
      }
    }
  };
  
  const [hobbiesOpen, setHobbiesOpen] = useState(false);

  const handleHobbiesClose = () => {
    setHobbiesOpen(false);
  };
  
  const handleHobbiesOpen = () => {
    setHobbiesOpen(true);
  };
  
  
  const handleChange = (setter, fieldName) => (event) => {
    if (fieldName === "hobbies") {
      const {
        target: { value },
      } = event;
      setter(typeof value === 'string' ? value.split(',') : value);
    } else {
      setter(event.target.value);
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    validateField(fieldName, event.target.value);
    setTimeout(() => {
      setHobbiesOpen(false);
    }, 300); // 300ms delay, adjust as needed
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        const allCities = response.data.data;
        const indianCities = allCities.filter(
          (city) => city.country === "India"
        );
        const indianCityNames = indianCities.map((city) => city.city);
        setIndianCities(indianCityNames);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const ageOptions = [];
  for (let i = 18; i <= 75; i++) {
    ageOptions.push(i);
  }

  const hobbiesOptions = [
    "Reading",
    "Traveling",
    "Cooking",
    "Sports",
    "Music",
    "Dancing",
    "Photography",
    "Drawing",
    "Others",
  ];

  const nationalityOptions = ["Indian", "NRI"];

  const religionOptions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Bahai",
    "Parsi"
  ];

  const maritalStatusOptions = [
    "Never Married",
    "Awaiting Divorce",
    "Divorced",
    "Widowed",
    "Annulled",
  ];
  useEffect(() => {
    console.log("useeffect Location state:", location.state);
    console.log("useeffect Location state phoneno:", location.state.phoneno);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ToastContainer />
      <nav
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
      </nav>

      <Grid container style={{ flex: 1 }} spacing={0}>
        {/* Left part */}
        <Grid
          item
          xs={12} sm={12} md={6} lg={6}
          style={{
            backgroundColor: "#F7E7CE",
            textAlign: "center",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WorkspacePremiumIcon
            style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
          />
          <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
            "Chosen by Countless Indian Hearts Worldwide: A Premier Matrimonial Platform"
          </Typography>
        </Grid>

        {/* Right part */}
        <Grid
          item
          xs={12} sm={12} md={6} lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <div>
            <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
              Profile Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="standard"
                  value={name}
                  onChange={handleChange(setName, "name")}
                  onBlur={handleBlur("name")}
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.gender}
                >
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    value={gender}
                    onChange={handleChange(setGender, "gender")}
                    onBlur={handleBlur("gender")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                  {errors.gender && (
                    <FormHelperText>{errors.gender}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.age}
                >
                  <InputLabel id="age-label">Age</InputLabel>
                  <Select
                    labelId="age-label"
                    value={age}
                    onChange={handleChange(setAge, "age")}
                    onBlur={handleBlur("age")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {ageOptions.map((ageOption) => (
                      <MenuItem key={ageOption} value={ageOption}>
                        {ageOption}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.maritalStatus}
                >
                  <InputLabel id="marital-status-label">
                    Marital Status
                  </InputLabel>
                  <Select
                    labelId="marital-status-label"
                    value={maritalStatus}
                    onChange={handleChange(setMaritalStatus, "maritalStatus")}
                    onBlur={handleBlur("maritalStatus")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {maritalStatusOptions.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.maritalStatus && (
                    <FormHelperText>{errors.maritalStatus}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.nationality}
                >
                  <InputLabel id="nationality-label">Nationality</InputLabel>
                  <Select
                    labelId="nationality-label"
                    value={nationality}
                    onChange={(e) => {
                      setNationality(e.target.value);
                      setIsNRI(e.target.value !== "Indian");
                    }}
                    onBlur={handleBlur("nationality")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {nationalityOptions.map((nationality) => (
                      <MenuItem key={nationality} value={nationality}>
                        {nationality}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.nationality && (
                    <FormHelperText>{errors.nationality}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {nationality === "Indian" && (
                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    error={!!errors.city}
                  >
                    <InputLabel id="city-label">City</InputLabel>
                    <Select
                      labelId="city-label"
                      value={city}
                      onChange={handleChange(setCity, "city")}
                      onBlur={handleBlur("city")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {indianCities.map((cityName) => (
                        <MenuItem key={cityName} value={cityName}>
                          {cityName}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.city && (
                      <FormHelperText>{errors.city}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}
              {isNRI && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Country"
                    variant="standard"
                    value={country}
                    onChange={handleChange(setCountry, "city")}
                    onBlur={handleBlur("city")}
                    error={!!errors.country}
                    helperText={errors.country}
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.religion}
                >
                  <InputLabel id="religion-label">Religion</InputLabel>
                  <Select
                    labelId="religion-label"
                    value={religion}
                    onChange={handleChange(setReligion, "religion")}
                    onBlur={handleBlur("religion")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {religionOptions.map((religion) => (
                      <MenuItem key={religion} value={religion}>
                        {religion}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.religion && (
                    <FormHelperText>{errors.religion}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.disability}
                >
                  <InputLabel id="disability-label">
                    Differently-abled
                  </InputLabel>
                  <Select
                    labelId="disability-label"
                    value={disability}
                    onChange={handleChange(setDisability, "disability")}
                    onBlur={handleBlur("disability")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.disability && (
                    <FormHelperText>{errors.disability}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {disability === "Yes" && (
                <Grid item xs={12}>
                  <TextField
                    label="Specify"
                    variant="standard"
                    value={disabilityDetails}
                    onChange={handleChange(setDisabilityDetails, "disabilityDetails")}
                    onBlur={handleBlur("disabilityDetails")}
                    error={!!errors.disabilityDetails}
                    helperText={errors.disabilityDetails}
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
  {location.state.email ? (
    <TextField
      label="Email"
      variant="standard"
      value={email}
      onChange={handleChange(setEmail, "email")}
      onBlur={handleBlur("email")}
      error={!!errors.email}
      helperText={errors.email}
      fullWidth
      InputProps={{
        readOnly: !!email, // Make it read-only if email is present
      }}
    />
  ) : (
    <TextField
      label="Phone No"
      variant="standard"
      value={phoneNo}
      onChange={handleChange(setPhoneNo, "phoneNo")}
      onBlur={handleBlur("phoneNo")}
      error={!!errors.phoneNo}
      helperText={errors.phoneNo}
      fullWidth
      InputProps={{
        readOnly: !!phoneNo, // Make it read-only if phoneNo is present
      }}
    />
  )}
</Grid>

             
              <Grid item xs={12}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.hobbies}
                >
                  <InputLabel id="hobbies-label">Hobbies</InputLabel>
                  <Select
                    labelId="hobbies-label"
                    multiple
                    value={hobbies}
                    onChange={handleChange(setHobbies, "hobbies")}
                    onClose={handleHobbiesClose}
                    onOpen={handleHobbiesOpen}
                    open={hobbiesOpen}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {hobbiesOptions.map((hobby) => (
                      <MenuItem key={hobby} value={hobby}>
                        <Checkbox checked={hobbies.indexOf(hobby) > -1} />
                        <ListItemText primary={hobby} />
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.hobbies && (
                    <FormHelperText>{errors.hobbies}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={handleProfileNext}
                sx={{
                  backgroundColor: "#FB6A6B",
                  "&:hover": {
                    backgroundColor: "#FB6A6B",
                  },
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>

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
  </ThemeProvider>
);
}

export default ProfileDetails;
