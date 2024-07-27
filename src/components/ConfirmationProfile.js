import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
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

  const handleContinue = () => {
    navigate('/login')
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
        Your Profile has been Created please login  !
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
          backgroundColor:"#FB6A6B",
        }}
        endIcon={<ArrowForwardIosRoundedIcon sx={{color:"#FFF"}} />}
      >
        Login
      </Button>
    </div>
  );
}

export default ConfirmationProfile;
