import React from "react";
import logo from "../../images/logo.png";
import { Typography, TextField, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router-dom";

function PartnerEducation() {
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
            <StarsIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Join us in the quest for love, where every profile is a chapter
              waiting to be written in the book of destiny."{" "}
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
                Education and Career
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
                  sx={{ minWidth: 300, marginTop: "10px" }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Highest Education
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={age}
                    // onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="Bachelor's Degree">
                      Bachelor's Degree
                    </MenuItem>
                    <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                    <MenuItem value="Post Master's Degree">
                      Post Master's Degree
                    </MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                    <MenuItem value="Non-Bachelor's Degree">
                      Non-Bachelor's Degree
                    </MenuItem>
                  </Select>
                </FormControl>
                {/* <TextField label=" Sub Caste" variant="standard" /> */}
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
                <TextField
                  sx={{ minWidth: 300 }}
                  label="Current Employment "
                  variant="standard"
                />
                {/* <TextField label="Mother Tongue" variant="standard" />x x */}
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
                  sx={{ minWidth: 300 }}
                  label="Profession"
                  variant="standard"
                />

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
                  label="Annual Income"
                  variant="standard"
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
                  label="Years of Experience"
                  variant="standard"
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
                <Button
                onClick={() => navigate('/partner-living')}
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
          <div>&copy; 2024 SoulMatch All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default PartnerEducation;
