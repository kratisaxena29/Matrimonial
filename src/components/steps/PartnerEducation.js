import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Typography, Button, Select, MenuItem, createTheme, ThemeProvider, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import StarsIcon from '@mui/icons-material/Stars';
import { useLocation, useNavigate } from "react-router-dom";

function PartnerEducation() {
  const location = useLocation();
  const navigate = useNavigate();
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

  // Initialize state with values from location.state or default to empty strings
  const [part_highestEducation, setHighestEducation] = useState(location.state?.part_highestEducation || "");
  const [part_currentEmployment, setCurrentEmployment] = useState(location.state?.part_currentEmployment || "");
  const [part_profession, setProfession] = useState(location.state?.part_profession || "");
  const [part_annualIncome, setAnnualIncome] = useState(location.state?.part_annualIncome || "");
  const [part_yearsOfExperience, setYearsOfExperience] = useState(location.state?.part_yearsOfExperience || "");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Define options for dropdowns
  const highestEducationOtption = [
    { label: "Computers", style: { color: "red", fontWeight: "bold" } },
  
  "MCA",
  "BCA",
  "B.IT",
  "MCM",
  "PGDCA",
  "DCA",
  "ADCA",
  { label: "Finance/Commerce/Economics", style: { color: "red", fontWeight: "bold" } },

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

"PhD",
"M.Phil",
"LL.D.",
"D.Litt",
"Pharm.D",
"PhD",
"M.Phil",
{ label: "Non-Graduate", style: { color: "red", fontWeight: "bold" } },

"Diploma",
"High School",
"Trade School",
]

  const employmentOptions = [
    "Employed",
    "Self-Employed",
    "Business",
    "Student",
    "Unemployed"
  ];

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

  const experienceOptions = [
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "More than 10 years"
  ];

  // Function to validate form
  const validateForm = () => {
    const errors = {};
    if (!part_highestEducation.trim()) {
      errors.highestEducation = "Highest Education is required";
    }
    if (!part_currentEmployment.trim()) {
      errors.currentEmployment = "Current Employment is required";
    }
    if (!part_profession.trim()) {
      errors.profession = "Profession is required";
    }
    if (!part_annualIncome.trim()) {
      errors.annualIncome = "Annual Income is required";
    }
    if (!part_yearsOfExperience.trim()) {
      errors.yearsOfExperience = "Years of Experience is required";
    }
    return errors;
  };
console.log("...location state in education...",location.state)
  // Function to handle navigation to the next page
  const handleNext = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/partner-living', {
        state: {
          ...location.state,
          part_highestEducation,
          part_currentEmployment,
          part_profession,
          part_annualIncome,
          part_yearsOfExperience
        }
      });
    } else {
      setErrors(errors);
    }
  };

  // Hook to check form validity
  useEffect(() => {
    const isValid = part_highestEducation && part_currentEmployment && part_profession && part_annualIncome && part_yearsOfExperience;
    setIsFormValid(isValid);
  }, [part_highestEducation, part_currentEmployment, part_profession, part_annualIncome, part_yearsOfExperience]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navigation bar */}
        <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
        </nav>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1, backgroundColor: "#FFE5E7", textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <StarsIcon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Join us in the quest for love, where every profile is a chapter waiting to be written in the book of destiny."
            </Typography>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "50px" }}>
            <div>
              <Typography sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }} variant="h5" gutterBottom>
                Please fill your desired partner details
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
                Education and Career
              </Typography>

              {/* Highest Education */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300, marginTop: "10px" }}>
                  <InputLabel id="highest-education-label">Highest Education</InputLabel>
                  <Select
                    labelId="highest-education-label"
                    id="highest-education"
                    value={part_highestEducation}
                    onChange={(event) => setHighestEducation(event.target.value)}
                    error={Boolean(errors.highestEducation)}
                  >
                     {highestEducationOtption.map((option, index) => (
                      typeof option === "string" ? (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                      ) : (
                        <MenuItem key={index} disabled style={option.style}>{option.label}</MenuItem>
                      )
                    ))}
                  </Select>
                  {errors.highestEducation && <FormHelperText error>{errors.highestEducation}</FormHelperText>}
                </FormControl>
              </div>

              {/* Current Employment */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="current-employment-label">Current Employment</InputLabel>
                  <Select
                    labelId="current-employment-label"
                    id="current-employment"
                    value={part_currentEmployment}
                    onChange={(event) => setCurrentEmployment(event.target.value)}
                    error={Boolean(errors.currentEmployment)}
                  >
                    {employmentOptions.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {errors.currentEmployment && <FormHelperText error>{errors.currentEmployment}</FormHelperText>}
                </FormControl>
              </div>

              {/* Profession */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="profession-label">Profession</InputLabel>
                  <Select
                    labelId="profession-label"
                    id="profession"
                    value={part_profession}
                    onChange={(event) => setProfession(event.target.value)}
                    error={Boolean(errors.profession)}
                  >
                    {ProfessionOption.map((option, index) => (
                      typeof option === "string" ? (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                      ) : (
                        <MenuItem key={index} disabled style={option.style}>{option.label}</MenuItem>
                      )
                    ))}
                  </Select>
                  {errors.profession && <FormHelperText error>{errors.profession}</FormHelperText>}
                </FormControl>
              </div>

              {/* Annual Income */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="annual-income-label">Annual Income</InputLabel>
                  <Select
                    labelId="annual-income-label"
                    id="annual-income"
                    value={part_annualIncome}
                    onChange={(event) => setAnnualIncome(event.target.value)}
                    error={Boolean(errors.annualIncome)}
                  >
                      <MenuItem value="Rs 2-5 lakh">Rs 2-5 lakh</MenuItem>
                    <MenuItem value="Rs 5-7 lakh">Rs 5-7 lakh</MenuItem>
                    <MenuItem value="Rs 7-10 lakh">Rs 7-10 lakh</MenuItem>
                    <MenuItem value="Rs 10-15 lakh">Rs 10-15 lakh</MenuItem>
                    <MenuItem value="Rs 15-20 lakh">Rs 15-20 lakh</MenuItem>
                    <MenuItem value="Rs 20-30 lakh">Rs 20-30 lakh</MenuItem>
                    <MenuItem value="More than 30 lakh">More than 30 lakh</MenuItem>
                  </Select>
                  {errors.annualIncome && <FormHelperText error>{errors.annualIncome}</FormHelperText>}
                </FormControl>
              </div>

              {/* Years of Experience */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "40px" }}>
                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                  <InputLabel id="years-of-experience-label">Years of Experience</InputLabel>
                  <Select
                    labelId="years-of-experience-label"
                    id="years-of-experience"
                    value={part_yearsOfExperience}
                    onChange={(event) => setYearsOfExperience(event.target.value)}
                    error={Boolean(errors.yearsOfExperience)}
                  >
                    {experienceOptions.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {errors.yearsOfExperience && <FormHelperText error>{errors.yearsOfExperience}</FormHelperText>}
                </FormControl>
              </div>

              {/* Navigation Buttons */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", marginBottom: "40px" }}>
                <Button
                  onClick={() => navigate('/partner-family',{state: location.state})}
                  variant="outlined"
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: 150,
                    height: 40,
                    textTransform: "inherit",
                    fontSize: "18px",
                    borderColor: "#FB6A6B",
                    color: "#FB6A6B",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  type="submit"
                  variant="contained"
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
                  disabled={!isFormValid} // Disable the button if form is not valid
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
          <div>
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All rights reserved.
          </div>
          <div>
            <Email style={{ marginRight: "10px" }} />
            <span style={{ color: "#FFF" }}>Email Address</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default PartnerEducation;
