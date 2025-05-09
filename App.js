.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.app-header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}

.post-list {
  margin-top: 20px;
}

.post-item {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.post-item h2 {
  font-size: 1.5rem;
  color: #333;
}

.post-item p {
  font-size: 1rem;
  color: #666;
}import React from 'react';
import './App.css';

const App = () => {
  // 더미 게시글 데이터
  const posts = [
    { id: 1, title: '리액트', content: '화면출력 공부 입니다.' },
    { id: 2, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글 내용입니다.' },
    { id: 3, title: '두 번째 게시글', content: '두 번째 게시글 내용입니다.' },
    { id: 4, title: '세 번째 게시글', content: '세 번째 게시글 내용입니다.' },
  ];

  return (
    <div className="app">
      {/* 상단 타이틀 */}
      <header className="app-header">
        <h1>메인 화면</h1>
      </header>

      {/* 게시글 리스트 */}
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
