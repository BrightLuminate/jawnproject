import React, { useState } from "react";
import "../css/YotubesList.css"; // 국악 스타일의 CSS 적용

function CYotubesLis() {
  // 첫 번째 영상으로 요청한 영상 ID 설정
  const [selectedVideo, setSelectedVideo] = useState("sp-ROyqWZCE");

  // 영상 목록 추가
  const videos = [

  ];

  const youtubeChannelLink = "https://www.youtube.com/@_thecallinglocus1442";

  return (
    <div className="yotubes-container">
      <h1>공연 영상 Performance videos</h1>

      {/* 유튜브 채널 버튼 */}
      <button 
        className="youtube-channel-button"
        onClick={() => window.open(youtubeChannelLink, "_blank")}
      >
        유튜브 채널 방문하기
      </button>

      {/* 첫 번째 영상 고정 */}
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 영상 목록 */}
      <div className="video-list">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`video-item ${selectedVideo === video.id ? "selected" : ""}`}
            onClick={() => setSelectedVideo(video.id)}
          >
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CYotubesLis;
