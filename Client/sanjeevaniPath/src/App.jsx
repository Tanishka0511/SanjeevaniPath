import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DoctorRegister from "./pages/DoctorRegister";
import PatientRegister from "./pages/PatientRegister";
import RedirectToTiming from "./pages/RedirectToTIming";
import ConfirmationPage from "./pages/ConfirmationPage";
import DocConfirmation from "./pages/DocConfirmation";
import SelectCons from "./pages/SelectCons";
import VideoConsulation from "./pages/videoConsulation";
import VideoLink from "./pages/VideoLink";
import Chatbot from "./pages/ChatBot";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/patient-login" element={<PatientRegister />} />
      <Route path="/doctor-login" element={<DoctorRegister />} />
      <Route path="/register" element={<Register />} />
      <Route path="/redirectToTiming" element={<RedirectToTiming />} />
      <Route path="/confirmPage" element={<ConfirmationPage />} />
      <Route path="/confirmDoc" element={<DocConfirmation />} />
      <Route path="/selectCons" element={<SelectCons />} />
      <Route path="/videoCons" element={<VideoConsulation />} />
      <Route path="/video-link" element={<VideoLink />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  </Router>
);

export default App;
