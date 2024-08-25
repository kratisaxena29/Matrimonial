import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import axios from "axios";
function ConfirmationProfile() {

  const navigate = useNavigate()

  const location = useLocation()
//   console.log("...conformation-email ...",location.state.email)
//   console.log("...conformation-phone ...",location.state.phoneno)
  const textStyle = {
    marginBottom: 8,
    color: "#363640",
    fontWeight: "bold",
  };

  const rootStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    gap: 20,
  };
  // const user = JSON.parse(sessionStorage.getItem('user'));
  console.log("..confirmationPage ...",location.state)
  // console.log("...user...",user)
  const URL = process.env.REACT_APP_API_BASE_URL;
  const handleContinue = async() => {
    
    if(location.state.email){
      console.log("..under email")
    try {
      const response = await axios.post(`${URL}/welcome-email`,
        {
          email : location.state
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("..response...",response)
      if(response.data == "welcome email send successfully"){
        // console.log("...under data...")
        navigate('/login')
      }
     
    } catch (error) {
      console.log("Error:", error);
    }
  }
 else if(location.state.phoneNo){
  console.log("..under phone no")
    navigate('/login')
         
      
  }
    
    // if(location.state.email){
    //   navigate('/profile-details',{
    //     state: {
    //       email : location.state.email
    //     }
    //    })
    // }
    // else if(location.state.phoneno){
    //   navigate('/profile-details',{
    //     state: {
    //       phoneno : location.state.phoneno
    //     }
    //    })
    // }
  
  }
  return (
    <div style={rootStyle}>
      <TaskAltIcon color="success" sx={{ fontSize: "60px" }} />
      <Typography variant="h4" gutterBottom style={textStyle}>
        Thank you!
      </Typography>
      <Typography variant="h6" style={textStyle}>
        Your Profile has been Created please login !
      </Typography>
      <Button
        onClick={handleContinue}
        type="submit"
        variant="contained"
        sx={{
          mt: 4,
          mb: 2,
          height: 50,
          textTransform: "inherit",
          fontSize: "18px",
          backgroundColor: "#FB6A6B",
          "&:hover": {
            backgroundColor: "#FB6A6B",
          },
        }}
        endIcon={<ArrowForwardIosRoundedIcon sx={{ color: "#FFF" }} />}
      >
        Login
      </Button>
    </div>
  );
}

export default ConfirmationProfile;
