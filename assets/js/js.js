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

// responsive
function responsive(x) {
    var col_md_7 = document.getElementById("remove");
    var responsive_bullet = document.getElementById("responsive-bullet");
    
    if (x.matches) {
        col_md_7.classList.remove('col-md-7');
        col_md_7.classList.add('width-full');
        col_md_7.classList.add('design-responsive-home');
        responsive_bullet.style.display = "block";
    } else {        
        col_md_7.classList.add('col-md-7');
        col_md_7.classList.remove('width-full');
        col_md_7.classList.remove('design-responsive-home');
        responsive_bullet.style.display = "none";
    }
}

var x = window.matchMedia("(max-width: 1000px)")
responsive(x)
x.addListener(responsive)