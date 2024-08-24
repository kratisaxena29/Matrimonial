import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Typography, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl, FormHelperText, useMediaQuery } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { useLocation, useNavigate } from "react-router-dom";

function EducationCareer() {
  const location = useLocation()
  const [highestEducation, setHighestEducation] = useState(location?.state?.highestEducation || "");
  const [currentEmployment, setCurrentEmployment] = useState(location?.state?.currentEmployment || "");
  const [profession, setProfession] = useState(location?.state?.profession || "");
  const [annualIncome, setAnnualIncome] = useState(location?.state?.annualIncome || "");
  const [yearsOfExperience, setYearsOfExperience] = useState(location?.state?.yearsOfExperience || "");
  const [isFormValid, setIsFormValid] = useState(false);


  const navigate = useNavigate();

  const highestEducationOtption = [
    { label: "Computers", style: { color: "red", fontWeight: "bold" } },
  // Computers
  "MCA",
  "BCA",
  "B.IT",
  "MCM",
  "PGDCA",
  "DCA",
  "ADCA",
  { label: "Finance/Commerce/Economics", style: { color: "red", fontWeight: "bold" } },
//  Finance/Commerce/Economics
   "B.Com",
   "CA",
   "CS",
   "ICWA",
   "M.Com",
   "CFA",
   "BBI",
   "BBE",
   "B.Com(Hons)",
   "MBE",
   "MFC",
   "MFM",
   "CFP",
   "CIA",
   "CPA",
   { label: "Management", style: { color: "red", fontWeight: "bold" } },
// Management
  "MBA/PGDM",
  "BBA",
  "BHM",
  "BAM",
  "BBM",
  "BFM",
  "BFT",
  "B.H.A",
  "BHMCT",
  "BHMTT",
  "BMS",
  "MAM",
  "MHA",
  "MMS",
  "MMM",
  "MTM",
  "MTA",
  "MHRM",
  "MBM",
  "Executive MBA/PGDM",
  "CWM",
  "FPM",
  { label: "Engineering/Technology/Design", style: { color: "red", fontWeight: "bold" } },
  // Engineering/Technology/Design
      "B.E/B.Tech",
      "B.Pharma",
      "M.E/M.Tech",
      "M.Pharma",
      "M.S. (Engineering)",
      "B.Arch",
      "M.Arch",
      "B.Des",
      "M.Des",
      "B.FAD",
      "B.FTech",
      "BID",
      "B.Tech LL.B.",
      "M.FTech",
      "MID",
      "MIB",
      "M.Plan",
      "MPH",
      "A.M.E.",
      "CISE",
      "ITIL",
      { label: "Medicine/Health", style: { color: "red", fontWeight: "bold" } },
  
  // Medicine/Health

  "MBBS",
  "M.D",
  "BAMS",
  "BHMS",
  "BDS",
  "M.S(Medicine)",
  "MVSc.",
  "BVSc.",
  "MDS",
  "BPT",
  "MPT",
  "DM",
  "MCh",
  "BCVT",
  "BMLT",
  "BMRIT",
  "BMRT",
  "BNYS",
  "BOT",
  "B.O.Th",
  "BOPTM",
  "BPMT",
  "B.P.Ed",
  "B.P.E.S",
  "BPO",
  "BPH",
  "BRDIT",
  "BUMS",
  "MOT",
  "M.Optom.",
  "MS",
  "DMLT",
  "D.Pharm",
  "D.P.Ed",
  "ANM",
  "GNM",
  { label: "Law", style: { color: "red", fontWeight: "bold" } },
  // Law
"L.L.B",
"L.L.M",
"B.A.LL.B.",
"B.A.LL.B.(Hons)",
"BBALL.B.",
"BBALL.B.(Hons)",
"B.Com LL.B",
"B.L.S.LL.B.",
"M.B.L",
"L.L.B",
"L.L.M.",
{ label: "Arts/Science", style: { color: "red", fontWeight: "bold" } },
// Arts/Science
"B.A",
"B.Sc",
"M.A",
"M.Sc",
"B.Ed",
"M.Ed",
"MSW",
"BFA",
"MFA",
"BJMC",
"MJMC",
"B.Agri",
"B.A(Hons)",
"BCT & CA",
"B.EI.ED",
"B.F.Sc",
"B.J",
"B.Lib.I.Sc.",
"B.Lib.Sc.",
"B.Litt",
"B.M.C.",
"B.M.M.",
"B.M.M.M.C.",
"B.Mus.",
"BPA",
"B.Sc(Post Basic)",
"BSW",
"BVA",
"B.Voc",
"M.F.Sc.",
"M.H.Sc.",
"M.J.",
"M.Lib.I.Sc.",
"M.Lib.Sc.",
"M.M.C.",
"M.O.L.",
"MPA",
"M.P.Ed",
"MVA",
"M.Voc",
"D.Ed",
"D.EI.Ed",
"D.Voc",
"CPT",
"ETT",
"TTC",
"P.P.T.T.C",
"B.A",
{ label: "Doctorate", style: { color: "red", fontWeight: "bold" } },
// Doctorate
"PhD",
"M.Phil",
"LL.D.",
"D.Litt",
"Pharm.D",
"PhD",
"M.Phil",
{ label: "Non-Graduate", style: { color: "red", fontWeight: "bold" } },
// Non-Graduate
"Diploma",
"High School",
"Trade School",






  ]

  const ProfessionOption = [
    { label: "Administration", style: { color: "red", fontWeight: "bold" } },
    
   " Admin Professional",
   "Clerk",
   "Operator/Techinician",
   "Secretary/Front Office",
   { label: "Advertising , Media & Entertainment", style: { color: "red", fontWeight: "bold" } },
  
  "Actor/Model",
  "Advertising Professional",
  "Film/ Entertainment Professional",
  "Journalist",
  "Media Professional",
  "PR Professional",
  { label: "Agriculture", style: { color: "red", fontWeight: "bold" } },
  
  "Agriculture Professional",
  "Farming",
  { label: "Airline & Aviation", style: { color: "red", fontWeight: "bold" } },
  
  "Airline Professional",
  "Flight Attendant",
  "Pilot",
  { label: "Architecture", style: { color: "red", fontWeight: "bold" } },
  
  "Architect",
  { label: "BPO & Customer Service", style: { color: "red", fontWeight: "bold" } },
  
  "BPO/ITes Professional",
  "Customer Service",
  { label: "Banking & Finance", style: { color: "red", fontWeight: "bold" } },
  
  "Accounting Professional",
  "Auditor",
  "Banking Professional",
  "Chartered accountant",
  "Finance Professional",
  { label: "Corporate Management Professionals", style: { color: "red", fontWeight: "bold" } },
  
  "Analyst",
  "Consultant",
  "Corporate Communication",
  "Corporate Planning",
  "HR Professional",
  "Marketing Professional",
  "Operations Management",
  "Product manager",
  "Program Manager",
  "Project Manager - Non IT",
  "Sales Professional",
  "Sr. Manager/ Manager",
  "Subject Matter Expert",
  { label: "Doctor", style: { color: "red", fontWeight: "bold" } },
  
  "Dentist",
  "Doctor",
  "Surgeon",
  { label: "Education & Training", style: { color: "red", fontWeight: "bold" } },
  
  "Education Professional",
  "Educational Institution Owner",
  "Librarian",
  "Professor/Lecturer",
  "Research Assistant",
  "Teacher",
  { label: "Engineering", style: { color: "red", fontWeight: "bold" } },
  
  "Electronics Engineer",
  "Hardware/Telecom Engineer",
  "Non – IT Engineer",
  "Quality Assurance Engineer",
  { label: "Hospitality", style: { color: "red", fontWeight: "bold" } },
  
  "Hotels/Hospitality Professional",
  { label: "Legal", style: { color: "red", fontWeight: "bold" } },
  
  "Lawyer & Legal Professional",
  { label: "Merchant Navy", style: { color: "red", fontWeight: "bold" } },
  
  "Mariner",
  "Merchant Naval Officer",
  { label: "Other Medical & Healthcare", style: { color: "red", fontWeight: "bold" } },
  
  "Merchant Naval Officer",
  "Nurse",
  "Paramedic",
  "Pharmacist",
  "Physiotherapist",
  "Psychologist",
  "Veterinary doctor",
  { label: "Science & Research", style: { color: "red", fontWeight: "bold" } },
  
  "Research Professional",
  "Science Professional",
  "Scientist",
  { label: "Software & IT", style: { color: "red", fontWeight: "bold" } },
  
  "Animator",
  "Cyber/Network Security",
  "Project Lead - IT",
  "Project Manager - IT",
  "Quality Assurance Engineer - IT",
  "Software Professional",
  "UI/UX designer",
  "Web/Graphic Designer",
  { label: "Top Management", style: { color: "red", fontWeight: "bold" } },
  
  "CxO/ Chairman/ President/ Director",
  "VP/ AVP/ GM/ DGM",
  { label: "Others", style: { color: "red", fontWeight: "bold" } },
  
  "Agent",
  "Artist",
  "Beautician",
  "Broker",
  "Fashion Designer",
  "Fitness Professional",
  "Interior Designer",
  "Security Professional",
  "Singer",
  "Social Services/ NGO/ Volunteer",
  "Sportsperson",
  "Travel Professional",
  "Writer",
  "Others"
  ]

  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            paddingRight: "0px", // Override the default padding-right
          },
        },
      },
    },
  });

  useEffect(() => {
    setIsFormValid(
      highestEducation &&
      currentEmployment &&
      profession &&
      annualIncome &&
      yearsOfExperience
    );
  }, [highestEducation, currentEmployment, profession, annualIncome, yearsOfExperience]);

  const handleNext = async () => {
    console.log('Previous page data:', location.state);
    navigate('/horoscope', {
      state: {
        ...location.state,
        highestEducation,
        currentEmployment,
        profession,
        annualIncome,
        yearsOfExperience,
      }
    });
  };
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <ThemeProvider theme={theme}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
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
          style={{
            height: "50px", // Reduce logo size for mobile
            marginRight: "20px", // Adjust margin for mobile
          }}
        />
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flex: 1,
          padding: isMobile ? "20px" : "0", // Add padding on mobile
        }}
      >
        {/* Caption Section */}
        <div
          style={{
            backgroundColor: "#F7E7CE",
            textAlign: "center",
            padding: "20px 10px", // Add padding for better spacing on mobile
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: isMobile ? "none" : "2", // Adjust flex basis for mobile
            order: isMobile ? 1 : 2, // Adjust order to place caption before form on mobile
          }}
        >
          <SchoolIcon
            style={{
              fontSize: 60, // Adjust icon size for mobile
              marginBottom: 10,
              color: "#6B0D37",
            }}
          />
          <Typography
            variant="h5" // Use smaller font size for mobile
            component="div"
            sx={{ color: "#6B0D37" }}
          >
            "Love knows no boundaries, and neither do we. Explore endless
            possibilities in finding your Better half"
          </Typography>
        </div>
        <div
          style={{
            padding: "20px 10px", // Adjust padding for mobile
            flex: isMobile ? "none" : "2", // Adjust flex basis for mobile
            order: isMobile ? 1 : 2, // Adjust order to place form after caption on mobile
          }}
        >
          <Typography
            sx={{ textAlign: "center" }}
            variant="h6" // Use a smaller font size for mobile
            gutterBottom
          >
            Education and Career
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack form elements vertically on mobile
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // Reduce gap between elements for mobile
              marginBottom: "20px", // Adjust margin for mobile
            }}
          >
              <FormControl
                variant="standard"
                sx={{ minWidth: "100%" }} // Make full width on mobile
                // error={!highestEducation}
              >
                <InputLabel id="highest-education-label">
                  Highest Education
                </InputLabel>
                <Select
                  labelId="highest-education-label"
                  id="highest-education-select"
                  value={highestEducation}
                  onChange={(event) => setHighestEducation(event.target.value)}
                  label="Highest Education"
                >
                  {highestEducationOtption.map((option, index) =>
                    typeof option === "string" ? (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ) : (
                      <MenuItem key={index} disabled style={option.style}>
                        {option.label}
                      </MenuItem>
                    )
                  )}
                </Select>
                {/* {!highestEducation && (
                  <FormHelperText>Highest education is required</FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ minWidth: "100%" }} // Make full width on mobile
                // error={!currentEmployment}
              >
                <InputLabel id="current-employment-label">
                  Current Employment
                </InputLabel>
                <Select
                  labelId="current-employment-label"
                  id="current-employment-select"
                  value={currentEmployment}
                  onChange={(event) => setCurrentEmployment(event.target.value)}
                  label="Current Employment"
                >
                  <MenuItem value="Employed">Employed</MenuItem>
                  <MenuItem value="Self-Employed">Self-Employed</MenuItem>
                  <MenuItem value="Unemployed">Unemployed</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
                {/* {!currentEmployment && (
                  <FormHelperText>
                    Current employment status is required
                  </FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ minWidth: "100%" }} // Make full width on mobile
                // error={!profession}
              >
                <InputLabel id="profession-label">Profession</InputLabel>
                <Select
                  labelId="profession-label"
                  id="profession-select"
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  label="Profession"
                >
                  {ProfessionOption.map((option, index) =>
                    typeof option === "string" ? (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ) : (
                      <MenuItem key={index} disabled style={option.style}>
                        {option.label}
                      </MenuItem>
                    )
                  )}
                </Select>
                {/* {!profession && (
                  <FormHelperText>Profession is required</FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ minWidth: "100%" }} // Make full width on mobile
                // error={!annualIncome}
              >
                <InputLabel id="annual-income-label">Annual Income</InputLabel>
                <Select
                  labelId="annual-income-label"
                  id="annual-income-select"
                  value={annualIncome}
                  onChange={(event) => setAnnualIncome(event.target.value)}
                  label="Annual Income"
                >
                  <MenuItem value="Rs 2-5 lakh">Rs 2-5 lakh</MenuItem>
                  <MenuItem value="Rs 5-7 lakh">Rs 5-7 lakh</MenuItem>
                  <MenuItem value="Rs 7-10 lakh">Rs 7-10 lakh</MenuItem>
                  <MenuItem value="Rs 10-15 lakh">Rs 10-15 lakh</MenuItem>
                  <MenuItem value="Rs 15-20 lakh">Rs 15-20 lakh</MenuItem>
                  <MenuItem value="Rs 20-30 lakh">Rs 20-30 lakh</MenuItem>
                  <MenuItem value="More than 30 lakh">
                    More than 30 lakh
                  </MenuItem>
                </Select>
                {/* {!annualIncome && (
                  <FormHelperText>Annual income is required</FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ minWidth: "100%" }} // Make full width on mobile
                // error={!yearsOfExperience}
              >
                <InputLabel id="years-of-experience-label">
                  Years of Experience
                </InputLabel>
                <Select
                  labelId="years-of-experience-label"
                  id="years-of-experience-select"
                  value={yearsOfExperience}
                  onChange={(event) =>
                    setYearsOfExperience(event.target.value)
                  }
                  label="Years of Experience"
                >
                  <MenuItem value="0-1 years">0-1 years</MenuItem>
                  <MenuItem value="2-5 years">2-5 years</MenuItem>
                  <MenuItem value="6-10 years">6-10 years</MenuItem>
                  <MenuItem value="More than 10 years">
                    More than 10 years
                  </MenuItem>
                </Select>
                {/* {!yearsOfExperience && (
                  <FormHelperText>
                    Years of experience is required
                  </FormHelperText>
                )} */}
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px", // Adjust gap for mobile
                marginTop: "20px",
              }}
            >
              <Button
                onClick={() =>
                  navigate("/additional-details", { state: location?.state })
                }
                variant="outlined"
                sx={{
                  width: "100px", // Adjust button width for mobile
                  borderColor: "#6B0D37",
                  color: "#6B0D37",
                }}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                disabled={!isFormValid}
                sx={{
                  width: "100px", // Adjust button width for mobile
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
        <section>
          <div className="cr">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                
                <p style={{ textAlign: "center" }}>
                  Copyright © <span id="cry">2024</span>{" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#FFBF00",
                    }}
                    href="#!"
                    target="_blank"
                  >
                    SoulMatch
                  </a>{" "}
                  All rights reserved.
                </p>
                <p>
                  <strong>Contact Us: </strong>
                  <a
                    href="mailto:soulmatchinfo@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "#FFBF0E",
                    }}
                  >
                    soulmatchinfo@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
  
}

export default EducationCareer;
