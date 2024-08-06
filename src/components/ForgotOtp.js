import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import { useLocation } from 'react-router-dom';
import Box from "@mui/material/Box";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ForgotOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);
console.log("...otp...",otp);
   const location = useLocation();
   console.log("..email ..", location.state.email )
  const { email } =  {};
  const inputRefs = useRef([]);
const navigate = useNavigate()
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

  const handleEmailOtp = async () => {
    try {
      setResendTimer(120); // Set the timer to 2 minutes (120 seconds)
    } catch (error) {
      console.log("...catch..", error);
    }
  };

  const handleVerifyClick = async () => {
    console.log("Verify button clicked");
    navigate('/reset-password',{
      state : {
        otp : otp,
        email : location.state.email
      }
    })
    // try {
    //     console.log("verifed")
    // } catch (error) {
    //   toast.error("Wrong OTP")
    // }
  };

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

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
        style={{ color: "#EC184A", fontWeight: "600" }}
      >
       Forgot Password
      </Typography>
      <Typography variant="h6" style={{ color: "#363640", fontWeight: "400" }}>
        An OTP code has been sent to your email. Kindly enter the code below to reset the password
        <strong>&nbsp;{email}</strong>
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
          backgroundColor: '#F68C1E',
          color: "white",
          "&:hover": {
            backgroundColor: '#e07b17'
          },
          borderRadius: "5px",
        }}
      >
        Verify
      </Button>

      {resendTimer > 0 ? (
        <Typography
          variant="body1"
          style={{ color: "#9C9C9C", marginTop: 20 }}
        >
          Resend Code in {resendTimer} seconds
        </Typography>
      ) : (
        <Button
          type="button"
          onClick={handleEmailOtp}
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
      )}
        <ToastContainer />
    </div>
  );
}

export default ForgotOtp;
