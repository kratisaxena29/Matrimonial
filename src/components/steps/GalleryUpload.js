import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import axios from "axios";

function GalleryUpload({ setlogedIn }) {
  const location = useLocation();
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();
  const email = location.state?.email;
  const phonene = location.state?.phonene;
  const URL = process.env.REACT_APP_API_BASE_URL;

  const handleGalleryUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGallery([...gallery, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`${URL}/upload-multiple-photo/${email}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log("Photo updated successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    });
  };

  const removePhoto = async (index) => {
    const photoToDelete = gallery[index];
    const profileIdentifier = email || phonene;

    try {
      const response = await axios.post(
        `${URL}/deletephotosByEmailOrPhoneNo/${profileIdentifier}`,
        { photoToDelete },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        console.log('Photo deleted successfully:', response.data);
        setGallery((prevGallery) => prevGallery.filter((_, i) => i !== index));
      } else {
        console.error('Failed to delete photo:', response.data.message);
      }
    } catch (error) {
      console.error('Error during photo deletion:', error);
    }
  };

  const handleConfirmation = () => {
    navigate('/Confirmation-Profile', { state: { ...location.state } });
  };

  useEffect(() => {
    const profileIdentifier = email || phonene;
    axios.get(`${URL}/getphotosByEmailOrPhoneNo/${profileIdentifier}`)
      .then(response => {
        const photos = response.data.photoUrl;
        setGallery(photos);
      })
      .catch(error => {
        console.log("Error fetching photos:", error);
      });
  }, [URL]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img onClick={() => navigate('/profiles')} src={logo} alt="Logo" style={{ height: "60px" }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F68C1E",
            color: "white",
            "&:hover": {
              backgroundColor: "red",
            },
            textTransform: "none",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/")}
        >
          Logout
        </Button>
      </nav>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#76001C",
            marginBottom: "0px",
            paddingTop: "40px",
          }}
        >
          Photo Gallery
        </Typography>
      <Box sx={{ flex: '1 0 auto', padding: 14, borderRadius: 2,}}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            padding: 3,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="gallery-upload"
            type="file"
            multiple
            onChange={handleGalleryUpload}
          />
          <label htmlFor="gallery-upload">
            <Button
              variant="outlined"
              startIcon={<AddPhotoAlternateIcon />}
              component="span"
              sx={{
                padding: "10px 20px",
                borderColor: "#3f51b5",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "rgba(63, 81, 181, 0.04)",
                },
              }}
            >
              Add Photos
            </Button>
          </label>

          <Grid container spacing={2} justifyContent="center">
            {gallery.map((photo, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    onClick={() => removePhoto(index)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            sx={{
              width: "100px", // Adjust button width for mobile
              backgroundColor: "#FB6A6B",
              "&:hover": {
                backgroundColor: "#FB6A6B",
              },
              mt:10
            }}
            onClick={handleConfirmation}
          >
            Next
          </Button>
        </Box>
      </Box>

      <section>
          <div className="cr">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                
                <p style={{ textAlign: "center" }}>
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
                <p>
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
  );
}

export default GalleryUpload;
