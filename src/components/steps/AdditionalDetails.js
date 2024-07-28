import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";

import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  InputLabel,
  FormControl,
  FormHelperText
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function AdditionalDetails() {
  const location = useLocation()
  const [caste, setCaste] = useState(location?.state?.caste || "");
  const [subCaste, setSubCaste] = useState(location?.state?.subCaste || "");
  const [origin, setOrigin] = useState(location?.state?.origin || "");
  const [motherTongue, setMotherTongue] = useState(location?.state?.motherTongue || "");
  const [height, setHeight] = useState(location?.state?.height || "");
  const [weight, setWeight] = useState(location?.state?.weight || "");
  const [gothra, setGothra] = useState(location?.state?.gothra || "");
  const [petFriendly, setPetFriendly] = useState(location?.state?.petFriendly || "");
  const [indianCities, setIndianCities] = useState(location?.state?.indianCities || []);
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();


  const originOptions = indianCities; // Add more options as needed

  const motherTongueOptions = [
    { label: "North", style: { color: "red", fontWeight: "bold" } },
    "Hindi - Delhi",
    "Hindi - MP/CG",
    "Hindi - UP/UK",
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
  // Add more options as needed
  // const heightOptions = ["< 5'0\"", "5'0\" - 5'5\"", "5'5\" - 6'0\"", "< 6'0\""]; // Add more options as needed
  const heightOptions = [
    "4'0''(1.22 mts)",
    "4'1''(1.24 mts)",
    "4'2''(1.28 mts)",
    "4'3''(1.31 mts)",
    "4'4''(1.34 mts)",
    "4'5''(1.35 mts)",
    "4'6''(1.37 mts)",
    "4'7''(1.40 mts)",
    "4'8''(1.42 mts)",
    "4'9''(1.45 mts)",
    "4'10''(1.47 mts)",
    "4'11''(1.50 mts)",
    "5'0''(1.52 mts)",
    "5'1''(1.55 mts)",
    "5'2''(1.58 mts)",
    "5'3''(1.60 mts)",
    "5'4''(1.63 mts)",
    "5'5''(1.65 mts)",
    "5'6''(1.68 mts)",
    "5'7''(1.70 mts)",
    "5'8''(1.73 mts)",
    "5'9''(1.75 mts)",
    "5'10''(1.78 mts)",
    "5'11''(1.80 mts)",
    "6'0''(1.83 mts)",
    "6'1''(1.85 mts)",
    "6'2''(1.88 mts)",
    "6'3''(1.91 mts)",
    "6'4''(1.93 mts)",
    "6'5''(1.96 mts)",
    "6'6''(1.98 mts)",
    "6'7''(2.01 mts)",
    "6'8''(2.03 mts)",
    "6'9''(2.06 mts)",
    "6'10''(2.08 mts)",
    "6'11''(2.11 mts)",
    "7' (2.13 mts) plus",
   
  ]
  const weightOptions = ["< 50 kg", "50 - 60 kg", "60 - 70 kg", " 70 - 80kg", "<80kg"]; // Add more options as needed
  const casteOptions = [
    "Aggarwal", "Kanyakubj Brahmin", "Gaur Brahmin", "Brahmin" , 
    "Jat" ,"Jain","Maheshwari" ,"Kayastha" , "Khatri" ,
     "Kshatriya" , "Maratha" , "Rajput" , "Sindhi" , "Sunni" , "Oberoi",
     "Arora" , "Shwetamber" , "Yadav" , "Bania" , "Scheduled Caste" , 
     "Digamber"  , "Sikh Jat" , "Gupta",
      "Tei" , "Vaishnav" ,"Kurmi kshatriya", "Other" ];
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
  // const gothraOptions = ["Gothra1", "Gothra2", "Gothra3", "Gothra4"];
  const petFriendlyOptions = ["Yes", "No"];

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
        const allCities = response.data.data;
        const indianCities = allCities.filter((city) => city.country === "India");
        const indianCityNames = indianCities.map((city) => city.city);
        setIndianCities(indianCityNames);
        // setLoading(false);
      } catch (error) {
        console.log("error", error)
        // setError(error.message);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Validation logic
  useEffect(() => {
    if (caste && subCaste && origin && motherTongue && height && weight  && petFriendly) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [caste, subCaste, origin, motherTongue, height, weight, petFriendly]);
console.log("...additional..",location.state)
  const handleAdditionalDetails = async () => {
    console.log('Previous page data:', location.state);
    navigate('/education-career', {
      state: {
        ...location.state,
        caste,
        subCaste,
        origin,
        motherTongue,
        height,
        weight,
        
        petFriendly,
      }
    });
  };

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

  return (
    <ThemeProvider theme={theme}>
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
            <FavoriteBorderIcon
              style={{ fontSize: 80, marginBottom: 10, color: "#6B0D37" }}
            />
            {/* Big text */}
            <Typography variant="h4" component="div" sx={{ color: "#6B0D37" }}>
              "Every love story is beautiful, but yours begins here. Let us help
              you find your happily ever after."
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
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Additional Details
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!caste}
                >
                  <InputLabel id="caste-select-label">Caste</InputLabel>
                  <Select
                    labelId="caste-select-label"
                    id="caste-select"
                    value={caste}
                    onChange={(event) => setCaste(event.target.value)}
                    label="Caste"
                  >
                    {casteOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!caste && (
                    <FormHelperText>Please select your caste</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!subCaste}
                >
                  <InputLabel id="sub-caste-select-label">Sub Caste</InputLabel>
                  <Select
                    labelId="sub-caste-select-label"
                    id="sub-caste-select"
                    value={subCaste}
                    onChange={(event) => setSubCaste(event.target.value)}
                    label="Sub Caste"
                  >
                    {subCasteOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!subCaste && (
                    <FormHelperText>
                      Please select your sub-caste
                    </FormHelperText>
                  )}
                </FormControl>
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!origin}
                >
                  <InputLabel id="origin-select-label">Origin</InputLabel>
                  <Select
                    labelId="origin-select-label"
                    id="origin-select"
                    value={origin}
                    onChange={(event) => setOrigin(event.target.value)}
                    label="Origin"
                  >
                    {originOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!origin && (
                    <FormHelperText>Please select your origin</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!motherTongue}
                >
                  <InputLabel id="mother-tongue-select-label">
                    Mother Tongue
                  </InputLabel>
                  <Select
                    labelId="mother-tongue-select-label"
                    id="mother-tongue-select"
                    value={motherTongue}
                    onChange={(event) => setMotherTongue(event.target.value)}
                    label="Mother Tongue"
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
                  {!motherTongue && (
                    <FormHelperText>
                      Please select your mother tongue
                    </FormHelperText>
                  )}
                </FormControl>
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
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!height}
                >
                  <InputLabel id="height-select-label">Height</InputLabel>
                  <Select
                    labelId="height-select-label"
                    id="height-select"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    label="Height"
                  >
                    {heightOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!height && (
                    <FormHelperText>Please select your height</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 195 }}
                  error={!weight}
                >
                  <InputLabel id="weight-select-label">Weight</InputLabel>
                  <Select
                    labelId="weight-select-label"
                    id="weight-select"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    label="Weight"
                  >
                    {weightOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!weight && (
                    <FormHelperText>Please select your weight</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginLeft: "120px",
                  marginBottom: "40px",
                }}
              >
                {/* <FormControl variant="standard" sx={{ minWidth: 195 }} error={!gothra}>
                  <InputLabel id="gothra-select-label">Gothra</InputLabel>
                  <Select
                    labelId="gothra-select-label"
                    id="gothra-select"
                    value={gothra}
                    onChange={(event) => setGothra(event.target.value)}
                    label="Gothra"
                  >
                    {gothraOptions.map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                  {!gothra && <FormHelperText>Please select your gothra</FormHelperText>}
                </FormControl> */}
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 200 }}
                  error={!petFriendly}
                >
                  <InputLabel id="pet-friendly-select-label">
                    Pet Friendly
                  </InputLabel>
                  <Select
                    labelId="pet-friendly-select-label"
                    id="pet-friendly-select"
                    value={petFriendly}
                    onChange={(event) => setPetFriendly(event.target.value)}
                    label="Pet Friendly"
                  >
                    {petFriendlyOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {!petFriendly && (
                    <FormHelperText>
                      Please select if you are pet friendly
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                <Button
                  onClick={() =>
                    navigate("/profile-details", { state: location?.state })
                  }
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
                  onClick={handleAdditionalDetails}
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
                  disabled={!formValid}
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
          <div>
            &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
            rights reserved.
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

export default AdditionalDetails;
