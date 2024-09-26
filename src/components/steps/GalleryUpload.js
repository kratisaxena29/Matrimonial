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
import { ToastContainer, toast } from "react-toastify";

function GalleryUpload({ setlogedIn }) {
  const location = useLocation();
  const [gallery, setGallery] = useState([]);
  const [isGalleryFetched, setIsGalleryFetched] = useState(false);
  const navigate = useNavigate();
  console.log("...gallery-upload...",location.state)
  const email = location.state?.email;
  const phoneno = location.state?.phoneno;
  const URL = process.env.REACT_APP_API_BASE_URL;

 


const handleGalleryUpload = async (event) => {
  console.log("...handlegallery...");
  const identifier = location.state?.email || location.state?.phoneNo;

  if (!identifier) {
      console.error("Identifier is undefined. Please check if the email or phone number is being passed correctly.");
      return;
  }

  const file = event.target.files[0];
  if (file) {
      // Check file type and size (example: limit size to 5MB)
      if (file.size > 5 * 1024 * 1024) {
         toast.error("File size exceeds the 5MB limit.")
          console.error("File size exceeds the 5MB limit.");
          return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
          const response = await axios.post(`${URL}/upload-multiple-photo/${identifier}`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
              timeout: 30000, // Set a timeout for the request (10 seconds)
          });
// toast.success("Photo uploaded successfully")
          console.log("Photo uploaded successfully:", response.data);
          fetchGallery();
      } catch (error) {
          if (error.code === 'ECONNABORTED') {
            toast.error("Upload timed out. Please try again.")
              console.error("Upload timed out. Please try again.");
          } else if (error.response) {
              console.error("Server error:", error.response.data.message);
          } else {
              console.error("Error uploading photo:", error.message);
          }
      }
  } else {
      console.error("No file selected for upload.");
  }
};

const fetchGallery = () => {
  const profileIdentifier = email || location.state?.phoneNo;
  axios.get(`${URL}/getphotosByEmailOrPhoneNo/${profileIdentifier}`)
      .then(response => {
          const photos = response.data.photoUrl;
          setGallery(photos);
          setIsGalleryFetched(true);
      })
      .catch(error => {
          console.log("Error fetching photos:", error);
          setIsGalleryFetched(false);
      });
};

useEffect(() => {
  fetchGallery();
}, [URL]);


const removePhoto = async (index) => {
  const photoToDelete = gallery[index];
  const profileIdentifier = email || location.state?.phoneNo;

  // Optimistically update the state
  const updatedGallery = gallery.filter((_, i) => i !== index);
  setGallery(updatedGallery);

  try {
    const response = await axios.post(
      `${URL}/deletephotosByEmailOrPhoneNo/${profileIdentifier}`,
      { photoToDelete },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 200) {
      console.log('Photo deleted successfully:', response.data);
    } else {
      console.error('Failed to delete photo:', response.data.message);
      // Revert state if deletion fails
      setGallery(gallery);
    }
  } catch (error) {
    console.error('Error during photo deletion:', error);
    // Revert state if there's an error
    setGallery(gallery);
  }
};


  const handleConfirmation = () => {
    navigate('/Confirmation-Profile', { state: { ...location.state } });
  };

  useEffect(() => {
    const profileIdentifier = email || location.state?.phoneNo;
    axios.get(`${URL}/getphotosByEmailOrPhoneNo/${profileIdentifier}`)
      .then(response => {
        const photos = response.data.photoUrl;
        setGallery(photos);
      })
      .catch(error => {
        console.log("Error fetching photos:", error);
      });
  }, [URL]);

  useEffect(() => {
    sessionStorage.removeItem('userData');
  },[])

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
            disabled={!isGalleryFetched} 
          >
            Next
          </Button>
        </Box>
      </Box>

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
<ToastContainer/>
    </div>
  );
}

export default GalleryUpload;
