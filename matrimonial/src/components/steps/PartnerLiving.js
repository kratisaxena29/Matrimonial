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
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SchoolIcon from "@mui/icons-material/School";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function PartnerLiving() {
  const [part_diet, setDiet] = useState("")
  const [part_alcohol, setAlcohol] = useState("")
  const [part_smoke, setSmoke] = useState("")
  const [part_interest, setInterest] = useState("")

  const location = useLocation()
  console.log("..location. partner living ...", location.state)
  const navigate = useNavigate()
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
    try {
      const API_BASE_URL = 'http://localhost:3002'

const filterBrothersName = JSON.stringify(location.state.brotherNames)
const filterBrothersProf = JSON.stringify(location.state.brotherProfs)
const filtersisterName = JSON.stringify(location.state.sisterNames)
const filtersisterProf = JSON.stringify(location.state.sisterProfs)

      const response = await axios.post(
        `${API_BASE_URL}/profile-register`,
        {

          email : location.state.email,
          name : location.state.name,
          gender : location.state.gender,
          age : location.state.age,
          martialStatus: location.state.maritalStatus,
          nationality : location.state.nationality,
          city : location.state.city,
          religion : location.state.religion,
          disability : location.state.disability,
          disabilityDetail : location.state.disabilityDetails,
          caste : location.state.caste,
          subCaste :location.state.subCaste,
          origin : location.state.origin,
          motherTongue : location.state.mothertongue,
          height : location.state.height,
          weight : location.state.weight,
          gothra : location.state.gothra,
          petFriendly : location.state.petFriendly,
          heighestEduction : location.state.highestEduction,
          currentEmployee : location.state.currentEmployes,
          profession : location.state.profession,
          annualIncome : location.state.annualIncome,
          yearsofExperience : location.state.yearsOfExperience,
          dateOfBirth : location.state.dateofBirth,
          timeOfBirth : location.state.timeofBirth,
          placeofBirth : location.state.placeofBirth,
          areYouManglik : location.state.areyouManglik,
          diet : location.state.diet,
          alcohol  : location.state.alcohol,
          smoke : location.state.smoke,
          interest : location.state.Interest,
          family_Type : location.state.familyType,
          FathersName : location.state.fatherName,
          Fathers_prof : location.state.fatherProf,
          MothersName : location.state.motherName,
          Mothers_prof : location.state.motherProf,
          sister : location.state.numSisters,
          sisterName : filtersisterName,
          sisterProfession : filtersisterProf,
          brother : location.state.numBrothers,
          brotherName : filterBrothersName,
          brotherProfession : filterBrothersProf,
          Part_ageFrom : location.state.part_ageFrom,
          Part_martialStatus : location.state.part_martialStatus,
          Part_Religion : location.state.part_religion,
          Part_Caste : location.state.part_caste,
          Part_motherTongue : location.state.part_mothertongue,
          Part_height : location.state.part_height,
          Part_horoscopeMatch : location.state.part_horoscopeMatch,
          Part_petFriendly : location.state.part_petFriendly,
          Part_heighestEduction : location.state.part_highestEduction,
          Part_currentEmployee : location.state.part_currentEmployes,
          Part_profession : location.state.part_profession,
          Part_annualIncome : location.state.part_AnnualIncome,
          Part_yearsOfExpereience : location.state.part_yearsOfExperience,
          Part_deit : part_diet,
          Part_alcohol : part_alcohol ,
          Part_smoke : part_smoke,
          Part_interest : part_interest

        },
         {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )
        console.log("...response ...",response)
        navigate('/upload-document', {
          state: {
            ...location.state,
            
          }
        })
      
    } catch (error) {
      console.log("...catch..", error)
    }
   
  }
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
              "Crafting a Lifestyle: Exploring the Art of Living Well."
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
                Style of living
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
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Diet
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={part_diet}
                    onChange={(event) => setDiet(event.target.value)}

                  >
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                    <MenuItem value="Non-vegetarian">Non-vegetarian</MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                  </Select>
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
              // sx={{ minWidth: 300, marginTop:"10px" }}
              >
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Alcohol
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={part_alcohol}
                    onChange={(event) => setAlcohol(event.target.value)}
                    label="Age"
                  >
                    <MenuItem value="Social Drinker">Social Drinker</MenuItem>
                    <MenuItem value="Regular Drinker">Regular Drinker</MenuItem>
                    <MenuItem value="Non-drinker">Non-drinker</MenuItem>
                  </Select>
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
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Smoke
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={part_smoke}
                    onChange={(event) => setSmoke(event.target.value)}
                    label="Age"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>

                {/* <TextField label="Height" variant="standard" /> */}
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
                  variant="standard"
                  value={part_interest}
                  onChange={(event) => setInterest(event.target.value)}
                />{" "}
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
                  onClick={() => navigate('/partner-education')}
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
          <div>&copy; 2024 <span style={{ color: "#FFBF00	" }}>SoulMatch</span> All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default PartnerLiving;
