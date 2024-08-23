import React, { useState, useEffect, useCallback } from "react";
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
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";

function Horoscope() {
  const location = useLocation();
  const [dateofBirth, setDateofBirth] = useState(null);
  const [timeofBirth, setTimeofBirth] = useState(null);
  const [placeofBirth, setPlaceofBirth] = useState(location?.state?.placeofBirth || "");
  const [areyouManglik, setAreyouManglik] = useState(location?.state?.areyouManglik || "");
  const [message, setMessage] = useState("");
  const [indianCities, setIndianCities] = useState(location?.state?.indianCities || []);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

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
    const fetchData = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
        const allCities = response.data.data;
        const indianCities = allCities.filter((city) => city.country === "India");
        const indianCityNames = indianCities.map((city) => city.city);
        setIndianCities(indianCityNames);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!dateofBirth) newErrors.dateofBirth = "Date of Birth is required";
    // if (!timeofBirth) newErrors.timeofBirth = "Time of Birth is required";
    // if (!placeofBirth) newErrors.placeofBirth = "Place of Birth is required";
    if (!areyouManglik) newErrors.areyouManglik = null;
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [dateofBirth, timeofBirth, placeofBirth, areyouManglik]);

  useEffect(() => {
    validate(); // Validate the form whenever a field changes
  }, [dateofBirth, timeofBirth, placeofBirth, areyouManglik, validate]);

  const handleNext = () => {
    if (isFormValid) {
      navigate("/lifestyle", {
        state: {
          ...location.state,
          dateofBirth,
          timeofBirth,
          placeofBirth,
          areyouManglik,
          message,
        },
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'placeofBirth':
        setPlaceofBirth(value);
        break;
      case 'areyouManglik':
        setAreyouManglik(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
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
              style={{
                height: isMobile ? "50px" : "60px",
                marginRight: isMobile ? "20px" : "40px",
              }}
            />
          </nav>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              padding: isMobile ? "20px" : "0",
            }}
          >
            {/* Left part */}
            <div
              style={{
                backgroundColor: "#F7E7CE",
                textAlign: "center",
                padding: isMobile ? "20px 10px" : "50px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: isMobile ? "none" : "1",
              }}
            >
              <VolunteerActivismIcon
                style={{
                  fontSize: isMobile ? 60 : 80,
                  marginBottom: 10,
                  color: "#6B0D37",
                }}
              />
              <Typography
                variant={isMobile ? "h6" : "h4"}
                component="div"
                sx={{
                  color: "#6B0D37",
                  padding: isMobile ? "0 10px" : "0",
                }}
              >
                "Let us be the bridge to your happily ever after. Start your
                journey to love with us today."
              </Typography>
            </div>
            {/* Right part */}
            <div
              style={{
                flex: isMobile ? "none" : "1",
                order: isMobile ? 1 : 2,
                padding: isMobile ? "20px 10px" : "50px",
                marginLeft: isMobile ? "0" : "50px",
                marginRight: isMobile ? "0" : "50px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  marginBottom: isMobile ? "20px" : "30px",
                }}
                variant={isMobile ? "h6" : "h5"}
                gutterBottom
              >
                Horoscope Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: isMobile ? "20px" : "30px",
                  marginBottom: isMobile ? "20px" : "30px",
                }}
              >
                <DatePicker
                  label="Date of Birth"
                  value={dateofBirth}
                  onChange={(date) => setDateofBirth(date ? dayjs(date) : null)}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(errors.dateofBirth)}
                      helperText={errors.dateofBirth}
                      sx={{ width: "100%" }}
                      fullWidth
                    />
                  )}
                />
                <TimePicker
                  label="Time of Birth"
                  value={timeofBirth}
                  sx={{ width: "100%" }}
                  onChange={(time) => setTimeofBirth(time ? dayjs(time) : null)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(errors.timeofBirth)}
                      helperText={errors.timeofBirth}
                      sx={{ minWidth: "100%" }}
                    />
                  )}
                />
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: "100%" }}
                  error={Boolean(errors.placeofBirth)}
                >
                  <InputLabel id="place-of-birth-label">Place of Birth</InputLabel>
                  <Select
                    labelId="place-of-birth-label"
                    id="place-of-birth-select"
                    name="placeofBirth"
                    value={placeofBirth}
                    onChange={handleInputChange}
                  >
                    {indianCities.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.placeofBirth && (
                    <FormHelperText>{errors.placeofBirth}</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: "100%" }}
                  error={Boolean(errors.areyouManglik)}
                >
                  <InputLabel id="manglik-label">Are you Manglik?</InputLabel>
                  <Select
                    labelId="manglik-label"
                    id="manglik-select"
                    name="areyouManglik"
                    value={areyouManglik}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {errors.areyouManglik && (
                    <FormHelperText>{errors.areyouManglik}</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px", // Adjust gap for mobile
                  marginTop: "20px",
                  width: "100%", // Make buttons full width on mobile
                }}
              >
                <Button
                  onClick={() => navigate('/education-career', { state: location?.state })}
                  variant="outlined"
                  sx={{
                    width: "100px", // Adjust button width for mobile
                    borderColor: "#FB6A6B",
                    color: "#FB6A6B",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  variant="contained"
                  disabled={!isFormValid}
                  sx={{
                    width: "100px", // Adjust button width for mobile
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
          <section>
          <div className="cr">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                
                <p style={{ textAlign: "center" }}>
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
                <p>
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
      </LocalizationProvider>
    </ThemeProvider>
  );
  
}

export default Horoscope;
