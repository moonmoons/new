$(function () {
    $("#header").load("./layout/header.html");
    $("#footer").load("./layout/footer.html");
 // 사이드바에서 페이지 이동
    $(document).on('click', '.load-page', function (e) {
      e.preventDefault();
      const page = $(this).data('page');
      $("#main-content").load(page);
    });
  });