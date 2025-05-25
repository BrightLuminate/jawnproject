// import React, { useState } from 'react';
// import axios from 'axios';
// import '../css/Signup.css'; // 적절한 경로 확인
// import Footer from './Footer'; // Footer 컴포넌트 임포트

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     userId: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//     phone: '',
 
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = '이름을 입력해주세요.';
//     if (!formData.userId) newErrors.userId = '아이디를 입력해주세요.';
//     if (!formData.password || formData.password.length < 8)
//       newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
//     if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = '올바른 이메일 형식을 입력해주세요.';
//     if (!/^\d{10,11}$/.test(formData.phone))
//       newErrors.phone = '전화번호는 숫자만 입력해주세요.';
//     return newErrors;
//   };
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     setErrors({});
//     setIsLoading(true);
  
//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/signup`,
//         formData
//       );
//       alert('회원가입이 성공적으로 완료되었습니다!');
//       setFormData({
//         username: '',
//         userId: '',
//         password: '',
//         confirmPassword: '',
//         email: '',
//         phone: '',
       
//       });
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || '회원가입 중 문제가 발생했습니다.';
//       alert(errorMsg);
//     } finally {
//       setIsLoading(false);
//     }
//   };
  

//   return (
//     <div className='signup-center'>
//       <div className='signup-back'>
//         <div className="signup-container">
//           <h2>회원가입</h2>
//           <form onSubmit={handleSignup} noValidate>
//             <div>
//               <label>이름:</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {errors.username && <p className="error">{errors.username}</p>}
//             </div>
//             <div>
//               <label>회원아이디:</label>
//               <input
//                 type="text"
//                 name="userId"
//                 value={formData.userId}
//                 onChange={handleChange}
//               />
//               {errors.userId && <p className="error">{errors.userId}</p>}
//             </div>
//             <div>
//               <label>비밀번호:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <div>
//               <label>비밀번호확인:</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//             </div>
//             <div>
//               <label>이메일:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>
//             <div>
//               <label>전화번호:</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && <p className="error">{errors.phone}</p>}
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//               <button type="submit" disabled={isLoading}>
//                 {isLoading ? '처리 중...' : '회원가입'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;
