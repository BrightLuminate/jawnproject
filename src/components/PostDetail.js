import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation 추가
import "../css/PostDetail.css"; // ✅ CSS 파일 불러오기
import Footer from "./Footer";

function PostDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state?.post; // ✅ PasswordCheck.js에서 넘겨준 post 데이터 받기

  if (!post) {
    navigate("/Communication"); // 🔹 post 데이터가 없으면 목록으로 이동
    return null;
  }

  const handleDelete = () => {
    // 관리자만 삭제할 수 있도록 (실제 구현에서는 인증 로직 필요)
    const isAdmin = window.confirm("관리자 권한으로 삭제하시겠습니까?");
    if (isAdmin) {
      if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
        const updatedPosts = JSON.parse(localStorage.getItem("posts")).filter(p => p.id !== post.id);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        navigate("/Communication"); // 삭제 후 목록으로 이동
      }
    } else {
      alert("게시물은 절대 지울 수 없습니다.");
    }
  };

  return (
    <div id="root">
      <div className="post-detail">
        <h2>교수님과의 대화</h2>
        <table>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>{post.author}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>{post.title}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>{post.content}</td>
            </tr>
            <tr>
              <td>작성일</td>
              <td>{post.date}</td>
            </tr>
            <tr>
              <td>조회수</td>
              <td>{post.views}</td>
            </tr>
          </tbody>
        </table>
        <div className="post-actions">
          <button className="back-btn" onClick={() => navigate("/Communication")}>
            목록으로 돌아가기
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            삭제
          </button>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetail;