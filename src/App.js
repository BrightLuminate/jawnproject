import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HeaderBanner from "./components/HeaderBanner.js";
import PerformanceList from "./components/PerformanceList";
import Footer from "./components/Footer";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import PerformanceInfo from "./components/PerformanceInfo";
import Greeting from "./components/Greeting";
import History from "./components/History";

import YotubesList from "./components/YotubesList";
import Nationals from "./components/Nationals";


import Curriculum from "./components/Curriculum";
import Pricing from "./components/Pricing";
import Online from "./components/Online";

// 원장 대화 

import Communication from "./components/Communication";
import WriteForm from "./components/WriteForm";
import PasswordCheck from "./components/PasswordCheck";
import PostDetail from "./components/PostDetail"; // ✅ PostDetail 추가

import Curriculums from "./components/Curriculums";
import Pricings from "./components/Pricings";
import Onlines from "./components/Onlines";

import GugakNewspaper from "./components/GugakNewspaper";

import EducationInquiry from "./components/EducationInquiry";
import GroupInquiry from "./components/GroupInquiry";

import GugakChoirIntroduction from "./components/GugakChoirIntroduction";
import KimYoungJaeIntroduction from "./components/KimYoungJaeIntroduction";
import Sitemap from "./components/sitemap";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <>
                <HeaderBanner />
                <PerformanceList />
                <YotubesList/>
                <Nationals/>
                <Footer />
              </>
            }
          />

          {/* Gugak Choir Routes */}
          <Route path="/" element={<Navigate replace to="/Communication" />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/WriteForm" element={<WriteForm />} />
          <Route path="/PasswordCheck" element={<PasswordCheck />} />
          <Route path="/PostDetail" element={<PostDetail />} />

          {/* 교육 문의  */}
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Online" element={<Online />} />
          

          {/* 단체문의 */}
          <Route path="/Curriculums" element={<Curriculums />} />
          <Route path="/Pricings" element={<Pricings />} />
          <Route path="/Onlines" element={<Onlines />} />



          {/* Additional Routes */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/performance-info" element={<PerformanceInfo />} /> */}
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/history" element={<History />} />
          <Route path="/gugak-newspaper" element={<GugakNewspaper />} />
          <Route path="/gugak-choir-introduction" element={<GugakChoirIntroduction />} />
          <Route path="/education-inquiry" element={<EducationInquiry />} />
          <Route path="/group-inquiry" element={<GroupInquiry />} />
         
          <Route path="/kim-young-jae-introduction" element={<KimYoungJaeIntroduction />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

