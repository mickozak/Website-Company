//START MENU
var $btn = $('.btn-menu');
$btn.click(function(){
    $('body').toggleClass('show');
});
//END MENU

//START SCROLLSPY
$(document).ready(function(){
    $('.scrollspy').scrollSpy({
        throttle: 3000,
        scrollOffset: 500
    });
});
//END SCROLLSPY