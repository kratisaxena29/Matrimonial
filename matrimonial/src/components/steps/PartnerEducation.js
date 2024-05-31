import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarsIcon from '@mui/icons-material/Stars';
import { useLocation, useNavigate } from "react-router-dom";

function PartnerEducation() {
  const [part_highestEducation, setHighestEducation] = useState("");
  const [part_currentEmployment, setCurrentEmployment] = useState("");
  const [part_profession, setProfession] = useState("");
  const [part_annualIncome, setAnnualIncome] = useState("");
  const [part_yearsOfExperience, setYearsOfExperience] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();
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

  const handleNext = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/partner-living', {
        state: {
          ...location.state,
          part_highestEducation,
          part_currentEmployment,
          part_profession,
          part_annualIncome,
          part_yearsOfExperience
        }
      });
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!part_highestEducation.trim()) {
      errors.highestEducation = "Highest Education is required";
    }
    if (!part_currentEmployment.trim()) {
      errors.currentEmployment = "Current Employment is required";
    }
    if (!part_profession.trim()) {
      errors.profession = "Profession is required";
    }
    if (!part_annualIncome.trim()) {
      errors.annualIncome = "Annual Income is required";
    }
    if (!part_yearsOfExperience.trim()) {
      errors.yearsOfExperience = "Years of Experience is required";
    }
    return errors;
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        </nav>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1, backgroundColor: "#FFE5E7", textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <StarsIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Join us in the quest for love, where every profile is a chapter waiting to be written in the book of destiny."
            </Typography>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "50px" }}>
            <div>
              <Typography sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }} variant="h5" gutterBottom>
                Please fill your desired partner details
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Education and Career
              </Typography>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300, marginTop: "10px" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Highest Education
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={part_highestEducation}
                    onChange={(event) => setHighestEducation(event.target.value)}
                    error={errors.highestEducation ? true : false}
                  >
                    <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
                    <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                    <MenuItem value="Post Master's Degree">Post Master's Degree</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                    <MenuItem value="Non-Bachelor's Degree">Non-Bachelor's Degree</MenuItem>
                  </Select>
                  {errors.highestEducation && <Typography variant="caption" sx={{ color: 'red' }}>{errors.highestEducation}</Typography>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Current Employment"
                  variant="standard"
                  value={part_currentEmployment}
                  onChange={(event) => setCurrentEmployment(event.target.value)}
                  error={errors.currentEmployment ? true : false}
                  helperText={errors.currentEmployment}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Profession"
                  variant="standard"
                  value={part_profession}
                  onChange={(event) => setProfession(event.target.value)}
                  error={errors.profession ? true : false}
                  helperText={errors.profession}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Annual Income"
                  variant="standard"
                  value={part_annualIncome}
                  onChange={(event) => setAnnualIncome(event.target.value)}
                  error={errors.annualIncome ? true : false}
                  helperText={errors.annualIncome}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Years of Experience"
                  variant="standard"
                  value={part_yearsOfExperience}
                  onChange={(event) => setYearsOfExperience(event.target.value)}
                  error={errors.yearsOfExperience ? true : false}
                  helperText={errors.yearsOfExperience}
                />
              </div>
            {/* </div> */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                {/* <Button
                  onClick={() => navigate('/')}
                  variant="outlined"
                  color="error"
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                    // borderColor: "red",
                    // color: "#FB6A6B",
                  }}
                >
                  Cancel
                </Button> */}
                <Button
                  onClick={() => navigate('/partner-family')}
                  variant="outlined"
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                    borderColor: "#FB6A6B",
                    color: "#FB6A6B",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
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
          <div>&copy; 2024 <span style={{ color: "#FFBF00	"}}>SoulMatch</span> All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default PartnerEducation;
