import React, { useEffect, useState } from "react";
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
  FormHelperText,
  TextField
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation, useNavigate } from "react-router-dom";

function AboutYourself() {
  const location = useLocation()
  const [aboutYourself, setAboutYourself] = useState(location?.state?.aboutYourself ||"");
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();
 

  // Validation logic
  useEffect(() => {
    if (aboutYourself) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [aboutYourself]);

  const handleAdditionalDetails = async () => {
    navigate('/partner-family', {
      state: {
        aboutYourself,
        ...location.state
      }
    });
  };

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
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
                About Yourself
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
                <FormControl variant="standard" sx={{ minWidth: 300 }} error={!aboutYourself}>
                  <InputLabel id="about-yourself-label"></InputLabel>
                  <TextField
                    labelId="about-yourself-label"
                    id="about-yourself"
                    value={aboutYourself}
                    onChange={(event) => setAboutYourself(event.target.value)}
                    label="About Yourself"
                  >
                    
                  </TextField>
                  {!aboutYourself && <FormHelperText>About yourself is required</FormHelperText>}
                </FormControl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
                <Button
                  onClick={() => navigate('/family-details')}
                  variant="outlined"
                  color="error"
                  sx={{ width: 150, height: 40, textTransform: "inherit", fontSize: "18px" }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleAdditionalDetails}
                  type="submit"
                  variant="contained"
                  sx={{ width: 150, height: 40, textTransform: "inherit", fontSize: "18px", backgroundColor: "#FB6A6B" }}
                  disabled={!formValid}
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
          <div>&copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default AboutYourself;
