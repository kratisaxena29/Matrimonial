import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import logo from "../images/logo.png";
import "../css/plan.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Plan() {
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_API_BASE_URL;

  const handlePayment = async (e) => {
    console.log("...frontend");
    e.preventDefault();
  
    const data = {
      amount: 100,
      MUID: "MUID" + Date.now(),
      transactionId: 'T' + Date.now(),
    };
  
    console.log("...data...", data);
  
    try {
      const response = await axios.post(`${URL}/pay`, data, {
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers here
        },
        withCredentials: true // Ensure cookies are sent if needed
      });
console.log("...response.data...",response.data)
console.log("...response.data...",response.data.paymentUrl)
      if (response.data && response.data.paymentUrl) {
        // Redirect user to the payment URL
        window.location.href = response.data.paymentUrl;
      } else {
        console.error("Invalid payment response:", response.data);
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
      // Handle error
    }
  };
  

  return (
    <div style={{ paddingTop: "0px", paddingBottom: "80px" }}>
      <AppBar position="fixed" style={{ backgroundColor: "#6D0B32" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", marginRight: "20px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <Button
              onClick={() => navigate('/profiles')}
              color="inherit"
              variant="outlined"
              style={{
                backgroundColor: "#FFA500",
                color: "#fff",
                border: "none",
              }}
            >
              FREE
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "100px", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Choose your Plan
        </Typography>
        <Typography variant="h6" sx={{ paddingBottom: "20px" }} gutterBottom>
          Find the best plan and the best price that is right for you!
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {["Gold", "Diamond", "Platinum"].map((plan, index) => (
            <Grid item xs={12} md={4} key={plan}>
              <Paper
                elevation={3}
                className="plan-card"
                style={{
                  padding: "30px",
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "15px",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {plan}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    margin: "20px 0",
                    fontWeight: "normal",
                  }}
                >
                  {index === 0
                    ? "₹699/month"
                    : index === 1
                    ? "₹999/month"
                    : "₹1299/month"}
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <CheckCircle />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ marginLeft: "5px" }}>
                        Send unlimited messages
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <CheckCircle />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ marginLeft: "5px" }}>
                        {index === 0
                          ? "View up to 50 contact numbers"
                          : index === 1
                          ? "View up to 100 contact numbers"
                          : "View up to 200 contact numbers"}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      {index === 2 ? <CheckCircle /> : <Cancel />}
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ marginLeft: "5px" }}>
                        Standout from other profiles
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      {index === 2 ? <CheckCircle /> : <Cancel />}
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ marginLeft: "5px" }}>
                        Let matches contact you!
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  onClick={handlePayment}
                  variant="contained"
                  className="plan-button"
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <AppBar
        position="fixed"
        style={{ top: "auto", bottom: 0, backgroundColor: "#530014" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            {/* <IconButton edge="start" color="inherit" aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="instagram">
              <Instagram />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="twitter">
              <Twitter />
            </IconButton> */}
          </Box>
          <Typography variant="body1" color="white">
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {/* <Email style={{ marginRight: "10px" }} />
            <Typography variant="body1" color="white">
              abc@gmail.com
            </Typography> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Plan;
