import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App.js 파일을 가져와서

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트를 root div 안에 렌더링 */}
  </React.StrictMode>,
  document.getElementById('root') // index.html의 div id="root"에 렌더링
);
