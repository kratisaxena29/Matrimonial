import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function ConfirmationOtp() {
  const navigate = useNavigate()

  const location = useLocation()
  console.log("...conformation-email ...",location.state.email)
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
   navigate('/profile-details',{
    state: {
      email : location.state.email
    }
   })
  }
  return (
    <div style={rootStyle}>
      <TaskAltIcon color="success" sx={{ fontSize: "60px" }} />
      <Typography variant="h4" gutterBottom style={textStyle}>
        Thank you!
      </Typography>
      <Typography variant="h6" style={textStyle}>
        You have verified your email !
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
        Continue
      </Button>
    </div>
  );
}

export default ConfirmationOtp;
