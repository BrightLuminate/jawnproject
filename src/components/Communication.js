import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Communication.css";
import Footer from "./Footer";

function Communication() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const handleWriteClick = () => {
    navigate("/WriteForm");
  };

  const handleSelectPost = (post) => {
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, views: p.views + 1 } : p
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/PostDetail", { state: { post } });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="communication-container">
      <div className="communication">
        <PostList 
          posts={currentPosts} 
          onWriteClick={handleWriteClick} 
          onSelect={handleSelectPost} 
          currentPage={currentPage}
          postsPerPage={postsPerPage}
        />
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
        />
      </div>
      <Footer />
    </div>
  );
}

function PostList({ posts, onWriteClick, onSelect, currentPage, postsPerPage }) {
  return (
    <div className="post-list">
      <h2>교수님과의 대화</h2> 
          <p>게시물 총 {posts.length}건 </p>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan="5">게시물이 없습니다.</td>
            </tr>
          ) : (
            posts.map((post, index) => (
              <tr key={post.id} onClick={() => onSelect(post)} style={{ cursor: "pointer" }}>
                <td>{(currentPage - 1) * postsPerPage + index + 1}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className="write-btn" onClick={onWriteClick}>작성하기</button>
    </div>
  );
}

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="pagination">
      <button 
        onClick={() => setCurrentPage(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        이전
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index + 1} 
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button 
        onClick={() => setCurrentPage(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        다음
      </button>
    </div>
  );
}

export default Communication;