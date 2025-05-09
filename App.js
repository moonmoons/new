import React from 'react';
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
