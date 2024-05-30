import React, { useState } from "react";
import logo from "../../images/logo.png";
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
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { useLocation, useNavigate } from "react-router-dom";

function Horoscope() {
  const [dateofBirth, setDateofBirth] = useState("");
  const [timeofBirth, setTimeofBirth] = useState("");
  const [placeofBirth, setPlaceofBirth] = useState("");
  const [areyouManglik, setAreyouManglik] = useState("");
  const [message, setMessage] = useState("");
  const [messageDisabled, setMessageDisabled] = useState(false);

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

  const validate = () => {
    const newErrors = {};
    if (!dateofBirth) newErrors.dateofBirth = "Date of Birth is required";
    if (!timeofBirth) newErrors.timeofBirth = "Time of Birth is required";
    if (!placeofBirth) newErrors.placeofBirth = "Place of Birth is required";
    if (!areyouManglik) newErrors.areyouManglik = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/lifestyle", {
        state: {
          dateofBirth,
          timeofBirth,
          placeofBirth,
          areyouManglik,
          highestEduction: location.state.highestEduction,
          currentEmployes: location.state.currentEmployes,
          profession: location.state.profession,
          annualIncome: location.state.annualIncome,
          yearsOfExperience: location.state.yearsOfExperience,
          caste: location.state.caste,
          subCaste: location.state.subCaste,
          origin: location.state.origin,
          mothertongue: location.state.mothertongue,
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
          email: location.state.email,
          message
        },
      });
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTyping = () => {
    setMessageDisabled(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
            <VolunteerActivismIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Let us be the bridge to your happily ever after. Start your journey to love with us today."
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
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Horoscope Details
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
                  sx={{ minWidth: 300 }}
                  label="Date of Birth"
                  variant="standard"
                  value={dateofBirth}
                  onChange={(event) => setDateofBirth(event.target.value)}
                  error={Boolean(errors.dateofBirth)}
                  helperText={errors.dateofBirth}
                />
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
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Time of Birth"
                  variant="standard"
                  value={timeofBirth}
                  onChange={(event) => setTimeofBirth(event.target.value)}
                  error={Boolean(errors.timeofBirth)}
                  helperText={errors.timeofBirth}
                />
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
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Place of Birth"
                  variant="standard"
                  value={placeofBirth}
                  onChange={(event) => setPlaceofBirth(event.target.value)}
                  error={Boolean(errors.placeofBirth)}
                  helperText={errors.placeofBirth}
                />
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
                <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.areyouManglik)}>
                  <InputLabel id="manglik-label">Are you Manglik?</InputLabel>
                  <Select
                    labelId="manglik-label"
                    id="manglik-select"
                    value={areyouManglik}
                    onChange={(event) => setAreyouManglik(event.target.value)}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.areyouManglik && <FormHelperText>{errors.areyouManglik}</FormHelperText>}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                <Button
                  onClick={() => navigate('/education-career')}
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

export default Horoscope;
