// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../css/PasswordCheck.css";
// import Footer from "./Footer";

// function PasswordCheck() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const post = location.state?.post;
//   const [inputPassword, setInputPassword] = useState("");

//   if (!post) {
//     navigate("/Communication"); // 게시물 정보 없으면 목록으로 리디렉트
//     return null;
//   }

//   const handlePasswordChange = (e) => {
//     setInputPassword(e.target.value);
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (inputPassword === post.password) {
//       // 비밀번호 일치하면 `/PostDetail` 경로로 이동
//       navigate("/PostDetail", { state: { post } });
//     } else {
//       alert("비밀번호가 일치하지 않습니다.");
//     }
//   };

//   return (
//     <div id="root">
//       <div className="password-check">
//         <h2>게시물 확인</h2>
//         <form onSubmit={handlePasswordSubmit}>
//           <p>게시물을 보려면 비밀번호를 입력하세요.</p>
//           <input
//             type="password"
//             placeholder="비밀번호 입력"
//             value={inputPassword}
//             onChange={handlePasswordChange}
//           />
//           <div className="form-actions">
//             <button type="button" onClick={() => navigate("/Communication")}>
//               취소하기
//             </button>
//             <button type="submit">확인</button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default PasswordCheck;
