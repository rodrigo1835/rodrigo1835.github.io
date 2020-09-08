debounce = function(func, wait, immediate){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var calNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(calNow) func.apply(context, args);
    };
};


(function(){
var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height() * 1/8;

function animeScroll(){
    var documentTop = $(document).scrollTop();

    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(debounce(function(){
    animeScroll();
    console.log('teste')
}, 100));

}());

(function(){

    var curSlide = 0;

    var maxSlide = $('.banner-single').length -1;


    var delay = 5;


    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();
    }

    function changeSlide(){
        setInterval(function(){
            $('.banner-single').eq(curSlide).fadeOut(5000);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
                $('.banner-single').eq(curSlide).fadeIn(5000);
        },delay * 1000)
    }

    initSlider();
    changeSlide();
}())
