import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/WriteForm.css";
import Footer from "./Footer";
function WriteForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    views: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author ) {
      alert("제목, 작성자 해주세요");
      
      return;
    }

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = { ...formData, id: Date.now() };
    localStorage.setItem("posts", JSON.stringify([newPost, ...savedPosts]));

    navigate("/Communication"); // 작성 후 목록 페이지로 이동
  };

  return (
    <div id="root">
      <div className="write-form">
        <h2>게시물 작성</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="제목" value={formData.title} onChange={handleChange} />
          <input type="text" name="author" placeholder="작성자" value={formData.author} onChange={handleChange} />
          {/* <input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} /> */}
          <textarea name="content" placeholder="내용을 입력하세요." value={formData.content} onChange={handleChange} />
          <div className="form-actions">
            <button type="button" onClick={() => navigate("/Communication")}>취소하기</button>
            <button type="submit">작성하기</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
  
}

export default WriteForm;
