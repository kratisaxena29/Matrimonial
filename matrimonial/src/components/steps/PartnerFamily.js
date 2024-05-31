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
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useLocation, useNavigate } from "react-router-dom";

function PartnerFamily() {
  const [part_ageFrom, setageFrom] = useState("");
  const [part_martialStatus, setmartialStatus] = useState("");
  const [part_religion, setReligion] = useState("");
  const [part_caste, setCaste] = useState("");
  const [part_mothertongue, setMothertongue] = useState("");
  const [part_height, setheight] = useState("");
  const [part_horoscopeMatch, setHoroscopematch] = useState("");
  const [part_petFriendly, setpart_petFriendly] = useState("");
  const [ageError, setAgeError] = useState(false);

  const [martialStatusError, setMartialStatusError] = useState(false);
  const [religionError, setReligionError] = useState(false);
  const [casteError, setCasteError] = useState(false);
  const [mothertongueError, setMotherTongueError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [horoscopeMatchError, setHoroscopeMatchError] = useState(false);
  const [petFriendlyError, setPetFriendlyError] = useState(false);

  const location = useLocation();
  console.log("...partner location ", location.state);
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

  const handleNext = async () => {
    if (!part_ageFrom) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    if (!part_martialStatus) {
      setMartialStatusError(true);
    } else {
      setMartialStatusError(false);
    }

    if (!part_religion) {
      setReligionError(true);
    } else {
      setReligionError(false);
    }

    if (!part_caste) {
      setCasteError(true);
    } else {
      setCasteError(false);
    }

    if (!part_mothertongue) {
      setMotherTongueError(true);
    } else {
      setMotherTongueError(false);
    }

    if (!part_height) {
      setHeightError(true);
    } else {
      setHeightError(false);
    }

    if (!part_horoscopeMatch) {
      setHoroscopeMatchError(true);
    } else {
      setHoroscopeMatchError(false);
    }

    if (!part_petFriendly) {
      setPetFriendlyError(true);
    } else {
      setPetFriendlyError(false);
    }

    if (
      part_ageFrom &&
      part_martialStatus &&
      part_religion &&
      part_caste &&
      part_mothertongue &&
      part_height &&
      part_horoscopeMatch &&
      part_petFriendly
    ) {
      navigate("/partner-education", {
        state: {
          ...location.state,
          part_ageFrom,
          part_martialStatus,
          part_religion,
          part_caste,
          part_mothertongue,
          part_height,
          part_horoscopeMatch,
          part_petFriendly,
        },
      });
    }
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
            <Diversity3Icon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Embark on a journey of companionship, where every moment is a
              step closer to finding your perfect match."
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
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
                variant="h5"
                gutterBottom
              >
                Please fill your desired partner details
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Personal Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                  marginTop: "40px",
                }}
              >
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Age from
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    value={part_ageFrom}
                    onChange={(event) => setageFrom(event.target.value)}
                    error={ageError}
                  >
                    <MenuItem value="18-25">18-25 years</MenuItem>
                    <MenuItem value="25-30">25-30 years</MenuItem>
                    <MenuItem value="30-35">30-35 years</MenuItem>
                    <MenuItem value="35-40">35-40 years</MenuItem>
                  </Select>
                  {ageError && (
                    <FormHelperText error>
                      Please select an age range.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Marital Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Marital Status"
                    value={part_martialStatus}
                    onChange={(event) => setmartialStatus(event.target.value)}
                    error={martialStatusError}
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Divorced">Divorced</MenuItem>
                  </Select>
                  {martialStatusError && (
                    <FormHelperText error>
                      Please select marital status.
                    </FormHelperText>
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
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="religion-select-label">Religion</InputLabel>
                  <Select
                    labelId="religion-select-label"
                    id="religion-select"
                    label="Religion"
                    value={part_religion}
                    onChange={(event) => setReligion(event.target.value)}
                    error={religionError}
                  >
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Muslim">Muslim</MenuItem>
                    <MenuItem value="Christian">Christian</MenuItem>
                    <MenuItem value="Sikh">Sikh</MenuItem>
                    <MenuItem value="Buddhist">Buddhist</MenuItem>
                    <MenuItem value="Jain">Jain</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {religionError && (
                    <FormHelperText error>
                      Please select a religion.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="caste-select-label">Caste</InputLabel>
                  <Select
                    labelId="caste-select-label"
                    id="caste-select"
                    label="Caste"
                    value={part_caste}
                    onChange={(event) => setCaste(event.target.value)}
                    error={casteError}
                  >
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="OBC">OBC</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="ST">ST</MenuItem>
                  </Select>
                  {casteError && (
                    <FormHelperText error>
                      Please select a caste.
                    </FormHelperText>
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
                  label="Mother Tongue"
                  variant="standard"
                  value={part_mothertongue}
                  onChange={(event) => setMothertongue(event.target.value)}
                  error={mothertongueError}
                  helperText={
                    mothertongueError && "Please enter your mother tongue."
                  }
                />
                <TextField
                  label="Height"
                  variant="standard"
                  value={part_height}
                  onChange={(event) => setheight(event.target.value)}
                  error={heightError}
                  helperText={heightError && "Please enter your height."}
                />
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "40px",
                }}
              >
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Horoscope match?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Horoscope match?"
                    value={part_horoscopeMatch}
                    onChange={(event) => setHoroscopematch(event.target.value)}
                    error={horoscopeMatchError}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {horoscopeMatchError && (
                    <FormHelperText error>
                      Please select if horoscope match is required.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Pet Friendly
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Pet Friendly"
                    value={part_petFriendly}
                    onChange={(event) =>
                      setpart_petFriendly(event.target.value)
                    }
                    error={petFriendlyError}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {petFriendlyError && (
                    <FormHelperText error>
                      Please select if pet-friendly is required.
                    </FormHelperText>
                  )}
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
                  onClick={() => navigate("/family-details")}
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
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
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

export default PartnerFamily;
