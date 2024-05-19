import React from "react";
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
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";
import logo from "../images/logo.png";

function Plan() {
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
            {/* <Typography variant="h6" style={{ flexGrow: 1 }}>
              SoulMatch
            </Typography> */}
          </Box>
          <Box sx={{display:"flex", flexDirection:"row", gap:"20px"}}>
            <Button color="inherit">Explore</Button>
            <Button color="inherit">Plans</Button>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                backgroundColor: "#FFA500",
                color: "#fff",
                border: "none",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "100px", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Choose your Plan
        </Typography>
        <Typography variant="h6" sx={{paddingBottom:"20px"}} gutterBottom>
          Find the best plan and the best price that is right for you!
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
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
              <Typography
                variant="h5"
                sx={{ color: "#EC184A", fontWeight: "bold" }}
                color="textSecondary"
              >
                Gold
              </Typography>
              <Typography
                variant="h6"
                style={{
                  margin: "20px 0",
                  color: "#76001C",
                  fontWeight: "normal",
                  marginBottom: "20px",
                }}
              >
                ₹500/month
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Send unlimited messages
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      View up to 50 contact numbers
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Cancel style={{ color: "red" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Standout from other profiles
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Cancel style={{ color: "red" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Let matches contact you!
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  color: "white",
                  backgroundColor: "#EC184A",
                  marginTop: "20px",
                }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                backgroundColor: "#EC184A",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h5"
                color="white"
                sx={{ fontWeight: "bold", paddingBottom: "0px" }}
              >
                Diamond
              </Typography>
              <Typography
                color="white"
                variant="h6"
                style={{
                //   margin: "18px",
                  padding: "45px",
                  //   paddingTop: "10px",
                  marginBottom: "0px",
                  //   fontWeight:"600"
                }}
              >
                ₹900/month
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "white" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="white"
                      style={{ marginLeft: "5px" }}
                    >
                      Send unlimited messages
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "white" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="white"
                      style={{ marginLeft: "5px" }}
                    >
                      View up to 100 contact numbers
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Cancel style={{ color: "#D9D9D9" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="white"
                      style={{ marginLeft: "5px" }}
                    >
                      Standout from other profiles
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Cancel style={{ color: "#D9D9D9" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="white"
                      style={{ marginLeft: "5px" }}
                    >
                      Let matches contact you!
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                variant="contained"
                style={{
                  color: "#EC184A",
                  backgroundColor: "white",
                  marginTop: "40px",
                }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
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
              <Typography
                variant="h5"
                sx={{ color: "#EC184A", fontWeight: "bold" }}
              >
                Platinum
              </Typography>
              <Typography
                variant="h6"
                style={{
                  margin: "20px 0",
                  color: "#76001C",
                  marginBottom: "20px",
                }}
              >
                ₹1500/month
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Send unlimited messages
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      View up to 200 contact numbers
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Standout from other profiles
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <CheckCircle style={{ color: "green" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: "5px" }}>
                      Let matches contact you!
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  color: "white",
                  backgroundColor: "#EC184A",
                  marginTop: "20px",
                }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
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
            <IconButton edge="start" color="inherit" aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="instagram">
              <Instagram />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="twitter">
              <Twitter />
            </IconButton>
          </Box>
          <Typography variant="body1" color="white">
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Email style={{ marginRight: "10px" }} />
            <Typography variant="body1" color="white">
              abc@gmail.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Plan;
