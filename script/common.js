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


function page_change(a){

    $('.nav-button').removeClass('active');
    $('#'+event.target.id).addClass('active');
    /*$('.grid-container').toggleClass('hide-sidebar');*/
    if('nav_home' == event.target.id ){
        window.location.href= './index.html';
        $('.grid-container').removeClass('hide-sidebar');
        $('#'+event.target.id).addClass('hide-sidebar');
    }
    else if('nav_portfolio' == event.target.id ){
        $('.grid-container').removeClass('hide-sidebar');

        $("#sidebar").load("./layout/sidebar_portfolid.html");
        $("#main-content").load("./board.html");
    }
    else if('nav_history' == event.target.id ){
        $('.grid-container').removeClass('hide-sidebar');

        $("#sidebar").load("./layout/sidebar.html");
        $("#main-content").load("./history/page_main.html");
    }
}



