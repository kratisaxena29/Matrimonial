import React, { useEffect, useState } from "react";
import mobileLogo from "../images/logo_maroon.png";
import logo from "../images/logo.png";
import noProfile from "../images/profiles/noProfile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  styled,
  Avatar,
  Menu,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import "../styles/profile.css";
function Profiles({ setlogedIn }) {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [interestedProfiles, setInterestedProfiles] = useState([]);
  const [subcaste, setSubCaste] = useState("");
  const [oneProfile, setOneProfiles] = useState("");
  const [sendRequest, setSendRequest] = useState([]);
  const [interestSent, setInterestSent] = useState("");

  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_BASE_URL;

  const casteOptions = [
    "Agarwal",
    "Kanyakubj Brahmin",
    "Gaur Brahmin",
    "Brahmin",
    "Jat",
    "Jain",
    "Maheshwari",
    "Kayastha",
    "Khatri",
    "Kshatriya",
    "Maratha",
    "Rajput",
    "Sindhi",
    "Sunni",
    "Oberoi",
    "Arora",
    "Shwetamber",
    "Yadav",
    "Bania",
    "Scheduled Caste",
    "Digamber",
    "Sikh Jat",
    "Gupta",
    "Scheduled Tribes",
    "Tei",
    "Vaishnav",
    "Kurmi kshatriya",
    "Other",
  ];

  const subCasteOptions = [
    "Select Sub Caste",
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
    "Other",
  ];
  const [requests, setRequests] = useState([]);

  const handleAccept = async (id) => {
    console.log(`Accepted request with id: ${id}`);

    try {
      const payload = {
        AllprofilesId: [id], // Wrap the ID in an array as expected by the backend
      };

      // Add email or phoneno to the payload based on available user data
      const { email, phoneno } = user;
      if (email) {
        payload.email = email;
      } else if (phoneno) {
        payload.phoneno = phoneno;
      } else {
        console.log("Neither email nor phone number is available.");
        return;
      }

      // Make API request
      const response = await axios.post(`${URL}/allProfileId`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);

      // Remove the accepted request from the list (Optimistic update)
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );

      // Navigate to the chat page after successful API response
      // navigate("/chat");
      toast.success("Hurry! Now we are able to chat");
      handleReject(id);
    } catch (error) {
      console.log("..error...", error);

      // Optional: Add user feedback for the error
      alert("An error occurred while processing the request.");
    }
  };

  // Handle Reject Button Click
  const handleReject = async (id) => {
    console.log(`Rejected request with id: ${id}`);
    console.log("...profileid...", oneProfile._id);
    console.log("...id...", id);
    try {
      // POST request with the updatedProfiles in AllprofilesId
      const response = await axios.get(
        `${URL}/deleteRequestById?id=${oneProfile._id}&requestId=${id}`
      );
      console.log("delete request successfully:", response.data);
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  const ResponsiveButton = styled(Button)(({ theme }) => ({
    fontSize: '0.7rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
  }));
  
  const ResponsiveCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '8px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  }));
  
  const ResponsiveAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: '16px',
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: '8px',
    },
  }));
  const ReligionOptions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Bahai",
  ];
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("..user...", user);
  console.log("..user email...", user.email);
  console.log("...age..", age);
  console.log("...caste..", caste);
  console.log("...religion...", religion);

  const handleInterest = (profileId) => {
    console.log("Interest button clicked for profile:", profileId);

    setInterestedProfiles((prevState) => {
      const updatedProfiles = [...prevState, profileId];
      console.log("..updatedProfile..", updatedProfiles);
      return updatedProfiles;
    });
  };
  //  const handleSendRequest = (profileId) => {
  //   setSendRequest((prevState) => {
  //     const updatedProfiles = [...prevState, profileId];
  //     console.log("..updatedsend ..", updatedProfiles);
  //     return updatedProfiles;
  //   });

  //  }

  const handleSendRequest = async (profileId) => {
    // Update the state first and capture the updated profiles
    let updatedProfiles = [];
    setSendRequest((prevState) => {
      updatedProfiles = [...prevState, profileId]; // Updated profiles
      console.log("Updated send request:", updatedProfiles);
      return updatedProfiles;
    });

    // Request body that includes updatedProfiles as AllprofilesId
    const requestBody = {
      email: user.email ? user.email : "",
      phoneno: user.phoneno ? user.phoneno : "", // Replace with dynamic value if needed
      profileId: oneProfile._id,
      AllprofilesId: updatedProfiles, // Use updatedProfiles in request body
    };

    console.log("..requestBody..", requestBody);

    try {
      // POST request with the updatedProfiles in AllprofilesId
      const response = await axios.post(
        `${URL}/AlltheSendRequestId`,
        requestBody
      );
      console.log("Request sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      uploadImageToServer(file);
    }
  };

  const triggerFileInput = () => {
    // document.getElementById('fileInput').click();
    navigate("/user-profile");
  };

  const uploadImageToServer = async (file) => {
    console.log("...upload image...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      let apiUrl = `${URL}/upload?`;
      if (user.email) {
        apiUrl += `email=${user.email}`;
      } else if (user.phoneno) {
        console.log("...user.phoneno...", user.phoneno);
        apiUrl += `phoneno=${user.phoneno}`;
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("File uploaded successfully:", data.fileUpload);
        handlegetImageUrl();
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handlegetImageUrl = async () => {
    console.log("...handleImageUrl....");
    const identifier = user.email ? user.email : user.phoneno;

    axios
      .get(`${URL}/getimagepath/${identifier}`)
      .then((response) => {
        console.log(
          ".get image url response...",
          response.data.response.imageUrl
        );
        setPhotoUrl(response.data.response.imageUrl);
      })
      .catch((error) => {
        console.log("...error..", error);
      });
  };

  useEffect(() => {
    handlegetImageUrl();
  }, []);
  console.log("..check...", user.phoneno);

  useEffect(() => {
    let id = oneProfile._id;
    console.log("...id...", id);

    // Make the axios request without wrapping it inside a function
    axios
      .get(`${URL}/getAllRequestById/${id}`)
      .then((response) => {
        console.log("..request...", response.data);
        // Update state with the response data (uncomment this when you're ready to use it)
        // setProfiles(response.data.response);
        const fetchedRequests = response.data.data.map((item) => ({
          _id: item._id,
          name: item.name,
          photo: item.fileUpload, // Assuming fileUpload is the image URL
        }));
        setRequests(fetchedRequests);
      })
      .catch((error) => {
        console.log("...error...", error);
      });

    // No need to call request() since axios.get() is already executed
  }, [oneProfile._id]); // Assuming oneProfile._id is the dependency

  useEffect(() => {
    // Construct the API URL based on filters
    let apiUrl = `${URL}/getAllprofile?`;
    if (user.email) {
      apiUrl += `email=${user.email}`;
    } else if (user.phoneno) {
      console.log("...user.phoneno...", user.phoneno);
      apiUrl += `phoneno=${user.phoneno}`;
    }

    if (age) {
      apiUrl += `&ageRange=${age}`;
    }
    if (religion) {
      apiUrl += `&religion=${religion}`;
    }
    if (caste) {
      apiUrl += `&caste=${caste}`;
    }
    if (subcaste) {
      apiUrl += `&subcaste=${subcaste}`;
    }

    console.log("Constructed API URL:", apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("..response...", response.data);
        setProfiles(response.data.response);
      })
      .catch((error) => {
        console.log("...error..", error);
      });
  }, [age, religion, caste, subcaste]);

  useEffect(() => {
    let identifier = user.email ? user.email : user.phoneno;
    axios
      .get(`${URL}/oneProfileByEmail/${identifier}`)
      .then((response) => {
        console.log("..response...", response.data);
        setOneProfiles(response.data);
      })
      .catch((error) => {
        console.log("...error...", error);
      });
  }, []);
  console.log("...krati...", oneProfile);

  useEffect(() => {
    const identifier = user.email ? user.email : user.phoneno;
    axios
      .get(`${URL}/getSendRequestIds/${identifier}`)
      .then((response) => {
        const sendResponse = response.data.data.AllprofilesId;
        console.log("...sendResponse..", sendResponse);
        setInterestSent(sendResponse);
      })
      .catch((error) => {
        console.log("Error fetching photos:", error);
      });
  }, [URL, user.email, user.phoneno]);

  const handleProfileDetails = async (profileId) => {
    console.log("...handleProfileDetails for profileId...", profileId);
    navigate("/PersonDetails", { state: { profileId } });
  };
  const StyledAppBar = styled(AppBar)({
    backgroundColor: "#6D0B32",
  });

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
  });

  const LogoImage = styled("img")({
    height: "52px",
  });

  const ButtonGroup = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "16px",
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "#F68C1E",
    borderRadius: "8px",
    padding: "13px 15px",
    fontSize: "14px",

    "&:hover": {
      backgroundColor: "#E57D0F",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      padding: "16px 10px",
    },
  }));

  const ProfileButton = styled(Button)({
    textTransform: "none",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    borderRadius: "8px",
    padding: "6px 12px",
    border: "1px solid orange",
    alignItems: "center",
  });

  const UserInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "12px",
  });

  const UserName = styled(Typography)({
    fontWeight: "bold",
    fontSize: "0.9rem",
    lineHeight: "1.2",
    color: "white",
  });

  const UserId = styled(Typography)({
    fontSize: "0.75rem",
    marginRight: 6,
    // opacity: 0.8,
    color: "white",
  });

  const Navbar = ({
    logo,
    oneProfile,
    handlePlans,
    handleChat,
    triggerFileInput,
    photoUrl,
    noProfile,
    handleLogout,
  }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const getPlanName = () => {
      switch (oneProfile.plan) {
        case "69900":
          return "Gold";
        case "99900":
          return "Diamond";
        case "139900":
          return "Platinum";
        default:
          return "Membership Plan";
      }
    };

    return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <LogoImage src={logo} alt="Logo" />
          <ButtonGroup>
            <ProfileButton onClick={handleClick}>
              <Avatar src={photoUrl || noProfile} alt={oneProfile?.name} />
              <UserInfo>
                <UserName>{oneProfile?.name}</UserName>
                {/* <UserId>ID: {oneProfile?.userId || "12345"}</UserId> */}
              </UserInfo>
              <KeyboardArrowDownIcon sx={{ marginBottom: 0.2 }} />
            </ProfileButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={triggerFileInput}>Edit Your Profile</MenuItem>
              <MenuItem onClick={handlePlans}>View Membership Plan</MenuItem>
              <MenuItem onClick={handleChat}>Chat</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            <StyledButton variant="outlined" onClick={handlePlans}>
              {getPlanName()}
            </StyledButton>
          </ButtonGroup>
        </StyledToolbar>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => {
            // Your image upload logic here
            handleClose();
          }}
        />
      </StyledAppBar>
    );
  };
  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
    navigate("/");
  };
  const handlePlans = () => {
    navigate("/plan");
  };
  const handleChat = () => {
    navigate("/chat");
  };
  useEffect(() => {
    console.log("..interestedProfiles after update..", interestedProfiles);
  }, [interestedProfiles]);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Navbar
        logo={isMobile ? mobileLogo : logo}
        oneProfile={oneProfile}
        handlePlans={handlePlans}
        handleChat={handleChat}
        triggerFileInput={triggerFileInput}
        photoUrl={photoUrl}
        noProfile={noProfile}
        handleLogout={handleLogout}
      />
      <div>
        <section style={{ paddingTop: "0px" }}>
          <div className="all-weddpro all-jobs all-serexp chosenini">
            <div className="container">
              <Grid container spacing={2}>
                {/* Filters Section */}
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    display: {
                      xs: "block",
                      md: "block",
                    },
                    marginTop: "70px",
                  }}
                >
                  <div className="filt-com lhs-cate">
                    <Typography variant="h6">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      Age
                    </Typography>
                    <div className="form-group">
                      <Select
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        fullWidth
                      >
                        <MenuItem value="">Select age</MenuItem>
                        <MenuItem value="18-30">18 to 30</MenuItem>
                        <MenuItem value="31-40">31 to 40</MenuItem>
                        <MenuItem value="41-50">41 to 50</MenuItem>
                        <MenuItem value="51-60">51 to 60</MenuItem>
                        <MenuItem value="61-70">61 to 70</MenuItem>
                        <MenuItem value="71-80">71 to 80</MenuItem>
                        <MenuItem value="81-90">81 to 90</MenuItem>
                        <MenuItem value="91-100">91 to 100</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="filt-com lhs-cate">
                    <Typography variant="h6">
                      <i className="fa fa-bell-o" aria-hidden="true" />
                      Select Religion
                    </Typography>
                    <div className="form-group">
                      <Select
                        value={religion}
                        onChange={(event) => setReligion(event.target.value)}
                        fullWidth
                      >
                        <MenuItem value="">Select Religion</MenuItem>
                        {ReligionOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="filt-com lhs-cate">
                    <Typography variant="h6">
                      <i className="fa fa-users" aria-hidden="true" />
                      Select Caste
                    </Typography>
                    <div className="form-group">
                      <Select
                        value={caste}
                        onChange={(event) => setCaste(event.target.value)}
                        fullWidth
                      >
                        <MenuItem value="">Select Caste</MenuItem>
                        {casteOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="filt-com lhs-cate">
                    <Typography variant="h6">
                      <i className="fa fa-users" aria-hidden="true" />
                      Select Sub Caste
                    </Typography>
                    <div className="form-group">
                      <Select
                        value={subcaste}
                        onChange={(event) => setSubCaste(event.target.value)}
                        fullWidth
                      >
                        {subCasteOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </Grid>

                {/* Profiles Section */}
                <Grid item xs={12} md={6}>
                  <div className="short-all">
                    <div className="short-lhs">
                      Showing <b>{profiles.length}</b> profiles
                    </div>
                  </div>
                  <div
                    className="all-list-sh"
                    style={{ height: "calc(100vh - 200px)", overflowY: "auto" }}
                  >
                    <ul>
                      {profiles.map((profile) => (
                        <li key={profile._id}>
                          <div
                            className="all-pro-box user-avil-onli"
                            data-useravil="avilyes"
                            data-aviltxt="Available online"
                          >
                            <div className="pro-img">
                              <a
                                onClick={() =>
                                  handleProfileDetails(profile._id)
                                }
                              >
                                <img src={profile.fileUpload} alt="" />
                              </a>
                              <div
                                className="pro-ave"
                                title="User currently available"
                              >
                                <span />
                              </div>
                            </div>
                            <div className="pro-detail">
                              <Typography variant="h5">
                                <a
                                  onClick={() =>
                                    handleProfileDetails(profile._id)
                                  }
                                >
                                  {profile.name}
                                </a>
                              </Typography>
                              <div className="pro-bio">
                                <span>{profile.heighestEduction}</span>
                                <span>{profile.profession}</span>
                                <span>{profile.age}</span>
                                <span>Height: {profile.height}</span>
                              </div>
                              <div className="links">
                                <span
                                  onClick={() => handleSendRequest(profile._id)}
                                  className="cta-chat"
                                  style={{
                                    cursor: "pointer",
                                    color: sendRequest.includes(profile._id)
                                      ? "red"
                                      : "black",
                                  }}
                                >
                                  {sendRequest.includes(profile._id)
                                    ? "Request Sent"
                                    : "Send Request"}
                                </span>
                              </div>
                            </div>
                            <span
                              className="enq-sav"
                              data-toggle="tooltip"
                              title="Click to save this profile."
                            >
                              {(() => {
                                switch (profile.plan) {
                                  case "69900":
                                    return "Gold";
                                  case "99900":
                                    return "Diamonds";
                                  case "139900":
                                    return "Platinum";
                                  default:
                                    return "";
                                }
                              })()}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Grid>

                {/* Requests Section */}
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ marginTop: "70px" }}
                >
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginBottom: "16px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Requests
                    </Typography>
                    {requests.map((request) => (
                      <Card
                        key={request._id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          padding: "8px",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                          transition: "transform 0.2s",
                          flexDirection: "row", // Ensures horizontal layout for card
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.02)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <Avatar
                          src={request.photo}
                          alt={request.name}
                          style={{
                            marginRight: "16px",
                            width: "50px",
                            height: "50px",
                          }}
                        />
                        <CardContent style={{ flex: 1, padding: "0" }}>
                          <Typography
                            variant="body2"
                            style={{ fontWeight: "500", marginBottom: "8px" }}
                          >
                            {request.name}
                          </Typography>
                          <Box>
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              onClick={() => handleAccept(request._id)}
                              style={{ marginRight: "8px", fontSize: "0.7rem" }}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                              onClick={() => handleReject(request._id)}
                              style={{ fontSize: "0.7rem" }}
                            >
                              Reject
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Profiles;
