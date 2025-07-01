import React from "react";
import { useNavigate } from "react-router-dom"; // React Router 추가
import "../css/nationals.css"; 

import gugak1 from "../images/gugak1.jpeg";
import gugak3 from "../images/gugak3.jpeg";
import gugak4 from "../images/IMG1.jpeg";


function National() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div className="national-container">
      <h2 className="title">국악연주단 소개</h2>
      <p className="description">
      국악연주단은 한국 음악의 정체성을 바탕으로 시대에 맞는 변화를 모색하며, 우리 전통음악의 아름다움을 국내외에 전파하는 데 앞장서고 있습니다.
     앞으로도 국악의 계승과 발전을 위해 끊임없이 연구하고 노력할 것입니다.
      </p>
      <div className="ensemble-grid">
        <div className="ensemble-card" onClick={() => navigate("/gugak-choir-introduction")}>
          <img src={gugak1} alt="국악창작악단" />
          <p>국악창작악단</p>
        </div>
        
        <div className="ensemble-card" onClick={() => navigate("/kim-young-jae-introduction")}>
          <img src={gugak3} alt="김영재류 해금산조보존회" />
          <p>김영재류 해금산조</p>
        </div>
   
        <div className="ensemble-card" onClick={() => navigate("/The-calling-locus")}>
          <img src={gugak4} alt="The calling locus " />
          <p>The calling locus </p>
        </div>


      </div>
    </div>
  );
}

export default National;
