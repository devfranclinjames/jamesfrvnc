// setInterval(function(){
//     const x = $('.classinit').attr('class');
//     if (x === undefined){
//     	//$( append script here).addClass('classinit');
//             $('.carousel-item').prepend('<div class="opaek classinit" />');
//     	console.log(x);
//     }
//     else {
//         return;
//     }
// },10);
$(document).ready(function(){
    $('.parallax-bg').css('top', -(window.pageYOffset / 4) + 'px');
    $(window).scroll(function() {
        $('.parallax-bg').css('top', -(window.pageYOffset / 4) + 'px');
    });
});
