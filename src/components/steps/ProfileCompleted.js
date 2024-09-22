import { Button, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";

function ProfileCompleted() {

  const navigate = useNavigate()
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
  return (
    <div style={rootStyle}>
      <TaskAltIcon color="success" sx={{ fontSize: "60px" }} />
      <Typography variant="h4" gutterBottom style={textStyle}>
      Completed!
      </Typography>
      <Typography variant="h6" style={textStyle}>
      Congratulations! You Profile has been completed
      </Typography>
      <Button
       onClick={() => navigate('/plan')}
   
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
        Start
      </Button>
    </div>
  );
}

export default ProfileCompleted;
