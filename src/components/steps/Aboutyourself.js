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
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation, useNavigate } from "react-router-dom";

function AboutYourself() {
  const location = useLocation();
  const storedData = JSON.parse(sessionStorage.getItem("userData"));
  const [aboutYourself, setAboutYourself] = useState(
    location?.state?.aboutYourself || storedData?.aboutYourself || ""
  );
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  // Validation logic
  useEffect(() => {
    if (aboutYourself) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [aboutYourself]);
  console.log("...about your self ...", location.state);
  const handleAdditionalDetails = async () => {
    // New "about yourself" data
    const additionalDetailsData = {
      aboutYourself,
    };
  
    // Retrieve the existing data from sessionStorage
    let existingData = JSON.parse(sessionStorage.getItem("userData")) || {};
  
    // Merge previous data with new "about yourself" data
    const updatedData = { ...existingData, ...location.state, ...additionalDetailsData };
  
    // Save the merged data back to sessionStorage
    sessionStorage.setItem("userData", JSON.stringify(updatedData));
  
    // Navigate to the next page with the updated data
    navigate("/partner-family", {
      state: { ...updatedData },
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
            style={{ height: "60px", marginRight: "20px" }}
          />
        </nav>
        <Grid container style={{ flex: 1, marginTop:0 }} spacing={2}>
          {/* Left part */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: "#F7E7CE",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <FavoriteBorderIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ color: "#6B0D37", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              "Every love story is beautiful, but yours begins here. Let us help
              you find your happily ever after."
            </Typography>
          </Grid>
          {/* Right part */}
          <Grid item xs={12} md={6} style={{ padding: "10px" }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              About Yourself
            </Typography>
            <FormControl fullWidth variant="standard" error={!aboutYourself}>
              <TextField
                id="about-yourself"
                value={aboutYourself}
                onChange={(event) => setAboutYourself(event.target.value)}
                label="Express Yourself!"
                multiline
                rows={4}
                placeholder="You may consider answering these questions:
                1. How would you describe yourself?
                2. What kind of food/movies/books/music you like?
                3. Do you enjoy activities like traveling, music, sports etc?
                4. Where have you lived most of your life till now?
                5. Where do you wish to settle down in future?"
                helperText="Introduce yourself (Don't mention your name, number or social handles). Write about your values, beliefs/goals and aspirations. How do you describe yourself? Your interests and hobbies."
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "0.875rem",
                    lineHeight: "1.2",
                  },
                }}
              />
              {!aboutYourself && (
                <FormHelperText>Express Yourself is required</FormHelperText>
              )}
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "40px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button
                onClick={() => navigate("/family-details")}
                variant="outlined"
                color="error"
                sx={{
                  width: "100%",
                  maxWidth: 150,
                  height: 40,
                  textTransform: "inherit",
                  fontSize: "18px",
                  marginBottom: { xs: "10px", sm: "0" },
                }}
              >
                Back
              </Button>
              <Button
                onClick={handleAdditionalDetails}
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  maxWidth: 150,
                  height: 40,
                  textTransform: "inherit",
                  fontSize: "18px",
                  backgroundColor: "#FB6A6B",
                  "&:hover": {
                    backgroundColor: "#FB6A6B",
                  },
                }}
                disabled={!formValid}
              >
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
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

export default AboutYourself;
