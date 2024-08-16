import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import {
  Typography,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  InputLabel,
  FormControl,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

function PartnerLiving() {
  const location = useLocation()
  const [part_diet, setDiet] = useState(location?.state?.part_diet || "");
  const [part_alcohol, setAlcohol] = useState(location?.state?.part_alcohol || "");
  const [part_smoke, setSmoke] = useState(location?.state?.part_smoke ||"");
  const [errors, setErrors] = useState({
    diet: "",
    alcohol: "",
    smoke: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    // Validate the form whenever any field changes
    const validateForm = () => {
      let valid = true;
      const newErrors = {
        diet: "",
        alcohol: "",
        smoke: "",
      };

      if (!part_diet) {
        newErrors.diet = "Please select a diet";
        valid = false;
      }
      if (!part_alcohol) {
        newErrors.alcohol = "Please select alcohol consumption";
        valid = false;
      }
      if (!part_smoke) {
        newErrors.smoke = "Please select smoking status";
        valid = false;
      }

      setErrors(newErrors);
      setIsFormValid(valid);
    };

    validateForm();
  }, [part_diet, part_alcohol, part_smoke]);

  const URL = process.env.REACT_APP_API_BASE_URL;
  console.log("...location state in living...",location.state)
  const handleNext = async () => {
    
  
    if (isFormValid) {
      try {
   
        
        const parseDate = (date) => {
          if (date && date.$d) {
            return dayjs(date.$d); // Parse from the nested $d property
          } else if (date) {
            return dayjs(date); // Parse directly if possible
          }
          return null;
        };
  
        const formatDate = (date) => {
          const parsedDate = parseDate(date);
          return parsedDate ? parsedDate.format('ddd MMM DD') : '';
        };
  
        const formatTime = (time) => {
          const parsedTime = parseDate(time);
          return parsedTime ? parsedTime.format('HH:mm') : '';
        };
  
        const response = await axios.post(
          `${URL}/profile-register`,
          {
            email: location.state.email,
            name: location.state.name,
            gender: location.state.gender,
            age: location.state.age,
            martialStatus: location.state.maritalStatus, // Fixed typo from "martialStatus"
            nationality: location.state.nationality,
            city: location.state.city,
            country : location.state.country,
            religion: location.state.religion,
            drink : location.state.alcohol,
            disability: location.state.disability,
            disabilityDetail: location.state.disabilityDetails, // Fixed typo from "disabilityDetail"
            caste: location.state.caste,
            subCaste: location.state.subCaste,
            origin: location.state.origin,
            motherTongue: location.state.motherTongue,
            height: location.state.height,
            weight: location.state.weight,
            gothra: location.state.gothra,
            petFriendly: location.state.petFriendly,
            heighestEduction: location.state.highestEducation,
            currentEmployee: location.state.currentEmployment, // Fixed typo from "currentEmployee"
            profession: location.state.profession,
            annualIncome: location.state.annualIncome,
            yearsofExperience: location.state.yearsOfExperience,
            dateOfBirth: formatDate(location.state.dateofBirth), // Ensure date format
            timeOfBirth: formatTime(location.state.timeofBirth), // Ensure time format
            placeofBirth: location.state.placeofBirth, // Fixed typo from "placeOfBirth"
            areYouManglik: location.state.areyouManglik, // Fixed typo from "areYouManglik"
            diet: location.state.diet,
            alcohol: location.state.alcohol,
            smoke: location.state.smoke,
            family_Type: location.state.familyType,
            FathersName: location.state.fatherName,
            Fathers_prof: location.state.fatherProf,
            MothersName: location.state.motherName,
            Mothers_prof: location.state.motherProf,
            numSisters: location.state.numSisters,
            sisterName: JSON.stringify(location.state.sisterNames), // Ensure data is in JSON format
            sisterProfession: JSON.stringify(location.state.sisterProfs), // Ensure data is in JSON format
            numBrothers: location.state.numBrothers,
            brotherName: JSON.stringify(location.state.brotherNames), // Ensure data is in JSON format
            brotherProfession: JSON.stringify(location.state.brotherProfs), // Ensure data is in JSON format
            Part_ageFrom: location.state.part_ageFrom,
            Part_martialStatus: location.state.part_martialStatus, // Ensure proper casing
            Part_Religion: location.state.part_religion,
            Part_Caste: location.state.part_caste,
            Part_subCaste : location.state.Part_subCaste,
            Part_motherTongue: location.state.part_mothertongue, // Ensure proper casing
            Part_height: location.state.part_height,
            Part_horoscopeMatch: location.state.part_horoscopeMatch,
            Part_petFriendly: location.state.part_petFriendly,
            Part_gender : location.state.part_gender,
            Part_heighestEduction: location.state.part_highestEducation,
            Part_currentEmployee: location.state.part_currentEmployment,
            Part_profession: location.state.part_profession,
            Part_annualIncome: location.state.part_annualIncome,
            Part_yearsOfExpereience: location.state.part_yearsOfExperience,
            Part_deit : part_diet,
            Part_alcohol : part_alcohol,
            Part_smoke : part_smoke,
            hobbies: location.state.hobbies,
            // address: location.state.address,
            phoneNo: location.state.phoneNo,
            aboutYourSelf: location.state.aboutYourself, // Ensure proper casing
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        console.log("Response:", response);
  
        // Navigate to the next page with the updated state
        // navigate('/Confirmation-Profile', {
        // navigate('/upload-document',{
        navigate('/gallery-upload',{
          state: {
            ...location.state,
          }
        });
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };
  
  
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
  
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  


  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navigation bar */}
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        </nav>
        <div style={{ flex: 1 }}>
          <Grid container direction={isSmallScreen ? "column" : "row"} spacing={2}>
            <Grid item xs={12} sm={6} style={{ backgroundColor: "#F7E7CE", textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <MonitorHeartIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
              <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
                "Crafting a Lifestyle: Exploring the Art of Living Well."
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: isSmallScreen ? "20px" : "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }} variant="h5" gutterBottom>
                  Please fill your desired partner details
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                  Style of Living
                </Typography>

                {/* Diet */}
                <FormControl variant="standard" fullWidth sx={{ marginBottom: "40px" }}>
                  <InputLabel id="diet-label">Diet</InputLabel>
                  <Select
                    labelId="diet-label"
                    id="diet-select"
                    value={part_diet}
                    onChange={(event) => setDiet(event.target.value)}
                    error={!!errors.diet}
                  >
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                    <MenuItem value="Non-vegetarian">Non-vegetarian</MenuItem>
                    <MenuItem value="Eggitarian">Eggitarian</MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                  </Select>
                  {errors.diet && <Typography color="error">{errors.diet}</Typography>}
                </FormControl>

                {/* Alcohol */}
                <FormControl variant="standard" fullWidth sx={{ marginBottom: "40px" }}>
                  <InputLabel id="alcohol-label">Alcohol</InputLabel>
                  <Select
                    labelId="alcohol-label"
                    id="alcohol-select"
                    value={part_alcohol}
                    onChange={(event) => setAlcohol(event.target.value)}
                    error={!!errors.alcohol}
                  >
                    <MenuItem value="Occasionally">Occasionally</MenuItem>
                    <MenuItem value="Social Drinker">Social Drinker</MenuItem>
                    <MenuItem value="Regular Drinker">Regular Drinker</MenuItem>
                    <MenuItem value="Non-drinker">Non-drinker</MenuItem>
                  </Select>
                  {errors.alcohol && <Typography color="error">{errors.alcohol}</Typography>}
                </FormControl>

                {/* Smoke */}
                <FormControl variant="standard" fullWidth sx={{ marginBottom: "40px" }}>
                  <InputLabel id="smoke-label">Smoke</InputLabel>
                  <Select
                    labelId="smoke-label"
                    id="smoke-select"
                    value={part_smoke}
                    onChange={(event) => setSmoke(event.target.value)}
                    error={!!errors.smoke}
                  >
                    <MenuItem value="Yes">Non-smoker</MenuItem>
                    <MenuItem value="No">Social Smoker</MenuItem>
                    <MenuItem value="Regularly">Regular-Smoker</MenuItem>
                    <MenuItem value="Occasionally">Occasionally</MenuItem>
                  </Select>
                  {errors.smoke && <Typography color="error">{errors.smoke}</Typography>}
                </FormControl>

                {/* Navigation Buttons */}
                <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", alignItems: "center", gap: "20px" }}>
                  <Button
                    onClick={() => navigate("/partner-education", { state: location.state })}
                    variant="outlined"
                    sx={{
                      width: "150px",
                      height: "40px",
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
                      width: "150px",
                      height: "40px",
                      textTransform: "inherit",
                      fontSize: "18px",
                      backgroundColor: "#FB6A6B",
                      "&:hover": {
                        backgroundColor: "#FB6A6B",
                      },
                    }}
                    disabled={!isFormValid}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <section style={{ backgroundColor: "#F7E7CE", padding: "10px 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p>
              <strong>Email: </strong>
              <a href="mailto:soulmatchinfo@gmail.com" style={{ textDecoration: "none", color: "#FFBF0E" }}>
                soulmatchinfo@gmail.com
              </a>
            </p>
            <p style={{ textAlign: "center", marginBottom: "10px" }}>
              Copyright © <span id="cry">2024</span>{" "}
              <a style={{ textDecoration: "none", color: "#FFBF00" }} href="#!" target="_blank">
                SoulMatch
              </a>{" "}
              All rights reserved.
            </p>
            <p>
              <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong>{" "}
              94490 65433
            </p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default PartnerLiving;
