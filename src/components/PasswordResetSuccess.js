import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 import { useLocation, useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import backgroundImage from './backgroundImage.jpg'; // Ensure you have a background image in your src folder

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function PasswordResetSuccess() {
    const navigate = useNavigate();

  const handleLoginClick = () => {
     navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(5px)",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              borderRadius: 2,
              background: "rgba(255, 255, 255, 0.85)",
              animation: "fadeIn 1s ease-out",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "success.main",
                width: 60,
                height: 60,
                animation: "bounceIn 1s",
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "#2E7D32",
                marginTop: 2,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Password Reset Successful
            </Typography>
            <CardContent>
              <Typography variant="subtitle1" sx={{ textAlign: "center", width:"500px" }}>
                Your password has been successfully reset.
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Please login
              </Typography>
            </CardContent>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                height: 50,
                textTransform: "inherit",
                fontSize: "18px",
                backgroundColor: "#F68C1E",
                "&:hover": {
                  backgroundColor: "#e07b17",
                },
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default PasswordResetSuccess;
