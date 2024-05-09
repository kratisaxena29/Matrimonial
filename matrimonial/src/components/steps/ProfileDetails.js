import React from "react";
import logo from "../../images/logo.png";
import { Typography, TextField, Button } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function ProfileDetails() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <nav
        style={{
          backgroundColor: "#6D0B32",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", marginRight: "40px" }}
        />
      </nav>
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left part */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFE5E7",
            textAlign: "center",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* MUI icon */}
          <WorkspacePremiumIcon
            style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
          />
          {/* Big text */}
          <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
            "Chosen by Countless Indian Hearts Worldwide: A Premier Matrimonial
            Platform"
          </Typography>
        </div>
        {/* Right part */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <div>
            <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
              Profile Details
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
              <TextField label="Name" variant="standard" />
              <TextField label="Gender" variant="standard" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
              <TextField label="Age" variant="standard" />
              <TextField label="Maritial Status" variant="standard" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
              <TextField label="Disability" variant="standard" />
              <TextField label="Nationality" variant="standard" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
              <TextField label="City" variant="standard" />
              <TextField label="Religion" variant="standard" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              mb: 2,
              width:150,
              height: 40,
              textTransform: "inherit",
              fontSize: "18px",
              backgroundColor: "#FB6A6B",
            }}
          >
            Next
          </Button>
          </div>
          </div>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#530014",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <div>
          <Facebook style={{ marginRight: "10px" }} />
          <Instagram style={{ marginRight: "10px" }} />
          <Twitter style={{ marginRight: "10px" }} />
        </div>
        <div>&copy; 2024 SoulMatch All rights reserved.</div>
        <div>
          <Email style={{ marginRight: "10px" }} />
          <span style={{ color: "#FFF" }}>Email Address</span>
        </div>
      </footer>
    </div>
  );
}

export default ProfileDetails;
