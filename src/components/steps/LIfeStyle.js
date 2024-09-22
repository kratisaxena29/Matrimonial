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
  useMediaQuery,
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function LifeStyle() {
  const location = useLocation();
  const storedData = JSON.parse(sessionStorage.getItem("userData"));
  const [diet, setDiet] = useState(location?.state?.diet || storedData.diet || "");
  const [alcohol, setAlcohol] = useState(location?.state?.alcohol || storedData.alcohol ||"");
  const [smoke, setSmoke] = useState(location?.state?.smoke || storedData.smoke || "");
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
      // New family details data fields
      const familyDetailsData = {
        diet,
        alcohol,
        smoke,
      };
  
      // Retrieve the existing data from sessionStorage
      let existingData = JSON.parse(sessionStorage.getItem("userData")) || {};
  
      // Merge previous data with new family details data
      const updatedData = { ...existingData, ...location.state, ...familyDetailsData };
  
      // Save the merged data back to sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(updatedData));
  
      // Navigate to the next page with the updated data
      navigate("/family-details", {
        state: { ...updatedData },
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
  const isMobile = useMediaQuery('(max-width:768px)');

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
            justifyContent: "center", // Center the logo on smaller screens
          }}
        >
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </nav>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flex: 1,
            padding: isMobile ? "20px" : "0", // Add padding on mobile
          }}
        >
          <div
            style={{
              // flex: 1,
              backgroundColor: "#F7E7CE",
              textAlign: "center",
              padding: "20px", // Increased padding for better spacing on small screens
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: isMobile ? "none" : "2", // Adjust flex basis for mobile
              order: isMobile ? 1 : 2, //
            }}
          >
            <MonitorHeartIcon
              style={{ fontSize: 60, marginBottom: 10, color: "#6B0D37" }}
            />{" "}
            {/* Reduced icon size for mobile */}
            <Typography variant="h5" component="div" sx={{ color: "#6B0D37" }}>
              {" "}
              {/* Reduced text size */}
              "Embrace the magic of love as we help you find the one who makes
              your heart skip a beat."
            </Typography>
          </div>
          <div
            style={{
              padding: "20px 10px", // Adjust padding for mobile
            flex: isMobile ? "none" : "2", // Adjust flex basis for mobile
            order: isMobile ? 1 : 2, //ced padding for mobile
            }}
          >
            <div>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h6"
                gutterBottom
              >
                {" "}
                {/* Reduced text size */}
                Living Style Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // Stack inputs vertically on smaller screens
                  alignItems: "center",
                  gap: "20px", // Reduced gap for better spacing on small screens
                  marginBottom: "20px", // Reduced margin for mobile
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ width: "100%" }}
                  // error={Boolean(errors.diet)}
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
                    <MenuItem value="Eggitarian">Eggitarian</MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                  </Select>
                  {/* {errors.diet && (
                    <FormHelperText>{errors.diet}</FormHelperText>
                  )} */}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // Stack inputs vertically on smaller screens
                  alignItems: "center",
                  gap: "20px", // Reduced gap for better spacing on small screens
                  marginBottom: "20px", // Reduced margin for mobile
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ width: "100%" }}
                  // error={Boolean(errors.alcohol)}
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
                    <MenuItem value="Occasionally">Occasionally</MenuItem>
                    <MenuItem value="Social Drinker">Social Drinker</MenuItem>
                    <MenuItem value="Regular Drinker">Regular Drinker</MenuItem>
                    <MenuItem value="Non-drinker">Non-drinker</MenuItem>
                  </Select>
                  {/* {errors.alcohol && (
                    <FormHelperText>{errors.alcohol}</FormHelperText>
                  )} */}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // Stack inputs vertically on smaller screens
                  alignItems: "center",
                  gap: "20px", // Reduced gap for better spacing on small screens
                  marginBottom: "20px", // Reduced margin for mobile
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ width: "100%" }}
                  // error={Boolean(errors.smoke)}
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
                    <MenuItem value="Non-smoker">Non-smoker</MenuItem>
                    <MenuItem value="Social Smoker">Social Smoker</MenuItem>
                    <MenuItem value="Regularly">Regular-Smoker</MenuItem>
                    <MenuItem value="Occasionally">Occasionally</MenuItem>
                  </Select>
                  {/* {errors.smoke && (
                    <FormHelperText>{errors.smoke}</FormHelperText>
                  )} */}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "10px", // Reduced gap between buttons for mobile
                  marginBottom: "20px", // Reduced margin for mobile
                }}
              >
                <Button
                  onClick={() =>
                    navigate("/horoscope", { state: { ...location.state } })
                  }
                  variant="outlined"
                  sx={{
                    width: "120px", // Adjusted width for mobile
                    height: "40px",
                    textTransform: "inherit",
                    fontSize: "16px", // Adjusted font size for mobile
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
                    width: "120px", // Adjusted width for mobile
                    height: "40px",
                    textTransform: "inherit",
                    fontSize: "16px", // Adjusted font size for mobile
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

export default LifeStyle;
