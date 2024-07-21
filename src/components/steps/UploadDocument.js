import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Typography, Button, createTheme, ThemeProvider } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import StarsIcon from '@mui/icons-material/Stars';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useLocation, useNavigate } from "react-router-dom";

function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log("..uploadDocument location ...", location.state);
console.log(".selectedFile..",selectedFile)
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please upload a valid image file (JPEG or PNG)');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // Add your upload logic here
    } else {
      setError('No file selected or invalid file type');
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
            <StarsIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Join us in the quest for love, where every profile is a chapter
              waiting to be written in the book of destiny."
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
                Upload Documents
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                (Kindly upload the documents for Id Verification like Pan Card/
                Voter Id/ Aadhaar Card)
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "5px",
                  marginTop: "40px",
                }}
              >
                <CloudUploadIcon
                  sx={{ color: "#76001C", width: 60, height: 60 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  marginBottom: "50px",
                }}
              >
                <input
                  accept="image/jpeg,image/png"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="upload-button"
                />
                <label htmlFor="upload-button">
                  <Button
                    variant="contained"
                    component="span"
                    sx={{
                      mt: 4,
                      mb: 2,
                      width: 150,
                      height: 40,
                      textTransform: "inherit",
                      fontSize: "18px",
                      backgroundColor: "#76001C",
                    }}
                  >
                    Upload
                  </Button>
                </label>
              </div>
              {error && (
                <Typography color="error" sx={{ textAlign: "center", mb: 2 }}>
                  {error}
                </Typography>
              )}
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
                  onClick={() => {
                    if (selectedFile) {
                      navigate('/profile-completed');
                    } else {
                      setError('Please upload a valid file before submitting');
                    }
                  }}
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
                  Submit
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

export default UploadDocument;
