// import React, { useState } from 'react';
// import '../css/Login.css'; // CSS 파일 경로를 변경했습니다.
// import Footer from './Footer'; // Footer 컴포넌트 임포트

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [autoLogin, setAutoLogin] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('로그인:', { username, password, rememberMe, autoLogin });
//   };

//   return (
//     <div className="login-page" >
//       <div className="login-header">
//         <div className="login-container">
//           <h2 className="login-title">로그인</h2>
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="input-group">
//               <label>사용자 이름:</label>
//               <input 
//                 type="text" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="input-group">
//               <label>비밀번호:</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="input-group-inline">
//               <label>
//                 <input 
//                   type="checkbox" 
//                   checked={rememberMe} 
//                   onChange={(e) => setRememberMe(e.target.checked)} 
//                 />
//                 아이디 저장
//               </label>
//               <label>
//                 <input 
//                   type="checkbox" 
//                   checked={autoLogin} 
//                   onChange={(e) => setAutoLogin(e.target.checked)} 
//                 />
//                 자동 로그인
//               </label>
//             </div>
//             <button className="login-button" type="submit">로그인</button>
//           </form>
//           <div className="login-links">
//             <button className="link-button" onClick={() => alert('로그인아이디 찾기')}>로그인아이디 찾기</button> | 
//             <button className="link-button" onClick={() => alert('비밀번호 찾기')}>비밀번호 찾기</button> | 
//             <button className="link-button" onClick={() => alert('회원가입')}>회원가입</button>
//           </div>
//         </div>
//       </div>
//       <Footer /> {/* Footer 컴포넌트를 로그인 창 아래에 배치 */}
//     </div>
//   );
// };

// export default Login;
