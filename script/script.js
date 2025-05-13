/*

$(document).ready(function(){
    $(#header).load("/header.html");
    $(#footer).load("/footer.html");
});
*//*

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main-content');

  // 처음에 home.html 불러오기
  loadPage('board.html');

  // 네비게이션 링크에 클릭 이벤트 걸기
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = event.target.getAttribute('href');
      loadPage(page);

      // URL도 변경
      history.pushState({ page }, '', `?page=${page.replace('.html', '')}`);
    });
  });

  // 뒤로가기/앞으로가기 시 페이지 불러오기
  window.addEventListener('popstate', (event) => {
    const page = (event.state && event.state.page) || 'board.html';
    loadPage(page);
  });

  function loadPage(page) {
    fetch(page)
      .then(res => res.text())
      .then(html => {
        main.innerHTML = html;
      })
      .catch(err => {
        main.innerHTML = '<p>페이지를 불러오는 데 실패했어요 😢</p>';
        console.error(err);
      });
  }
});
*/