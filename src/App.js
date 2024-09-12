import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import VerifyOtp from "./components/VerifyOtp";
import ConfirmationOtp from "./components/ConfirmationOtp";
import ProfileDetails from "./components/steps/ProfileDetails";
import AdditionalDetails from "./components/steps/AdditionalDetails";
import EducationCareer from "./components/steps/EducationCareer";
import Horoscope from "./components/steps/Horoscope";
import LifeStyle from "./components/steps/LIfeStyle";
import FamilyDetails from "./components/steps/FamilyDetails";
import PartnerFamily from "./components/steps/PartnerFamily";
import PartnerEducation from "./components/steps/PartnerEducation";
import PartnerLiving from "./components/steps/PartnerLiving";
import UploadDocument from "./components/steps/UploadDocument";
import ProfileCompleted from "./components/steps/ProfileCompleted";
import Plan from "./components/Plan";
import Profiles from "./components/Profiles";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { Payment } from "@mui/icons-material";
import PersonDetails from "./components/PersonDetails";
import ForgotOtp from "./components/ForgotOtp";
import ResetPassword from "./components/ResetPassword";
import PasswordResetSuccess from "./components/PasswordResetSuccess";
import TermsConditions from "./components/TermsConditions";
import PublicRoute from "./Routes/PublicRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import NewPassword from "./components/NewPassword";
import AboutYourself from "./components/steps/Aboutyourself";
import PaymentFailure from "./components/PaymentFailure";
import PaymentSucess from "./components/PaymentSucess";
import ConfirmationProfile from "./components/ConfirmationProfile";
import UserProfile from "./components/steps/UserProfile";
import Dashboard from "./components/Dashboard";
import DashboardProfiles from "./components/DashboardProfile";
import GalleryUpload from "./components/steps/GalleryUpload";
import Interests from "./components/Interests";

function App() {
  const [logedIn, setlogedIn] = useState(
    sessionStorage.getItem("logedIn") === "true"
  );

  useEffect(() => {
    sessionStorage.setItem("logedIn", logedIn);
  }, [logedIn]);

  return (
    // <Dashboard/>
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute logedIn={logedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setlogedIn={setlogedIn} />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/confirmation-otp" element={<ConfirmationOtp />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/additional-details" element={<AdditionalDetails />} />
          <Route path="/education-career" element={<EducationCareer />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/family-details" element={<FamilyDetails />} />
          <Route path="/partner-family" element={<PartnerFamily />} />
          <Route path="/partner-education" element={<PartnerEducation />} />
          <Route path="/partner-living" element={<PartnerLiving />} />
          <Route path="/upload-document" element={<UploadDocument />} />
          <Route
            path="/Confirmation-Profile"
            element={<ConfirmationProfile />}
          />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/forgot-otp" element={<ForgotOtp />} />
          <Route path="/success" element={<PasswordResetSuccess />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/profile-completed" element={<ProfileCompleted />} />
          <Route path="/reset-password" element={<NewPassword />} />
          <Route path="/about-yourself" element={<AboutYourself />} />
          <Route path="/payment-fail" element={<PaymentFailure />} />
          <Route path="/payment-success" element={<PaymentSucess />} />
          <Route path="/gallery-upload" element={<GalleryUpload />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>

        <Route path="/" element={<ProtectedRoute logedIn={logedIn} />}>
          <Route
            path="/profiles"
            element={<Profiles setlogedIn={setlogedIn} />}
          />
          <Route path="/chat" element={<Chat setlogedIn={setlogedIn} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/dashboard" element={<Dashboard setlogedIn={setlogedIn}/>} />
          <Route path="/user-profile" element={<UserProfile setlogedIn={setlogedIn}/>} />x
          <Route path="/dashboard-profiles" element={<DashboardProfiles setlogedIn={setlogedIn}/>} />
          <Route
            path="/PersonDetails"
            element={<PersonDetails setlogedIn={setlogedIn} />}
          />
          <Route
            path="/interests"
            element={<Interests setlogedIn={setlogedIn} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
