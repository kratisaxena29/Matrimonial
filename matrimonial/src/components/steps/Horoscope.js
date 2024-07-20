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
    if (!timeofBirth) newErrors.timeofBirth = "Time of Birth is required";
    if (!placeofBirth) newErrors.placeofBirth = "Place of Birth is required";
    if (!areyouManglik) newErrors.areyouManglik = "This field is required";
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

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <div style={{ flex: 1, display: "flex" }}>
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
                  <DatePicker
                    label="Date of Birth"
                    value={dateofBirth}
                    onChange={(date) => setDateofBirth(date ? dayjs(date) : null)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={Boolean(errors.dateofBirth)}
                        helperText={errors.dateofBirth}
                        sx={{ minWidth: 300 }}
                      />
                    )}
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
                  <TimePicker
                    label="Time of Birth"
                    value={timeofBirth}
                    onChange={(time) => setTimeofBirth(time ? dayjs(time) : null)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={Boolean(errors.timeofBirth)}
                        helperText={errors.timeofBirth}
                        sx={{ minWidth: 300 }}
                      />
                    )}
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
                  <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.placeofBirth)}>
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
                    {errors.placeofBirth && <FormHelperText>{errors.placeofBirth}</FormHelperText>}
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
                  <FormControl variant="standard" sx={{ minWidth: 300 }} error={Boolean(errors.areyouManglik)}>
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
                    onClick={() => navigate('/education-career',{state : location?.state})}
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
          <footer
            style={{
              backgroundColor: "#530014",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              width: "100%",
              marginTop: "auto", // Push footer to the bottom
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
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Horoscope;
