import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import {
  Typography,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useLocation, useNavigate } from "react-router-dom";

function PartnerFamily() {
  const location = useLocation()
  const [part_ageFrom, setAgeFrom] = useState(location?.state?.part_ageFrom || "");
  const [part_martialStatus, setMartialStatus] = useState(location?.state?.part_martialStatus ||"");
  const [part_religion, setReligion] = useState(location?.state?.part_religion || "");
  const [part_caste, setCaste] = useState(location?.state?.part_caste || "");
  const [part_mothertongue, setMothertongue] = useState(location?.state?.part_mothertongue || "");
  const [part_height, setHeight] = useState(location?.state?.part_height || "");
  const [part_horoscopeMatch, setHoroscopeMatch] = useState(location?.state?.part_horoscopeMatch || "");
  const [part_gender,setPartgender] = useState(location?.state?.part_gender)
  const [part_petFriendly, setPetFriendly] = useState(location?.state?.part_petFriendly || "");
  const [Part_subCaste,setPart_subCaste] = useState(location?.state?.Part_subCaste || "");
  const [ageError, setAgeError] = useState(false);
  const [martialStatusError, setMartialStatusError] = useState(false);
  const [religionError, setReligionError] = useState(false);
  const [casteError, setCasteError] = useState(false);
  const [mothertongueError, setMotherTongueError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [horoscopeMatchError, setHoroscopeMatchError] = useState(false);
  const [petFriendlyError, setPetFriendlyError] = useState(false);
  const[PartgenderError,setPartgenderError] = useState(false)
const [subcasteError,setSubCasteError] = useState(false)
 
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

  // Define options for mother tongue and height
  const motherTongueOptions = [
    { label: "North", style: { color: "red", fontWeight: "bold" } },
    "Hindi - Delhi",
    "Hindi - MP/CG",
    "Hindi - UP/UK",
    "Hindi - Marwari",
    "Punjabi",
    "Hindi - Bihar/Jharkhand",
    "Hindi - Rajasthan",
    "Haryanvi",
    "Himachali",
    "Kashmiri",
    "Sindhi",
    "Urdu",

    { label: "West", style: { color: "red", fontWeight: "bold" } },
    "Marathi",
    "Gujarati",
    "Kutchi",
    "Hindi - MP/CG",
    "Konkani",
    "Sindhi",

    { label: "South", style: { color: "red", fontWeight: "bold" } },
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Tulu",
    "Urdu",

    { label: "East", style: { color: "red", fontWeight: "bold" } },
    "Bengali",
    "Oriya",
    "Assamese",
    "Sikkim/Nepali"
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
  const heightOptions = [
    "4'0\" - 4'5\"",
    "4'6\" - 4'11\"",
    "5'0\" - 5'5\"",
    "5'6\" - 5'11\"",
    "6'0\" - 6'5\"",
    "6'6\" - 6'11\"",
    "7' plus"
  ];
  
  

  const casteOptions = [
    "Agarwal", "Kanyakubj Brahmin", "Gaur Brahmin", "Brahmin" , 
    "Jat" ,"Jain","Maheshwari" ,"Kayastha" , "Khatri" ,
     "Kshatriya" , "Maratha" , "Rajput" , "Sindhi" , "Sunni" , "Oberoi",
     "Arora" , "Shwetamber" , "Yadav" , "Bania" , "Scheduled Caste" , 
     "Digamber"  , "Sikh Jat" , "Gupta","Scheduled Tribes",
      "Tei" , "Vaishnav" ,"Kurmi kshatriya", "Doesn't Matter" ];
  const subCasteOptions = [
    "Arora",
"Baniya",
"24 Manai Telugu Chettiar",
"96 Kuli Maratha",
"96K Kokanastha",
"Adi Andhra",
"Adi Dharmi",
"Adi Dravida",
"Adi Karnataka",
"Agamudayar",
"Agnikula Kshatriya",
"Agri",
"Ahir",
"Ahom",
"Ambalavasi",
"Arcot",
"Arekatica",
"Arora",
"Arunthathiyar",
"Arya Vysya",
"Aryasamaj",
"Ayyaraka",
"Bhandari",
"Brahmin - Audichya",
"Brahmin - Anavil",
"Brahmin - Audichya",
"Brahmin - Barendra",
"Brahmin - Bhatt",
"Brahmin - Bhumihar",
"Brahmin - Brahmbhatt",
"Brahmin - Dadhich/Dadheech",
"Brahmin - Daivadnya",
"Brahmin - Danua",
"Brahmin - Deshastha",
"Brahmin - Dhiman",
"Brahmin - Dravida",
"Brahmin - Embrandiri",
"Brahmin - Goswami",
"Brahmin - Gour",
"Brahmin - Gowd Saraswat",
"Brahmin - Gujar Gour",
"Brahmin - Gurukkal",
"Brahmin - Halua",
"Brahmin - Havyaka",
"Brahmin - Himachali",
"Brahmin - Hoysala",
"Brahmin - Iyengar",
"Brahmin - Iyer",
"Brahmin - Jangid",
"Brahmin - Jhadua",
"Brahmin - Jhijhotiya",
"Brahmin - Kanyakubja",
"Brahmin - Karhade",
"Brahmin - Kashmiri Pandit",
"Brahmin - Kokanastha",
"Brahmin - Kota",
"Brahmin - Kulin",
"Brahmin - Kumaoni",
"Brahmin - Madhwa",
"Brahmin - Maithili",
"Brahmin - Modh",
"Brahmin - Mohyal",
"Brahmin - Nagar",
"Brahmin - Namboodiri",
"Brahmin - Niyogi",
"Brahmin - Niyogi Nandavariki",
"Brahmin - Other",
"Brahmin - Paliwal",
"Brahmin - Panda",
"Brahmin - Pareek",
"Brahmin - Pushkarna",
"Brahmin - Rarhi",
"Brahmin - Rudraj",
"Brahmin - Sakaldwipi",
"Brahmin - Sanadya",
"Brahmin - Saraswat",
"Brahmin - Sanketi",
"Brahmin - Sarua",
"Brahmin - Vyas",
"Brahmbatt",
"Badaga",
"Baghel/Pal/Gaderiya",
"Bahi",
"Baidya",
"Baishnab",
"Brahmo",
"Buddar",
"Bunt (Shetty)",
"CKP",
"Chalawadi Holeya",
"Chambhar",
"Chandravanshi Kahar",
"Chasa",
"Chattada Sri Vaishnava",
"Chaudary",
"Chaurasia",
"Chekkala - Nair",
"Chennadasar",
"Cheramar",
"Chettiar",
"Chhetri",
"Chippolu/Mera",
"Devadiga",
"Devanga",
"Devar/Thevar/Mukkulathor",
"Devendra Kula Vellalar",
"Dhangar",
"Dheevara",
"Dhiman",
"Dhoba",
"Digambar",
"Dommala",
"Dusadh",
"Ediga",
"Ezhava",
"Ezhuthachan",
"Gabit",
"Ganakar",
"Gowda",
"Halwai",
"Hegde",
"Helava",
"Intercaste",
"Jaalari",
"Jaiswal",
"Jandra",
"Jangam",
"Jat",
"Jatav",
"Jetty Malla",
"Kachara",
"Kaibarta",
"Kakkalan",
"Kalar",
"Kalinga",
"Kalinga Vysya",
"Kashyap",
"Kayastha",
"Khandelwal",
"Koli",
"Koli Patel",
"Kshatriya",
"Lambadi",
"Laxminarayan gola",
"Leva Patidar",
"Leva Patil",
"Lingayat",
"Lingayat-Agasa",
"Lingayat-Akkasali",
"Lingayat-Aradhya",
"Lingayat-Balegala",
"Lingayat-Banagar",
"Lingayat-Banajiga",
"Lingayat-Bhandari",
"Lingayat-Bilijedaru",
"Lingayat-Bilimagga",
"Lingayat-Chaturtha",
"Lingayat-Dikshwant",
"Lingayat-Ganiga",
"Lingayat-Gowda",
"Lingayat-Gowli",
"Lingayat-Gurav",
"Lingayat-Hadapada",
"Lingayat-Hatgar",
"Lingayat-Hoogar / Hugar / Jeer",
"Lingayat-Jadaru",
"Lingayat-Jangam",
"Lingayat-Kudu Vokkaliga",
"Lingayat-Kumbar / Kumbara",
"Lingayat-Kumbhar",
"Lingayat-Kuruhina Setty",
"Lingayat-lamba",
"Lingayat-Lolagonda",
"Lingayat-Madivala",
"Lingayat-Malgar",
"Lingayat-Mali",
"Lingayat-Neelagar",
"Lingayat-Neeli / Neelagar",
"Lingayat-Neygi",
"Lingayat-Nolamba",
"Lingayat-Pancham",
"Lingayat-Panchamasali",
"Lingayat-Pattasali",
"Lingayat-Reddy Reddi",
"Lingayat-Sadar",
"Lingayat-Sajjan / Sajjanaganigar ",
"Lingayat-Setty",
"Lingayat-Shilwant",
"Lingayat-Shiva Simpi",
"Lingayat-Vani",
"Lingayat-Veerashaiva",
"Lohana",
"Lohana-Ghoghari",
"Lohana-Halai",
"Lohana-Kutchi",
"Lohana-Vaishnav",
"Lohar",
"Lubana",
"Madiga",
"Mahar",
"Mahendra",
"Maheshwari",
"Mahindra",
"Mahisya",
"Majabi Mazhbi",
"Mala",
"Mali",
"Mallah",
"Mallah-Kewat / Keot",
"Mallah-Nishad",
"Manikpuri",
"Manipuri",
"Manjhi",
"Mannan / Velon / Vannan",
"Mapila",
"Maratha",
"Maratha-96 Kuli Maratha",
"Maratha-Aramari Gabit",
"Maratha-Deshastha Maratha",
"Maratha-Deshmukh",
"Maratha-Deshtha Maratha",
"Maratha-Gomantak Maratha",
"Maratha-Jhadav",
"Maratha-Kokanastha Maratha",
"Maratha-Kunbi Dhanoje",
"Maratha-Kunbi Khaire",
"Maratha-Kunbi Khedule",
"Maratha-Kunbi Lonari",
"Maratha-Kunbi Maratha",
"Maratha-Kunbi Tirale",
"Maratha-Malwani",
"Maratha-Maratha Kshatriya",
"Maratha-Parit",
"Maratha-Patil",
"Maratha-Sonar",
"Maratha-Suthar",
"Maratha-Vani",
"Maravar",
"Maruthuvar",
"Matang",
"Maurya",
"Maurya-Kachchi",
"Maurya-Kushwaha",
"Meda",
"Meena",
"Meenavar",
"Meghwal",
"Mehra",
"Mehtar",
"Menon",
"Meru",
"Meru darji",
"Mochi",
"Modak",
"Mogaveera",
"Monchi",
"Motati Reddy",
"Mudaliar",
"Mudaliar-Agamudayar/Arcot/Thuluva Vellala",
"Mudaliar-Isai Vellalar",
"Mudaliar-Kerala Mudali",
"Mudaliar-Kongu Vellala Gounder",
"Mudaliar-Mudailiar Arcot",
"Mudaliar-Mudaliar All",
"Mudaliar-Mudaliar Saiva",
"Mudaliar-Mudaliar Sengupta",
"Mudaliar-Saiva Pillai Tirunelveli",
"Mudaliar-Sengunthar/Kaikolar",
"Mudaliar-Sozhiya Vellalar",
"Mudaliar-Thondai Mandala Vellala",
"Mudaliar-Veerakodi Vellala",
"Mudaliar Arcot",
"Mudiraj",
"Muthuraja",
"Naagavamsam",
"Nadar",
"Nadar-Kongu Nadar",
"Nagaralu",
"Naicker",
"Naicker-Naicker others",
"Naicker-Naicker-Vanniya Kula Kshatriyar",
"Naicker-Rajaka Chakali Dhobi",
"Naidu",
"Naidu-Balija Naidu",
"Naidu-Ediga /Goud",
"Naidu-Gajula Kavarai",
"Naidu-Gavara",
"Naidu-Kamma",
"Naidu-Kapu Naidu",
"Naidu-Munnuru Kapu",
"Naidu-Mutharaja",
"Naidu-Perika",
"Naidu-Raja Kambalathu Naicker",
"Naidu-Raju",
"OBC - Barber/Naayee",
"Oswal",
"Otari",
"Patel",
"Padmasali",
"Panchal",
"Pandaram",
"Panicker",
"Paravan",
"Parit",
"Parkava Kulam",
"Partraj",
"Pasi",
"Rajaka/Chakali/Dhobi",
"Rajbhar",
"Rajput",
"Rajput - Kumaoni",
"Rajput - Lodhi",
"Ramdasia",
"Ramgharia",
"Rauniyar",
"Ravidasia",
"Rawat",
"Reddiar",
"Reddy",
"Relli",
"SSK",
"Sagara - Uppara",
"Shilpkar",
"Shimpi",
"Sindhi - Bhanusali",
"Sindhi - Bhatia",
"Sindhi - Chhapru",
"Sindhi - Dadu",
"Sindhi - Hyderabadi",
"Sindhi - Larai",
"Sindhi - Lohana",
"Telaga",
"Teli",
"Thuluva Vellala",
"Vysya",
"Yadav",
"Other"
];
  const validateForm = () => {
    return (
      part_ageFrom &&
      part_martialStatus &&
      part_religion &&
      part_caste &&
      part_mothertongue &&
      part_height &&
      part_horoscopeMatch &&
      part_petFriendly &&
      part_gender
    );
  };
console.log("...partner...",location.state)
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = async () => {
    setAgeError(!part_ageFrom);
    setMartialStatusError(!part_martialStatus);
    setReligionError(!part_religion);
    setCasteError(!part_caste);
    setMotherTongueError(!part_mothertongue);
    setHeightError(!part_height);
    setHoroscopeMatchError(!part_horoscopeMatch);
    setPetFriendlyError(!part_petFriendly);
    setSubCasteError(!Part_subCaste)
    setPartgenderError(!PartgenderError)

    if (validateForm()) {
      navigate("/partner-education", {
        state: {
          ...location.state,
          part_ageFrom,
          part_martialStatus,
          part_religion,
          part_caste,
          Part_subCaste,
          part_mothertongue,
          part_height,
          part_horoscopeMatch,
          part_petFriendly,
          part_gender
        },
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "#6D0B32", padding: "10px 20px", display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "40px" }} />
      </nav>
      <div style={{ flex: 1 }}>
        <Grid container direction={isSmallScreen ? "column" : "row"}>
          <Grid item xs={12} sm={6} style={{ display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", backgroundColor: "#F7E7CE", padding: isSmallScreen ? "10px 0" : "50px" }}>
            <Diversity3Icon style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }} />
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37", textAlign: "center" }}>
              "Embark on a journey of companionship, where every moment is a step closer to finding your perfect match."
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ padding: isSmallScreen ? "10px" : "50px", }}>
            <Typography sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }} variant="h5" gutterBottom>
              Please fill your desired partner details
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
              Personal Details
            </Typography>

            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} justifyContent="center">
  <Grid item xs={12} sm={6} md={5}>
    <FormControl variant="standard" fullWidth>
      <InputLabel id="age-from-label">Age from</InputLabel>
      <Select
        labelId="age-from-label"
        id="age-from"
        label="Age"
        value={part_ageFrom}
        onChange={(event) => setAgeFrom(event.target.value)}
        error={ageError}
      >
        <MenuItem value="18-25">18-25 years</MenuItem>
        <MenuItem value="25-30">25-30 years</MenuItem>
        <MenuItem value="30-35">30-35 years</MenuItem>
        <MenuItem value="35-40">35-40 years</MenuItem>
        <MenuItem value="40-45">40-45 years</MenuItem>
        <MenuItem value="45-50">45-50 years</MenuItem>
        <MenuItem value="50-55">50-55 years</MenuItem>
        <MenuItem value="55-60">55-60 years</MenuItem>
        <MenuItem value="60-65">60-65 years</MenuItem>
        <MenuItem value="65-70">65-70 years</MenuItem>
        <MenuItem value="70-75">70-75 years</MenuItem>
      </Select>
      {ageError && <FormHelperText error>Please select an age range.</FormHelperText>}
    </FormControl>
  </Grid>
  <Grid item xs={12} sm={6} md={5}>
    <FormControl variant="standard" fullWidth>
      <InputLabel id="martial-status-label">Marital Status</InputLabel>
      <Select
        labelId="martial-status-label"
        id="martial-status"
        label="Marital Status"
        value={part_martialStatus}
        onChange={(event) => setMartialStatus(event.target.value)}
        error={martialStatusError}
      >
        <MenuItem value="Never Married">Never Married</MenuItem>
        <MenuItem value="Awaiting Divorce">Awaiting Divorce</MenuItem>
        <MenuItem value="Divorced">Divorced</MenuItem>
        <MenuItem value="Widowed">Widowed</MenuItem>
        <MenuItem value="Annulled">Annulled</MenuItem>
      </Select>
      {martialStatusError && <FormHelperText error>Please select marital status.</FormHelperText>}
    </FormControl>
  </Grid>
