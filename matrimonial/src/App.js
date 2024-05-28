import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VerifyOtp from './components/VerifyOtp';
import ConfirmationOtp from './components/ConfirmationOtp';
import ProfileDetails from './components/steps/ProfileDetails';
import AdditionalDetails from './components/steps/AdditionalDetails';
import EducationCareer from './components/steps/EducationCareer';
import Horoscope from './components/steps/Horoscope';
import LifeStyle from './components/steps/LIfeStyle';
import FamilyDetails from './components/steps/FamilyDetails';
import PartnerFamily from './components/steps/PartnerFamily';
import PartnerEducation from './components/steps/PartnerEducation';
import PartnerLiving from './components/steps/PartnerLiving';
import UploadDocument from './components/steps/UploadDocument';
import ProfileCompleted from './components/steps/ProfileCompleted';
import Plan from './components/Plan';
import Profiles from './components/Profiles';
import Login from './components/Login';

function App() {
  return (
    // <Profiles/>
    // <Plan/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/plan" element={<Plan />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile-completed" element={<ProfileCompleted />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
