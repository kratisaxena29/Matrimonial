import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  InputLabel,
  FormControl
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import Diversity1Icon from '@mui/icons-material/Diversity1';

const professionOptions = [
  "Doctor",
  "Engineer",
  "Teacher",
  "Business",
  "Artist",
  "Other"
];

function FamilyDetails() {
  const location = useLocation()
  const [familyType, setFamilyType] = useState(location?.state?.familyType || "");
  const [fatherName, setFatherName] = useState(location?.state?.fatherName || "");
  const [fatherProf, setFatherProf] = useState(location?.state?.fatherProf || "");
  const [motherName, setMotherName] = useState(location?.state?.motherName || "");
  const [motherProf, setMotherProf] = useState(location?.state?.motherProf || "");
  const [numSisters, setNumSisters] = useState(location?.state?.numSisters || 0);
  const [numBrothers, setNumBrothers] = useState(location?.state?.numBrothers || 0);
  const [sisterNames, setSisterNames] = useState(location?.state?.sisterNames || []);
  const [sisterProfs, setSisterProfs] = useState(location?.state?.sisterProfs || []);
  const [brotherNames, setBrotherNames] = useState(location?.state?.brotherNames || []);
  const [brotherProfs, setBrotherProfs] = useState(location?.state?.brotherProfs || []);
  const [errors, setErrors] = useState({
    familyType: "",
    fatherName: "",
    fatherProf: "",
    motherName: "",
    motherProf: "",
    sisterNames: [],
    sisterProfs: [],
    brotherNames: [],
    brotherProfs: []
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  

  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            paddingRight: "0px"
          }
        }
      }
    }
  });

  const handleSisterChange = (event) => {
    const count = Number(event.target.value);
    setNumSisters(count);
    setSisterNames(Array(count).fill(""));
    setSisterProfs(Array(count).fill(""));
  };

  const handleBrotherChange = (event) => {
    const count = Number(event.target.value);
    setNumBrothers(count);
    setBrotherNames(Array(count).fill(""));
    setBrotherProfs(Array(count).fill(""));
  };

  const handleSisterNameChange = (index, value) => {
    const newSisterNames = [...sisterNames];
    newSisterNames[index] = value;
    setSisterNames(newSisterNames);
    setErrors({ ...errors, sisterNames: [] });
  };

  const handleSisterProfChange = (index, value) => {
    const newSisterProfs = [...sisterProfs];
    newSisterProfs[index] = value;
    setSisterProfs(newSisterProfs);
    setErrors({ ...errors, sisterProfs: [] });
  };

  const handleBrotherNameChange = (index, value) => {
    const newBrotherNames = [...brotherNames];
    newBrotherNames[index] = value;
    setBrotherNames(newBrotherNames);
    setErrors({ ...errors, brotherNames: [] });
  };

  const handleBrotherProfChange = (index, value) => {
    const newBrotherProfs = [...brotherProfs];
    newBrotherProfs[index] = value;
    setBrotherProfs(newBrotherProfs);
    setErrors({ ...errors, brotherProfs: [] });
  };

  // const validateForm = () => {
  //   let isValid = true;
  //   const newErrors = { ...errors };

  //   if (!familyType) {
  //     newErrors.familyType = "Please select a family type";
  //     isValid = false;
  //   }

  //   if (!fatherName) {
  //     newErrors.fatherName = "Please enter father's name";
  //     isValid = false;
  //   }

  //   if (!fatherProf) {
  //     newErrors.fatherProf = "Please select father's profession";
  //     isValid = false;
  //   }

  //   if (!motherName) {
  //     newErrors.motherName = "Please enter mother's name";
  //     isValid = false;
  //   }

  //   if (!motherProf) {
  //     newErrors.motherProf = "Please select mother's profession";
  //     isValid = false;
  //   }

  //   sisterNames.forEach((name, index) => {
  //     if (!name) {
  //       newErrors.sisterNames[index] = "Please enter sister's name";
  //       isValid = false;
  //     }
  //   });

  //   sisterProfs.forEach((prof, index) => {
  //     if (!prof) {
  //       newErrors.sisterProfs[index] = "Please select sister's profession";
  //       isValid = false;
  //     }
  //   });

  //   brotherNames.forEach((name, index) => {
  //     if (!name) {
  //       newErrors.brotherNames[index] = "Please enter brother's name";
  //       isValid = false;
  //     }
  //   });

  //   brotherProfs.forEach((prof, index) => {
  //     if (!prof) {
  //       newErrors.brotherProfs[index] = "Please select brother's profession";
  //       isValid = false;
  //     }
  //   });

  //   setErrors(newErrors);
  //   setIsFormValid(isValid);
  //   return isValid;
  // };

  const handleNext = async () => {
    console.log('Previous page data:', location.state);
    // if (validateForm()) {
      navigate("/about-yourself", {
        state: {
          ...location.state,
          familyType,
          fatherName,
          fatherProf,
          motherName,
          motherProf,
          numSisters,
          numBrothers,
          sisterNames,
          sisterProfs,
          brotherNames,
          brotherProfs
        }
      });
    // }
  };

  const renderSisterFields = () => {
    let sisterFields = [];
    for (let i = 0; i < numSisters; i++) {
      sisterFields.push(
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "40px"
          }}
        >
          <TextField
            label={`Sister ${i + 1} Name`}
            variant="standard"
            value={sisterNames[i]}
            onChange={(event) => handleSisterNameChange(i, event.target.value)}
            error={!!errors.sisterNames[i]}
            helperText={errors.sisterNames[i]}
          />
          <FormControl variant="standard" sx={{ minWidth: 150 }}>
            <InputLabel id={`sister-prof-${i}`}>Profession</InputLabel>
            <Select
              labelId={`sister-prof-${i}`}
              id={`sister-prof-${i}`}
              value={sisterProfs[i]}
              onChange={(event) => handleSisterProfChange(i, event.target.value)}
              error={!!errors.sisterProfs[i]}
            >
              <MenuItem value="">Select</MenuItem>
              {professionOptions.map((prof, index) => (
                <MenuItem key={index} value={prof}>{prof}</MenuItem>
              ))}
            </Select>
            {errors.sisterProfs[i] && <Typography variant="caption" color="error">{errors.sisterProfs[i]}</Typography>}
          </FormControl>
        </div>
      );
    }
    return sisterFields;
  };

  const renderBrotherFields = () => {
    let brotherFields = [];
    for (let i = 0; i < numBrothers; i++) {
      brotherFields.push(
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "40px"
          }}
        >
          <TextField
            label={`Brother ${i + 1} Name`}
            variant="standard"
            value={brotherNames[i]}
            onChange={(event) => handleBrotherNameChange(i, event.target.value)}
            error={!!errors.brotherNames[i]}
            helperText={errors.brotherNames[i]}
          />
          <FormControl variant="standard" sx={{ minWidth: 150 }}>
            <InputLabel id={`brother-prof-${i}`}>Profession</InputLabel>
            <Select
              labelId={`brother-prof-${i}`}
              id={`brother-prof-${i}`}
              value={brotherProfs[i]}
              onChange={(event) => handleBrotherProfChange(i, event.target.value)}
              error={!!errors.brotherProfs[i]}
            >
              <MenuItem value="">Select</MenuItem>
              {professionOptions.map((prof, index) => (
                <MenuItem key={index} value={prof}>{prof}</MenuItem>
              ))}
            </Select>
            {errors.brotherProfs[i] && <Typography variant="caption" color="error">{errors.brotherProfs[i]}</Typography>}
          </FormControl>
        </div>
      );
    }
    return brotherFields;
  };

  // useEffect(() => {
  //   validateForm();
  // }, [familyType, fatherName, fatherProf, motherName, motherProf, sisterNames, sisterProfs, brotherNames, brotherProfs]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
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
              justifyContent: "center"
            }}
          >
            {/* MUI icon */}
            <Diversity1Icon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Explore a realm where dreams meet reality, and true love are found with just a click."
            </Typography>
          </div>
          {/* Right part */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "50px" }}>
            <div>
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Family Details
              </Typography>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px", marginTop: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 380 }}>
                  <InputLabel id="demo-simple-select-standard-label">Family Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Family Type"
                    value={familyType}
                    onChange={(event) => {
                      setFamilyType(event.target.value);
                      setErrors({ ...errors, familyType: "" });
                    }}
                    error={!!errors.familyType}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="Nuclear">Nuclear</MenuItem>
                    <MenuItem value="Joint">Joint</MenuItem>
                    <MenuItem value="Extended">Extended</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                  {errors.familyType && <Typography variant="caption" color="error">{errors.familyType}</Typography>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
                <TextField
                  label="Father's Name"
                  variant="standard"
                  value={fatherName}
                  onChange={(event) => {
                    setFatherName(event.target.value);
                    setErrors({ ...errors, fatherName: "" });
                  }}
                  error={!!errors.fatherName}
                  helperText={errors.fatherName}
                />
                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                  <InputLabel id="father-prof-label">Father's Profession</InputLabel>
                  <Select
                    labelId="father-prof-label"
                    id="father-prof"
                    value={fatherProf}
                    onChange={(event) => {
                      setFatherProf(event.target.value);
                      setErrors({ ...errors, fatherProf: "" });
                    }}
                    error={!!errors.fatherProf}
                  >
                    <MenuItem value="">Select</MenuItem>
                    {professionOptions.map((prof, index) => (
                      <MenuItem key={index} value={prof}>{prof}</MenuItem>
                    ))}
                  </Select>
                  {errors.fatherProf && <Typography variant="caption" color="error">{errors.fatherProf}</Typography>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
                <TextField
                  label="Mother's Name"
                  variant="standard"
                  value={motherName}
                  onChange={(event) => {
                    setMotherName(event.target.value);
                    setErrors({ ...errors, motherName: "" });
                  }}
                  error={!!errors.motherName}
                  helperText={errors.motherName}
                />
                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                  <InputLabel id="mother-prof-label">Mother's Profession</InputLabel>
                  <Select
                    labelId="mother-prof-label"
                    id="mother-prof"
                    value={motherProf}
                    onChange={(event) => {
                      setMotherProf(event.target.value);
                      setErrors({ ...errors, motherProf: "" });
                    }}
                    error={!!errors.motherProf}
                  >
                    <MenuItem value="">Select</MenuItem>
                    {professionOptions.map((prof, index) => (
                      <MenuItem key={index} value={prof}>{prof}</MenuItem>
                    ))}
                  </Select>
                  {errors.motherProf && <Typography variant="caption" color="error">{errors.motherProf}</Typography>}
                </FormControl>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "start",marginLeft:"160px", gap: "40px", marginBottom: "40px" }}>
                <TextField
                  label="Number of Brothers"
                  variant="standard"
                  type="number"
                  onChange={handleBrotherChange}
                />
              </div>
              {renderBrotherFields()}
              <div style={{ display: "flex", alignItems: "center",  justifyContent: "start",marginLeft:"160px",  gap: "40px", marginBottom: "40px" }}>
                <TextField
                  label="Number of Sisters"
                  variant="standard"
                  type="number"
                  onChange={handleSisterChange}
                />
              </div>
              {renderSisterFields()}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", marginBottom: "40px" }}>
                <Button
                  onClick={() => navigate("/lifestyle", {state: location.state})}
                  variant="outlined"
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                    borderColor: "#FB6A6B",
                    color: "#FB6A6B"
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  type="submit"
                  variant="contained"
                  // disabled={!isFormValid}
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                    backgroundColor: "#FB6A6B",
                    "&:hover": {
                      backgroundColor: "#FB6A6B",
                    },
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer style={{ backgroundColor: "#530014", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff" }}>
          <div>
            <Facebook style={{ marginRight: "10px" }} />
            <Instagram style={{ marginRight: "10px" }} />
            <Twitter style={{ marginRight: "10px" }} />
          </div>
          <div>&copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All rights reserved.</div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default FamilyDetails;