</Grid>

            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} justifyContent="center">
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="caste-select-label">Caste</InputLabel>
                  <Select
                    labelId="caste-select-label"
                    id="caste-select"
                    label="Caste"
                    value={part_caste}
                    onChange={(event) => setCaste(event.target.value)}
                    error={casteError}
                  >
                    {casteOptions.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {casteError && <FormHelperText error>Please select a caste.</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="sub-caste-select-label">Sub Caste</InputLabel>
                  <Select
                    labelId="sub-caste-select-label"
                    id="sub-caste-select"
                    label="Sub Caste"
                    value={Part_subCaste}
                    onChange={(event) => setPart_subCaste(event.target.value)}
                    error={subcasteError}
                  >
                    {subCasteOptions.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {subcasteError && <FormHelperText error>Please select a sub caste.</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} justifyContent="center">
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="religion-select-label">Religion</InputLabel>
                  <Select
                    labelId="religion-select-label"
                    id="religion-select"
                    label="Religion"
                    value={part_religion}
                    onChange={(event) => setReligion(event.target.value)}
                    error={religionError}
                  >
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Muslim">Muslim</MenuItem>
                    <MenuItem value="Christian">Christian</MenuItem>
                    <MenuItem value="Sikh">Sikh</MenuItem>
                    <MenuItem value="Buddhist">Buddhist</MenuItem>
                    <MenuItem value="Jain">Jain</MenuItem>
                    <MenuItem value="Bahai">Bahai</MenuItem>
                    <MenuItem value="Parsi">Parsi</MenuItem>
                  </Select>
                  {religionError && <FormHelperText error>Please select a religion.</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="mothertongue-select-label">Mother Tongue</InputLabel>
                  <Select
                    labelId="mothertongue-select-label"
                    id="mothertongue-select"
                    label="Mother Tongue"
                    value={part_mothertongue}
                    onChange={(event) => setMothertongue(event.target.value)}
                    error={mothertongueError}
                  >
                    {motherTongueOptions.map((option, index) =>
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
                  {mothertongueError && (
                    <FormHelperText error>
                      Please select your mother tongue.
                    </FormHelperText>
                  )}
                  {/* </Select> */}
                  {/* {mothertongueError && <FormHelperText error>Please select your mother tongue.</FormHelperText>} */}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} justifyContent="center">
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="height-select-label">Height</InputLabel>
                  <Select
                    labelId="height-select-label"
                    id="height-select"
                    label="Height"
                    value={part_height}
                    onChange={(event) => setHeight(event.target.value)}
                    error={heightError}
                  >
                    {heightOptions.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {heightError && <FormHelperText error>Please select your height.</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="horoscope-match-label">Horoscope match?</InputLabel>
                  <Select
                    labelId="horoscope-match-label"
                    id="horoscope-match"
                    label="Horoscope match?"
                    value={part_horoscopeMatch}
                    onChange={(event) => setHoroscopeMatch(event.target.value)}
                    error={horoscopeMatchError}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {horoscopeMatchError && <FormHelperText error>Please select if horoscope match is required.</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} justifyContent="center">
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="pet-friendly-label">Pet Friendly</InputLabel>
                  <Select
                    labelId="pet-friendly-label"
                    id="pet-friendly"
                    label="Pet Friendly"
                    value={part_petFriendly}
                    onChange={(event) => setPetFriendly(event.target.value)}
                    error={petFriendlyError}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value="Don't know">Don't know</MenuItem>
                  </Select>
                  {petFriendlyError && <FormHelperText error>Please select if pet-friendly is required.</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="gender-select-label">Gender</InputLabel>
                  <Select
                    labelId="gender-select-label"
                    id="gender-select"
                    label="Gender"
                    value={part_gender}
                    onChange={(event) => setPartgender(event.target.value)}
                    error={PartgenderError}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {PartgenderError && <FormHelperText error>Please select gender.</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>

            <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", alignItems: "center", justifyContent: "space-between", marginTop: "40px" }}>
              <Button
                onClick={() => navigate("/about-yourself", { state: location?.state })}
                variant="outlined"
                sx={{
                  width: "150px",
                  height: "40px",
                  textTransform: "inherit",
                  fontSize: "18px",
                  borderColor: "#FB6A6B",
                  color: "#FB6A6B",
                  marginBottom: isSmallScreen ? "10px" : "0",
                }}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                type="submit"
                variant="contained"
                sx={{
                  width: "150px",
                  height: "40px",
                  textTransform: "inherit",
                  fontSize: "18px",
                  backgroundColor: "#FB6A6B",
                  "&:hover": {
                    backgroundColor: "#FB6A6B",
                  },
                }}
                disabled={!validateForm()} // Disable the button if the form is not valid
              >
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <section>
  <div className="cr">
    <div className="container">
      <div className="footer-content">
        <p style={{ textAlign: "center", fontSize: "18px" }}>
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
        <p style={{ fontSize: "20px" }}>
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

export default PartnerFamily;
