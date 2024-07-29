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
              backgroundColor: "#F7E7CE",
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 300 }}
                  error={!aboutYourself}
                >
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& .MuiInputBase-input::placeholder": {
                        fontSize: "0.875rem",
                        lineHeight: "1.2",
                      },
                    }}
                  />
                  {!aboutYourself && (
                    <FormHelperText>
                      Express Yourself is required
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "40px",
                }}
              >
                <Button
                  onClick={() => navigate("/family-details")}
                  variant="outlined"
                  color="error"
                  sx={{
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleAdditionalDetails}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: 150,
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
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                <p>
                  <strong>Email: </strong>
                  <a
                    href="mailto:thedreamytrails@gmail.com"
                    style={{ textDecoration: "none", color: "#FFBF0E" }}
                  >
                    thedreamytrails@gmail.com
                  </a>{" "}
                </p>
                <p style={{ width: "200rem", textAlign: "center" }}>
                  Copyright © <span id="cry">2024</span>{" "}
                  <a
                    style={{ textDecoration: "none", color: "#FFBF00" }}
                    href="#!"
                    target="_blank"
                  >
                    SoulMatch
                  </a>{" "}
                  All rights reserved.{" "}
                </p>
                <p>
                  <strong style={{ color: "#FFBF0E" }}>Contact Us:</strong>{" "}
                  94490 65433
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
