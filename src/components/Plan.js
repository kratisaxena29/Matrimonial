import React, { useEffect, useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import logo from "../images/logo.png";
import "../css/plan.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Plan() {
  const [oneProfile, setOneProfile] = useState({});
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const userdata = sessionStorage.getItem('user');
    if (userdata) {
        const user = JSON.parse(userdata);
        let id;

        if (user.email) {
            console.log("...email");
            id = user.email;
        } else if (user.phoneno && user.phoneno !== '+91') {
            console.log("...phone");
            id = user.phoneno;
        }

        if (id) {
            axios.get(`${URL}/oneProfileByEmail/${id}`)
                .then(response => {
                    console.log("..plan response...", response.data);
                    setOneProfile(response.data);
                    console.log("...response of oneProfile..", response.data);
                })
                .catch(error => {
                    console.log("...error...", error);
                });
        }
    }
}, [URL]);

  let userdata = sessionStorage.getItem('user');
  console.log("...user.phoneNo...",userdata.phoneno)
  let user = null;
    if (userdata) {
      user = JSON.parse(userdata);
    }
    console.log("...userData...",user.phoneno)

  const handlePayment = useCallback(async (e, amount) => {
    e.preventDefault();
    const userdata = sessionStorage.getItem('user');
    let user = null;
    if (userdata) {
      user = JSON.parse(userdata);
    }

    const data = {
      email: user?.email || "Not Available",
      phoneno: user?.phoneno || "Not Available",
      amount: amount*100,
      MUID: "MUID" + Date.now(),
      transactionId: 'T' + Date.now(),
    };
  
    try {
      const response = await axios.post(`${URL}/pay`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      console.log("Response:", response);
     
      if (response.data) {
        window.location.href = response.data.url;
      } else {
        console.error("Invalid payment response:", response.data);
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
    }
  }, [URL]);

  const plans = [
    { name: "Gold", amount: 699 },
    { name: "Diamond", amount: 999 },
    { name: "Platinum", amount: 1399 },
  ];

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
          {plans.map((plan) => (
            (oneProfile.plan !== (plan.amount*100).toString()) && (
              <Grid item xs={12} md={4} key={plan.name}>
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
                    {plan.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "20px 0",
                      fontWeight: "normal",
                    }}
                  >
                    {`₹${plan.amount}/month`}
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
                          {plan.name === "Gold"
                            ? "View up to 100 contact numbers"
                            : plan.name === "Diamond"
                            ? "View up to 150 contact numbers"
                            : "View up to 300 contact numbers"}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        {plan.name === "Platinum" ? <CheckCircle /> : <Cancel />}
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" style={{ marginLeft: "5px" }}>
                          Standout from other profiles
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        {plan.name === "Platinum" ? <CheckCircle /> : <Cancel />}
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" style={{ marginLeft: "5px" }}>
                          Let matches contact you!
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Button
                    onClick={(e) => handlePayment(e, plan.amount)}
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
            )
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
            {/* Social media icons or other content can be added here */}
          </Box>
          <Typography variant="body1" color="white">
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {/* Email or other contact info can be added here */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Plan;
