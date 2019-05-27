
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

$("#navbarcontent a")
  .each(function(i) {
    $("#makeasound")
    .clone()
    .attr("id", "makeasound-" + i)
    .appendTo($(this).parent()); 
    $(this).data("beepId", i);
  })
  .mouseenter(function() {
    $("#makeasound-" + $(this).data("beepId"))[0].play();
  });

  $("#branding")
    .mouseenter(function() {
        $("#makeasound")[0].play();
    });
