$(() => {/* <= ES6(ECMAScript 6 바스크립트의 6번째 주요 버전) $(function () {*/
    $("#header").load("./layout/header.html");
    $("#footer").load("./layout/footer.html");
 // 사이드바에서 페이지 이동
    $(document).on('click', '.load-page', function (e) {
      e.preventDefault(); // 링크 이동 막기
      const page = $(this).data('page');
      $('#main-content').load(page);
      $('.load-page').removeClass("active");
      $(this).addClass('active');
    });
  });


function page_change(a){

    $('.nav-button').removeClass('active');
    $('#'+event.target.id).addClass('active');
    /*$('.grid-container').toggleClass('hide-sidebar');*/
    //메일화면
    if('nav_home' == event.target.id ){
        window.location.href= './index.html';
        $('.grid-container').removeClass('hide-sidebar');
        $('#'+event.target.id).addClass('hide-sidebar');
    }//포트폴리오
    else if('nav_portfolio' == event.target.id ){
        $('.grid-container').removeClass('hide-sidebar');

        $("#sidebar").load("./layout/sidebar_portfolid.html");
        $("#main-content").load("./board.html");
    }//이력정보
    else if('nav_history' == event.target.id ){
        $('.grid-container').removeClass('hide-sidebar');

        $("#sidebar").load("./layout/sidebar.html");
        $("#main-content").load("./history/page_main.html");
    }//작업일정
    else if('nav_schedule' == event.target.id ){
        $('.grid-container').removeClass('hide-sidebar');

        $("#sidebar").load("./layout/sidebar_schedule.html");
        $("#main-content").load("./schedule.html");
    }
}



