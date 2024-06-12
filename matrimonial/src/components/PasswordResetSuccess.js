import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 import { useNavigate } from 'react-router-dom';
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
              sx={{ marginTop: 2, fontWeight: "bold", textAlign: "center" }}
            >
              Password Reset Successful
            </Typography>
            <CardContent>
              <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                Your password has been successfully reset. Please login
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
