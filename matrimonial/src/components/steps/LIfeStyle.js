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
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useLocation, useNavigate } from "react-router-dom";

function LifeStyle() {
  const [diet, setDiet] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [smoke, setSmoke] = useState("");
  const [interest, setInterest] = useState("");
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
    if (!diet) newErrors.diet = "Diet is required";
    if (!alcohol) newErrors.alcohol = "Alcohol consumption status is required";
    if (!smoke) newErrors.smoke = "Smoking status is required";
    if (!interest) newErrors.interest = "Interests are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
// data
  const handleNext = () => {
    if (validate()) {
      navigate("/family-details", {
        state: {
          diet: diet,
          alcohol: alcohol,
          smoke: smoke,
          interest: interest,
          dateofBirth: location.state.dateofBirth,
          timeofBirth: location.state.timeofBirth,
          placeofBirth: location.state.placeofBirth,
          areyouManglik: location.state.areyouManglik,
          highestEduction: location.state.highestEduction,
          currentEmployes: location.state.currentEmployes,
          profession: location.state.profession,
          annualIncome: location.state.annualIncome,
          yearsOfExperience: location.state.yearsOfExperience,
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
          email: location.state.email,
        },
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "diet":
        setDiet(value);
        break;
      case "alcohol":
        setAlcohol(value);
        break;
      case "smoke":
        setSmoke(value);
        break;
      case "interest":
        setInterest(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
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
            {/* MUI icon */}
            <MonitorHeartIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Embrace the magic of love as we help you find the one who makes
              your heart skip a beat."
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
                Living Style Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                  //   marginTop: "20px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 300 }}
                  error={Boolean(errors.diet)}
                >
                  <InputLabel id="diet-label">Diet</InputLabel>
                  <Select
                    labelId="diet-label"
                    id="diet"
                    name="diet"
                    value={diet}
                    onChange={handleInputChange}
                    label="Diet"
                  >
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                    <MenuItem value="Non-vegetarian">Non-vegetarian</MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                  </Select>
                  {errors.diet && <FormHelperText>{errors.diet}</FormHelperText>}
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
                  sx={{ minWidth: 300 }}
                  error={Boolean(errors.alcohol)}
                >
                  <InputLabel id="alcohol-label">Alcohol</InputLabel>
                  <Select
                    labelId="alcohol-label"
                    id="alcohol"
                    name="alcohol"
                    value={alcohol}
                    onChange={handleInputChange}
                    label="Alcohol"
                  >
                    <MenuItem value="Social Drinker">Social Drinker</MenuItem>
                    <MenuItem value="Regular Drinker">Regular Drinker</MenuItem>
                    <MenuItem value="Non-drinker">Non-drinker</MenuItem>
                  </Select>
                  {errors.alcohol && (
                    <FormHelperText>{errors.alcohol}</FormHelperText>
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
                  sx={{ minWidth: 300 }}
                  error={Boolean(errors.smoke)}
                >
                  <InputLabel id="smoke-label">Smoke</InputLabel>
                  <Select
                    labelId="smoke-label"
                    id="smoke"
                    name="smoke"
                    value={smoke}
                    onChange={handleInputChange}
                    label="Smoke"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.smoke && (
                    <FormHelperText>{errors.smoke}</FormHelperText>
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
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Interests"
                  name="interest"
                  variant="standard"
                  value={interest}
                  onChange={handleInputChange}
                  error={Boolean(errors.interest)}
                  helperText={errors.interest}
                />
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
                  onClick={() => navigate("/horoscope")}
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
          <div>
            &copy; 2024{" "}
            <span style={{ color: "#FFBF00" }}>SoulMatch</span> All rights
            reserved.
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

export default LifeStyle;
