
var load = document.getElementById("loader");
window.addEventListener('load', function () {
    load.style.display = "none";
});

$('#images-move-1').mousemove(function (e) {
    var moveX = (e.pageX * -1 / 15);
    var moveY = (e.pageY * -1 / 15);
    var width = (e.pageX);
    $(this).css({
        'background-position' : moveX + 'px ' + moveY + 'px',
    });
    $('#images-move-2').css('background-position', moveX + 'px ' + moveY + 'px');
});
$('#images-move-2').mousemove(function(e){
    var moveX = (e.pageX * -1 / 15);
    var moveY = (e.pageY * -1 / 15);
    $(this).css({
        'background-position' : moveX + 'px ' + moveY + 'px',
    });
    $('#images-move-1').css('background-position', moveX + 'px ' + moveY + 'px');
});

var typed = new Typed('#typed', {
    strings : ["Web Developer", "Programmer", "Student at Institut Teknologi Sumatera", "Nestiawan Ferdiyanto"],
    typeSpeed: 30,
    delaySpeed : 90,
    loop : true,
});

var loader_text = new Typed('#loader_text', {
    strings: [" Sebentar Ya..."],
    typeSpeed: 50,
    delaySpeed : 10,
    loop : true,
})
