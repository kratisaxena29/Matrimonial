import React, { useState } from "react";
import logo from "../../images/logo.png";

import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation, useNavigate } from "react-router-dom";

function AdditionalDetails() {
  const [caste , setCaste] = useState("")
 const [subCaste,setSubCaste] = useState("")
 const [origin , setOrigin] = useState("")
 const [mothertongue , setMotherTongue] = useState("")
 const [height , setHeight] = useState("")
 const [weight, setWeight] = useState("")
 const [gothra , setGothra] = useState("")
 const [petFriendly , setpetFriendly] = useState("")


  const navigate = useNavigate()
  const location = useLocation()
  console.log("...location...",location)



  const handleAdditionalDetails = async() => {
    console.log("..caste ...",caste)
    console.log("...subCaste...",subCaste)
    console.log("...origin...",origin)
    console.log("..mothertongue...",mothertongue)
    console.log("..height...",height)
    console.log("...weight..",weight)
    console.log("...gothra..",gothra)
    console.log("...petfriendly...",petFriendly)
     navigate('/education-career',{
      state : {
        caste : caste,
        subCaste : subCaste,
        origin : origin,
        mothertongue : mothertongue,
        height : height,
        weight : weight,
        gothra : gothra,
        petFriendly : petFriendly,
        age : location.state.age,
        city : location.state.city,
        disability : location.state.disability,
        gender : location.state.gender,
        martialStatus : location.state.martialStatus,
        name : location.state.name,
        nationality : location.state.nationality,
        religion : location.state.religion

      }
     })
  }
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
            <FavoriteBorderIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Every love story is beautiful, but yours begins here. Let us help
              you find your happily ever after."
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
                Additional Details
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
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="caste-select-label">Caste</InputLabel>
                  <Select
                    labelId="caste-select-label"
                    id="caste-select"
                     value={caste}
                     onChange={(event) => setCaste(event.target.value)}
                    label="Caste"
                  >
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="OBC">OBC</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="ST">ST</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="sub-caste-select-label">Sub Caste</InputLabel>
                  <Select
                    labelId="sub-caste-select-label"
                    id="sub-caste-select"
                     value={subCaste}
                     onChange={(event) => setSubCaste(event.target.value)}
                    label="Sub Caste"
                  >
                    <MenuItem value="SubCaste1">Sub Caste 1</MenuItem>
                    <MenuItem value="SubCaste2">Sub Caste 2</MenuItem>
                    <MenuItem value="SubCaste3">Sub Caste 3</MenuItem>
                    <MenuItem value="SubCaste4">Sub Caste 4</MenuItem>
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
                <TextField 
                label="Origin" 
                variant="standard" 
                value={origin}
                onChange={(event) => setOrigin(event.target.value)}
                />
                <TextField 
                label="Mother Tongue" 
                variant="standard" 
                value={mothertongue}
                onChange={(event) => setMotherTongue(event.target.value)}
                />
                {/* Dropdown for Marital Status */}
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
                label="Height" 
                variant="standard" 
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                />
                <TextField 
                label="Weight" 
                variant="standard" 
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
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
                <FormControl variant="standard" sx={{ minWidth: 195 }}>
                  <InputLabel id="gothra-select-label">Gothra</InputLabel>
                  <Select
                    labelId="gothra-select-label"
                    id="gothra-select"
                     value={gothra}
                     onChange={(event) => setGothra(event.target.value)}
                    label="Gothra"
                  >
                    <MenuItem value="Gothra1">Gothra 1</MenuItem>
                    <MenuItem value="Gothra2">Gothra 2</MenuItem>
                    <MenuItem value="Gothra3">Gothra 3</MenuItem>
                    <MenuItem value="Gothra4">Gothra 4</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Pet Friendly
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                     value={petFriendly}
                     onChange={(event) => setpetFriendly(event.target.value)}
                    label="Age"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
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
                  onClick={() => navigate('/profile-details')}
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
                  onClick={handleAdditionalDetails}
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
          <div>&copy; 2024 <span style={{ color: "#FFBF00	"}}>SoulMatch</span> All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default AdditionalDetails;
