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
  Checkbox, ListItemText
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileDetails() {
  const location = useLocation();
  const [name, setName] = useState(location?.state?.name || "");
  const [gender, setGender] = useState(location?.state?.gender || "");
  const [age, setAge] = useState(location?.state?.age || "");
  const [maritalStatus, setMaritalStatus] = useState(
    location?.state?.maritalStatus || ""
  );
  const [nationality, setNationality] = useState(
    location?.state?.nationality || ""
  );
  const [city, setCity] = useState(location?.state?.city || "");
  const [religion, setReligion] = useState(location?.state?.religion || "");
  const [disability, setDisability] = useState(
    location?.state?.disability || ""
  );
  const [disabilityDetails, setDisabilityDetails] = useState(
    location?.state?.disabilityDetails || ""
  );
  const [email, setEmail] = useState(location?.state?.email || "");
  const [phoneNo, setPhoneNo] = useState(location?.state?.phoneno || "");
  const [address, setAddress] = useState(location?.state?.address || "");
  const [hobbies, setHobbies] = useState(location?.state?.hobbies || []);
  const [indianCities, setIndianCities] = useState(
    location?.state?.indianCities || []
  );
  const [isNRI, setIsNRI] = useState(
    location?.state?.nationality && location?.state?.nationality !== "Indian"
  );
  const [country, setCountry] = useState(location?.state?.country || "");

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
      case "phoneNo":
        if (!value) newErrors.phoneNo = "Phone number is required";
        else if (value.length < 10)
          newErrors.phoneNo = "Phone number must be 10 digits";
        else if (value.length > 10)
          newErrors.phoneNo = "Phone number must not be more than 10 digits";
        else delete newErrors.phoneNo;
        break;
      case "address":
        if (!value) newErrors.address = "Address is required";
        else delete newErrors.address;
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

    if (!allFieldsValid) return;
    if (location.state.email) {
      if (email === location.state.email) {
        navigate("/additional-details", {
          state: {
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
            address,
            hobbies,
            country,
          },
        });
      } else {
        console.log("...email does not match with the registered one");
        toast.error("Email does not match with the registered one");
      }
    } else if (location.state.phoneno) {
      if (phoneNo === location.state.phoneno) {
        navigate("/additional-details", {
          state: {
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
            address,
            hobbies,
            country,
          },
        });
      } else {
        console.log("...email does not match with the registered one");
        toast.error("Phone no does not match with the registered one");
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
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ToastContainer />
        <nav
          style={{
            backgroundColor: "#6D0B32",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px", marginRight: "40px" }}
          />
        </nav>
        <div style={{ display: "flex", flex: 1 }}>
          {/* Left part */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFE5E7",
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
              "Chosen by Countless Indian Hearts Worldwide: A Premier
              Matrimonial Platform"
            </Typography>
          </div>
          {/* Right part */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "50px",
            }}
          >
            <div>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Profile Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                }}
              >
                <TextField
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={handleChange(setName, "name")}
                  onBlur={handleBlur("name")}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
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
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {errors.gender && (
                    <FormHelperText>{errors.gender}</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
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
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginLeft:110,
                  gap: "80px",
                  marginBottom: "40px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
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
                {nationality === "Indian" && (
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 200 }}
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
                )}
                {isNRI && (
                  <TextField
                    label="Country"
                    variant="standard"
                    value={country}
                    onChange={handleChange(setCountry, "city")}
                    onBlur={handleBlur("city")}
                    error={!!errors.country}
                    helperText={errors.country}
                    sx={{ marginBottom: 2 }}
                  />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
                  error={!!errors.disability}
                >
                  <InputLabel id="disability-label">
                    Differently-Abled
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
              </div>
              {disability === "Yes" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "40px",
                  }}
                >
                  <TextField
                    label="Differently-Abled Details"
                    variant="standard"
                    value={disabilityDetails}
                    onChange={handleChange(
                      setDisabilityDetails,
                      "disabilityDetails"
                    )}
                    onBlur={handleBlur("disabilityDetails")}
                    error={!!errors.disabilityDetails}
                    helperText={errors.disabilityDetails}
                    sx={{ width: 490 }}
                  />
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "70px",
                  marginBottom: "40px",
                }}
              >
                {location.state.email && (
                  <TextField
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={handleChange(setEmail, "email")}
                    onBlur={handleBlur("email")}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                )}
                {location.state.phoneno && (
                  <TextField
                    label="Phone No"
                    variant="standard"
                    value={phoneNo}
                    onChange={handleChange(setPhoneNo, "phoneNo")}
                    onBlur={handleBlur("phoneNo")}
                    error={!!errors.phoneNo}
                    helperText={errors.phoneNo}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                )}
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
                  error={!!errors.hobbies}
                  // fullWidth
                >
                  <InputLabel id="hobbies-label">Hobbies</InputLabel>
                  <Select
                    labelId="hobbies-label"
                    id="hobbies-select"
                    multiple
                    value={hobbies}
                    onChange={handleChange(setHobbies, "hobbies")}
                    onClose={handleHobbiesClose}
                    onOpen={handleHobbiesOpen}
                    open={hobbiesOpen}
                    renderValue={(selected) => selected.join(", ")}
                    label="Hobbies"
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
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "40px",
                }}
              >
                <TextField
                  label="Address"
                  variant="standard"
                  value={address}
                  onChange={handleChange(setAddress, "address")}
                  onBlur={handleBlur("address")}
                  error={!!errors.address}
                  helperText={errors.address}
                  sx={{ width: 490 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "40px",
                }}
              ></div>
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
                  // color="primary"
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
          </div>
        </div>
        <footer
          style={{
            backgroundColor: "#530014",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          <div>
            <Facebook style={{ marginRight: "10px" }} />
            <Instagram style={{ marginRight: "10px" }} />
            <Twitter style={{ marginRight: "10px" }} />
          </div>
          <div>
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
          </div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default ProfileDetails;
