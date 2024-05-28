import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function ProfileDetails() {

  const [name , setName] = useState("");
  const [gender, setGender] = useState("");
  const [age , setAge] = useState("");
  const [martialStatus , setMartialStatus] = useState("");
  const [nationality , setNationality] = useState("");
  const [city , setCity] = useState("");
  const [religion, setReligion] = useState("");
  const [disability, setDisability] = useState("");
  const [disabilityDetails, setDisabilityDetails] = useState("");

  const navigate = useNavigate();
  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            paddingRight: "0px", // Override the default padding-right
          },
        },
      },
    },
  });

  const handleProfileNext = async () => {
    console.log("..name..", name);
    console.log("gender..", gender);
    console.log("..age..", age);
    console.log("..martial stutus..", martialStatus);
    console.log("..nationality...", nationality);
    console.log("..city..", city);
    console.log("..religion..", religion);
    console.log("...disabiltity...", disability);
    if (disability === "Yes") {
      console.log("...disability details...", disabilityDetails);
    }
    navigate('/additional-details', { state: {
      name,
      gender,
      age,
      martialStatus,
      nationality,
      city,
      religion,
      disability,
      disabilityDetails: disability === "Yes" ? disabilityDetails : ""
    }});
  }

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
                <TextField label="Name" variant="standard" value={name} onChange={(event) => setName(event.target.value)} />
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={gender} onChange={(event) => setGender(event.target.value)} label="Gender">
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField label="Age" variant="standard" value={age} onChange={(event) => setAge(event.target.value)} />
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-standard-label">Marital Status</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={martialStatus} onChange={(event) => setMartialStatus(event.target.value)} label="Marital Status">
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Divorced">Divorced</MenuItem>
                    <MenuItem value="Widowed">Widowed</MenuItem>
                    <MenuItem value="Annulled">Annulled</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="demo-simple-select-standard-label">Nationality</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={nationality} onChange={(event) => setNationality(event.target.value)} label="Nationality">
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="NRI">NRI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="city-select-label">City</InputLabel>
                  <Select labelId="city-select-label" id="city-select" value={city} onChange={(event) => setCity(event.target.value)} label="City">
                    <MenuItem value="Mohali">Mohali</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                    <MenuItem value="Banglore">Banglore</MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Kolkata">Kolkata</MenuItem>
                    <MenuItem value="Jaipur">Jaipur</MenuItem>
                    <MenuItem value="Varanasi">Varanasi</MenuItem>
                    <MenuItem value="Agra">Agra</MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField label="Religion" variant="standard" value={religion} onChange={(event) => setReligion(event.target.value)} />
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-standard-label">Disability</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={disability} onChange={(event) => setDisability(event.target.value)} label="Disability">
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {disability === "Yes" && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                  <TextField
                    label="Please provide details about your disability"
                    variant="standard"
                    value={disabilityDetails}
                    onChange={(event) => setDisabilityDetails(event.target.value)}
                    fullWidth
                  />
                </div>
              )}
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
