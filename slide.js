console.log("非web程序员的悲哀，原谅我这个简陋的请帖！");
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
//var sildeInterval = setInterval(nextSlide, 7000);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
}

function goToSlide(n) {
    var origClassName = slides[currentSlide].className;
    slides[currentSlide].className = origClassName.replace('showing', '');

    // slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    //slides[currentSlide].className = 'slide showing';

    slides[currentSlide].className += ' showing';
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideShow() {
    playing = false;
    clearInterval(sildeInterval);
}

function playSlideShow() {
    playing = true;
    sildeInterval = setInterval(nextSlide, 5000);
}

document.getElementById('slide-btn').onclick = function() {
    //pauseSlideShow();
    nextSlide();
}