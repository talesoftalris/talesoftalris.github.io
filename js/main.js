
$('ul.navbar-nav li a').each((i, item) => {
    if ($(item).attr('data-page')) {
        $(item).on('click', (element) => {
            $('#mainContainer').load($(element.target).attr('data-page')+'.html');
            $(".nav").find(".active").removeClass("active");
            $(this).addClass("active");
        });
    }
});

$(document).ready(function(){
   // $('.header').height($(window).height());
    $('#branding').on('click', (element) => {
        $('#mainContainer').load('home.html');
        $(".nav").find(".active").removeClass("active");
    });
    $('#mainContainer').load('home.html');  
})
