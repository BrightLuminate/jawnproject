import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSS 파일은 확장자 생략 가능 (Webpack이 처리)
import App from './App.js'; // <-- 이전에 수정했을 것
import reportWebVitals from './reportWebVitals.js'; // <-- 이 부분을 수정합니다!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


