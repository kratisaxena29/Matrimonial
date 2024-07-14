import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import axios from 'axios';

function ProfileDetails() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [religion, setReligion] = useState("");
  const [disability, setDisability] = useState("");
  const [disabilityDetails, setDisabilityDetails] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [indianCities, setIndianCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!age) newErrors.age = "Age is required";
    if (!maritalStatus) newErrors.maritalStatus = "Marital status is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    if (!city) newErrors.city = "City is required";
    if (!religion) newErrors.religion = "Religion is required";
    if (disability === "Yes" && !disabilityDetails) newErrors.disabilityDetails = "Please provide details about your disability";
    if (!email) newErrors.email = "Email is required";
    if (!phoneNo) newErrors.phoneNo = "Phone number is required";
    if (!address) newErrors.address = "Address is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileNext = async () => {
    if (!validate()) return;

    navigate('/additional-details', {
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
        address
      }
    });
  };

  const handleChange = (setter, fieldName) => (event) => {
    setter(event.target.value);
    setErrors(prevErrors => ({ ...prevErrors, [fieldName]: "" }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
        const allCities = response.data.data;
        const indianCities = allCities.filter(city => city.country === "India");
        const indianCityNames = indianCities.map(city => city.city);
        setIndianCities(indianCityNames);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Optional: Use this for debugging if needed
    if (process.env.NODE_ENV === 'development') {
      console.log("State Values:");
      console.log("name:", name);
      console.log("gender:", gender);
      console.log("age:", age);
      console.log("maritalStatus:", maritalStatus);
      console.log("nationality:", nationality);
      console.log("city:", city);
      console.log("religion:", religion);
      console.log("disability:", disability);
      console.log("disabilityDetails:", disabilityDetails);
      console.log("email:", email);
      console.log("phoneNo:", phoneNo);
      console.log("address:", address);
      console.log("indianCities:", indianCities);
    }
  }, [name, gender, age, maritalStatus, nationality, city, religion, disability, disabilityDetails, email, phoneNo, address, indianCities]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        </nav>
        <div style={{ display: "flex", flex: 1 }}>
          {/* Left part */}
          <div style={{ flex: 1, backgroundColor: "#FFE5E7", textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <WorkspacePremiumIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Chosen by Countless Indian Hearts Worldwide: A Premier Matrimonial Platform"
            </Typography>
          </div>
          {/* Right part */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "50px" }}>
            <div>
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Profile Details
              </Typography>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={handleChange(setName, "name")}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <FormControl variant="standard" sx={{ minWidth: 200 }} error={!!errors.gender}>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    value={gender}
                    onChange={handleChange(setGender, "gender")}
                    label="Gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                  {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  label="Age"
                  variant="standard"
                  value={age}
                  onChange={handleChange(setAge, "age")}
                  error={!!errors.age}
                  helperText={errors.age}
                />
                <FormControl variant="standard" sx={{ minWidth: 200 }} error={!!errors.maritalStatus}>
                  <InputLabel id="marital-status-label">Marital Status</InputLabel>
                  <Select
                    labelId="marital-status-label"
                    value={maritalStatus}
                    onChange={handleChange(setMaritalStatus, "maritalStatus")}
                    label="Marital Status"
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Divorced">Divorced</MenuItem>
                    <MenuItem value="Widowed">Widowed</MenuItem>
                    <MenuItem value="Annulled">Annulled</MenuItem>
                  </Select>
                  {errors.maritalStatus && <FormHelperText>{errors.maritalStatus}</FormHelperText>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 195 }} error={!!errors.nationality}>
                  <InputLabel id="nationality-label">Nationality</InputLabel>
                  <Select
                    labelId="nationality-label"
                    value={nationality}
                    onChange={handleChange(setNationality, "nationality")}
                    label="Nationality"
                  >
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="NRI">NRI</MenuItem>
                  </Select>
                  {errors.nationality && <FormHelperText>{errors.nationality}</FormHelperText>}
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 200 }} error={!!errors.city}>
                  <InputLabel id="city-label">City</InputLabel>
                  <Select
                    labelId="city-label"
                    value={city}
                    onChange={handleChange(setCity, "city")}
                    label="City"
                  >
                    {indianCities.map((cityName, index) => (
                      <MenuItem key={index} value={cityName}>
                        {cityName}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.city && <FormHelperText>{errors.city}</FormHelperText>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
                <TextField
                  label="Phone No"
                  variant="standard"
                  value={phoneNo}
                  onChange={handleChange(setPhoneNo, "phoneNo")}
                  error={!!errors.phoneNo}
                  helperText={errors.phoneNo}
                  sx={{ width: "45%" }}
                />
                <TextField
                  label="Address"
                  variant="standard"
                  value={address}
                  onChange={handleChange(setAddress, "address")}
                  error={!!errors.address}
                  helperText={errors.address}
                  sx={{ width: "45%" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 200 }} error={!!errors.religion}>
                  <InputLabel id="religion-label">Religion</InputLabel>
                  <Select
                    labelId="religion-label"
                    value={religion}
                    onChange={handleChange(setReligion, "religion")}
                    label="Religion"
                  >
                    <MenuItem value=""><em>Select Religion</em></MenuItem>
                    <MenuItem value="Any">Any</MenuItem>
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Muslim">Muslim</MenuItem>
                    <MenuItem value="Jain">Jain</MenuItem>
                    <MenuItem value="Christian">Christian</MenuItem>
                  </Select>
                  {errors.religion && <FormHelperText>{errors.religion}</FormHelperText>}
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 200 }} error={!!errors.disability}>
                  <InputLabel id="disability-label">Disability</InputLabel>
                  <Select
                    labelId="disability-label"
                    value={disability}
                    onChange={handleChange(setDisability, "disability")}
                    label="Disability"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.disability && <FormHelperText>{errors.disability}</FormHelperText>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", gap: "80px" }}>
                {disability === "Yes" && (
                  <TextField
                    label="Enter details about your disability"
                    variant="standard"
                    value={disabilityDetails}
                    onChange={handleChange(setDisabilityDetails, "disabilityDetails")}
                    sx={{ minWidth: 200 }}
                    error={!!errors.disabilityDetails}
                    helperText={errors.disabilityDetails}
                  />
                )}
                <TextField
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={handleChange(setEmail, "email")}
                  sx={{ width: disability === "Yes" ? 200 : 470 }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", marginBottom: "40px" }}>
                <Button
                  onClick={() => navigate('/')}
                  variant="outlined"
                  color="error"
                  sx={{ mt: 4, mb: 2, width: 150, height: 40, textTransform: "inherit", fontSize: "18px" }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleProfileNext}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 4, mb: 2, width: 150, height: 40, textTransform: "inherit", fontSize: "18px", backgroundColor: "#FB6A6B" }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer style={{ backgroundColor: "#530014", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff" }}>
          <div>
            <Facebook style={{ marginRight: "10px" }} />
            <Instagram style={{ marginRight: "10px" }} />
            <Twitter style={{ marginRight: "10px" }} />
          </div>
          <div>&copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All rights reserved.</div>
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
