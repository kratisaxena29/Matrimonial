import React, { useState, useRef, useEffect } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function ForgotPassword() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(60);
  const [showResendButton, setShowResendButton] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowResendButton(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendCode = () => {
    setTimer(60);
    setShowResendButton(false);
    setResendClicked(true);
    // Placeholder for actual resend logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for actual submit logic
    setStage(2);
  };

  const resetPassword = () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    // Placeholder for actual reset password logic
    console.log('Password reset successfully');
  };

  const handleVerifyClick = () => {
    // Placeholder for actual verify logic
    setStage(3);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
    <div>
      {stage === 1 && (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar sx={{ bgcolor: "#E1EBEE", width: 56, height: 56 }}>
                <VpnKeyRoundedIcon
                  sx={{ width: 30, height: 30, color: "#002D62" }}
                />
              </Avatar>
              <Typography
                component="h1"
                variant="h4"
                marginTop={2}
                style={{ color: "#363640", fontWeight: "600" }}
              >
                Forgot Password?
              </Typography>
              <Typography
                variant="subtitle1"
                marginTop={2}
                style={{ color: "#363640", textAlign: "center" }}
              >
                Enter your email and we'll send you a code to reset your password.
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3, pb: 3 }}
              >
                <TextField
                  required
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{ width: "100%" }}
                  value={email}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 4,
                    mb: 2,
                    height: 50,
                    textTransform: "inherit",
                    fontSize: "18px",
                  }}
                >
                  Send Verification Code
                </Button>
              </Box>
            </Box>
          </Container>
          
        </ThemeProvider>
      )}

      {stage === 2 && (
        <div style={rootStyle}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "#363640", fontWeight: "600" }}
          >
            Please enter a verification code to change your password
          </Typography>
          <Typography variant="h6" style={{ color: "#363640", fontWeight: "400" }}>
            The code has been sent to:
            <strong>&nbsp;{email}</strong>
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Grid container spacing={2} justifyContent="center">
              {otp.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    type="text"
                    inputRef={(ref) => (inputRefs.current[index] = ref)}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    variant="outlined"
                    style={{ width: 60, textAlign: "center" }}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        fontSize: 24,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#363640",
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
            }}
          >
            Verify
          </Button>
          {showResendButton && !resendClicked && (
            <Button
              type="button"
              onClick={handleResendCode}
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
        </div>
      )}

      {stage === 3 && (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar sx={{ bgcolor: "#E1EBEE", width: 56, height: 56 }}>
                <HttpsRoundedIcon
                  sx={{ width: 30, height: 30, color: "#002D62" }}
                />
              </Avatar>
              <Typography
                component="h1"
                variant="h4"
                marginTop={2}
                style={{ color: "#363640", fontWeight: "600" }}
              >
                Create a new password
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={resetPassword}
                sx={{ mt: 3, pb: 3 }}
              >
                <TextField
                  required
                  fullWidth
                  onChange={(event) => setPassword(event.target.value)}
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  sx={{ width: "100%", mt: 2 }}
                  value={password}
                  InputProps={{
                    endAdornment: (
                      <span onClick={handleTogglePasswordVisibility} style={{ cursor: "pointer" }}>
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </span>
                    ),
                  }}
                />
                <TextField
                  required
                  fullWidth
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  autoComplete="new-password"
                  sx={{ width: "100%", mt: 2 }}
                  value={confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <span onClick={handleToggleConfirmPasswordVisibility} style={{ cursor: "pointer" }}>
                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </span>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 4,
                    mb: 2,
                    height: 50,
                    textTransform: "inherit",
                    fontSize: "18px",
                  }}
                >
                  Reset Password
                </Button>
              </Box>
            </Box>
          </Container>
          
        </ThemeProvider>
      )}
    </div>
  );
}

export default ForgotPassword;
