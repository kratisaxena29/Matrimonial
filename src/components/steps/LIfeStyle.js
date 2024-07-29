import React, { useState, useEffect } from "react";
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
import dayjs from "dayjs";

function LifeStyle() {
  const location = useLocation();
  const [diet, setDiet] = useState(location?.state?.diet || "");
  const [alcohol, setAlcohol] = useState(location?.state?.alcohol || "");
  const [smoke, setSmoke] = useState(location?.state?.smoke || "");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

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
    if (!diet) newErrors.diet = "Diet is required";
    if (!alcohol) newErrors.alcohol = "Alcohol consumption status is required";
    if (!smoke) newErrors.smoke = "Smoking status is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
  }, [diet, alcohol, smoke]);

  const handleNext = () => {
    if (validate()) {
      navigate("/family-details", {
        state: {
          ...location.state,
          diet,
          alcohol,
          smoke,
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
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
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
          <div
            style={{
              flex: 1,
              backgroundColor: "#F7E7CE",
              textAlign: "center",
              padding: "10px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MonitorHeartIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Embrace the magic of love as we help you find the one who makes your heart skip a beat."
            </Typography>
          </div>
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
                Living Style Details
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
                <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.diet)}>
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
                <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.alcohol)}>
                  <InputLabel id="alcohol-label">Alcohol</InputLabel>
                  <Select
                    labelId="alcohol-label"
                    id="alcohol"
                    name="alcohol"
                    value={alcohol}
                    onChange={handleInputChange}
                    label="Alcohol"
                  >
                     <MenuItem value="Occasionally">Occasionally</MenuItem>
                    <MenuItem value="Social Drinker">Social Drinker</MenuItem>
                    <MenuItem value="Regular Drinker">Regular Drinker</MenuItem>
                    <MenuItem value="Non-drinker">Non-drinker</MenuItem>
                   
                  </Select>
                  {errors.alcohol && <FormHelperText>{errors.alcohol}</FormHelperText>}
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
                <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.smoke)}>
                  <InputLabel id="smoke-label">Smoke</InputLabel>
                  <Select
                    labelId="smoke-label"
                    id="smoke"
                    name="smoke"
                    value={smoke}
                    onChange={handleInputChange}
                    label="Smoke"
                  >
                    

                    <MenuItem value="Yes">Non-smoker</MenuItem>
                    <MenuItem value="No">Social Smoker</MenuItem>
                    <MenuItem value="Regularly">Regular-Smoker</MenuItem>
                    <MenuItem value="Occasionally">Occasionally</MenuItem>
                  </Select>
                  {errors.smoke && <FormHelperText>{errors.smoke}</FormHelperText>}
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
                  onClick={() => navigate("/horoscope", { state: { ...location.state } })}
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
                  disabled={!isFormValid}
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
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
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
                    href="mailto:thedreamytrails@gmail.com"
                    style={{ textDecoration: "none", color: "#FFBF0E" }}
                  >
                    thedreamytrails@gmail.com
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
    </ThemeProvider>
  );
}

export default LifeStyle;
