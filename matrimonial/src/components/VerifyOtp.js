import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import { useLocation } from 'react-router-dom';
import Box from "@mui/material/Box";
import axios from "axios";
function VerifyOtp() {
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const location = useLocation();
  const { email } = location.state || {};
  console.log("Location object:", location);
  console.log("Extracted email:", email);
  console.log("..your otp data ", otp)
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyClick = async() => {
    console.log("Verify button clicked");
    const API_BASE_URL = 'http://localhost:3002';
    const combinedOtp = otp.join('');
    console.log("Combined OTP:", combinedOtp);
    try {
      // const baseUrl = process.env.REACT_APP_COUCAL_API_BASE_URL;
      const response = await axios.post(
        `${API_BASE_URL}/verify-otp`,
        {
         
         email : email,
        otp : combinedOtp
        },
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
       
      );
      console.log("API Response:", response);
      navigate('/confirmation-otp')
      
    } catch (error) {
      console.error("Error while making API call:", error);
    }
  
  };

  const navigate = useNavigate();
  const rootStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10%",
    height: "auto",
    textAlign: "center",
    gap: 20,
  };

  return (
    <div style={rootStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#363640", fontWeight: "600" }}
      >
        Please enter one-time password to verify your account
      </Typography>
      <Typography variant="h6" style={{ color: "#363640", fontWeight: "400" }}>
        Enter the OTP sent to
        <strong>&nbsp;+91 7080978401</strong>
      </Typography>
      <Box style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Grid container spacing={4} justifyContent="center">
          {otp.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                type="text"
                inputRef={(ref) => (inputRefs.current[index] = ref)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
                variant="standard"
                style={{
                  width: 50,
                  textAlign: "center",
                  borderBottom: "2px solid #363640",
                }}
                inputProps={{
                  maxLength: 1,
                  style: {
                    fontSize: 40,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#530014",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button
        onClick={handleVerifyClick}
        type="submit"
        variant="contained"
        sx={{
          mt: 4,
          height: 50,
          textTransform: "inherit",
          fontSize: "18px",
          width: 250,
          backgroundColor: "#FB6A6B",
          borderRadius: "5px",
        }}
      >
        Verify
      </Button>

      <Button
        type="button"
        onClick={handleVerifyClick}
        variant="text"
        sx={{
          mb: 2,
          height: 50,
          textTransform: "inherit",
          fontSize: "18px",
          width: 250,
          color: "#9C9C9C",
        }}
      >
        Resend Code
      </Button>
    </div>
  );
}

export default VerifyOtp;
