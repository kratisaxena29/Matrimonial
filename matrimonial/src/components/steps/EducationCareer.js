import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { useLocation, useNavigate } from "react-router-dom";

function EducationCareer() {
  const [highestEduction, setHighestEduction] = useState("");
  const [currentEmployes, setCurrentEmployes] = useState("");
  const [profession, setProfession] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    setIsFormValid(
      highestEduction &&
      currentEmployes &&
      profession &&
      annualIncome &&
      yearsOfExperience
    );
  }, [highestEduction, currentEmployes, profession, annualIncome, yearsOfExperience]);

  const handleNext = async () => {
    navigate('/horoscope', {
      state: {
        highestEduction: highestEduction,
        currentEmployes: currentEmployes,
        profession: profession,
        annualIncome: annualIncome,
        yearsOfExperience: yearsOfExperience,
        caste: location.state.caste,
        subCaste: location.state.subCaste,
        origin: location.state.origin,
        mothertongue: location.state.motherTongue,
        height: location.state.height,
        weight: location.state.weight,
        gothra: location.state.gothra,
        petFriendly: location.state.petFriendly,
        age: location.state.age,
        city: location.state.city,
        disability: location.state.disability,
        gender: location.state.gender,
        maritalStatus: location.state.maritalStatus,
        name: location.state.name,
        nationality: location.state.nationality,
        religion: location.state.religion,
        email: location.state.email
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        </nav>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{
            flex: 1,
            backgroundColor: "#FFE5E7",
            textAlign: "center",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <SchoolIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Love knows no boundaries, and neither do we. Explore endless possibilities in finding your Better half"
            </Typography>
          </div>
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "50px",
          }}>
            <div>
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Education and Career
              </Typography>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}>
                <FormControl variant="standard" sx={{ minWidth: 300, marginTop: "10px" }} error={!highestEduction}>
                  <InputLabel id="highest-education-label">Highest Education</InputLabel>
                  <Select
                    labelId="highest-education-label"
                    id="highest-education-select"
                    value={highestEduction}
                    onChange={(event) => setHighestEduction(event.target.value)}
                    label="Highest Education"
                  >
                    <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
                    <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                    <MenuItem value="Post Master's Degree">Post Master's Degree</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                    <MenuItem value="Non-Bachelor's Degree">Non-Bachelor's Degree</MenuItem>
                  </Select>
                  {!highestEduction && <FormHelperText>Highest education is required</FormHelperText>}
                </FormControl>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Current Employment"
                  variant="standard"
                  value={currentEmployes}
                  onChange={(event) => setCurrentEmployes(event.target.value)}
                  error={!currentEmployes}
                  helperText={!currentEmployes ? "Current employment is required" : ""}
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Profession"
                  variant="standard"
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  error={!profession}
                  helperText={!profession ? "Profession is required" : ""}
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Annual Income"
                  variant="standard"
                  value={annualIncome}
                  onChange={(event) => setAnnualIncome(event.target.value)}
                  error={!annualIncome}
                  helperText={!annualIncome ? "Annual income is required" : ""}
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Years of Experience"
                  variant="standard"
                  value={yearsOfExperience}
                  onChange={(event) => setYearsOfExperience(event.target.value)}
                  error={!yearsOfExperience}
                  helperText={!yearsOfExperience ? "Years of experience is required" : ""}
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}>
                <Button
                  onClick={() => navigate('/additional-details')}
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
                  disabled={!isFormValid}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer style={{
          backgroundColor: "#530014",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}>
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

export default EducationCareer;
