import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HeaderBanner from "./components/HeaderBanner.js";


import PerformanceList from "./components/PerformanceList.js";
import PerformanceDetail from './components/PerformanceDetail.js';


import Footer from "./components/Footer.js";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import PerformanceInfo from "./components/PerformanceInfo";
import Greeting from "./components/Greeting.js";
import History from "./components/History.js";
import Thecalling from "./components/Thecallinglocus.js";

import Nationals from "./components/Nationals.js";



// 영상
import YotubesList from "./components/YotubesList.js";
import GYotubesLis from "./components/GYotubesLis.js"
import CYotubesLis from "./components/CYotubesLis.js"


import Curriculum from "./components/Curriculum.js";
import Pricing from "./components/Pricing.js";
import Online from "./components/Online.js";

// 원장 대화 

import Communication from "./components/Communication.js";
import WriteForm from "./components/WriteForm.js";
import PasswordCheck from "./components/PasswordCheck.js";
import PostDetail from "./components/PostDetail.js"; // ✅ PostDetail 추가

import Curriculums from "./components/Curriculums.js";
import Pricings from "./components/Pricings.js";
import Onlines from "./components/Onlines.js";

import GugakNewspaper from "./components/GugakNewspaper.js";

import EducationInquiry from "./components/EducationInquiry.js";
import GroupInquiry from "./components/GroupInquiry.js";

import GugakChoirIntroduction from "./components/GugakChoirIntroduction.js";
import KimYoungJaeIntroduction from "./components/KimYoungJaeIntroduction.js";
import Sitemap from "./components/sitemap.js";

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

          <Route path="/" element={<PerformanceList />} /> 
          <Route path="/performance/:eventId" element={<PerformanceDetail />} />

          {/* 영상  */} 

           <Route path="/GYotubesLis" element={ <GYotubesLis/>} />
             <Route path="/CYotubesLis" element={ <CYotubesLis/>} />
           <Route path="/YotubesList" element={  <YotubesList/>} />



          {/* 교육 문의  */}
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Online" element={<Online />} />
          

          {/* 단체문의 */}
          <Route path="/Curriculums" element={<Curriculums />} />
          <Route path="/Pricings" element={<Pricings />} />
          <Route path="/Onlines" element={<Onlines />} />


         <Route path="/The-calling-locus" element={<Thecalling />} />   
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

