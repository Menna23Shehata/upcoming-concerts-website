$(function () {
    // LOADER
    $(".lds-heart").fadeOut(1000, function () {
        $("#loader").fadeOut(1000, function () {
            $("body").css("overflow", "auto")
            $("#loader").remove()
        });
    })
});

// PARTICLES CODE
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":315.65905665290904}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":0.8120772123013451,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// ACTIVE
$("a[href^='#']").click(function (e) {
    let aHref = e.target.getAttribute('href')
    let sectionOffset = $(aHref).offset().top
    $("html, body").animate({scrollTop:sectionOffset}, 1000)
    $(e.target).parent().siblings().find('a').removeClass('active')
    $(e.target).addClass('active')
})

// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

// READ MORE
$(".item img").click(function () {
    $(this).nextAll('section').slideToggle(500);
    $(".owl-carousel section").not($(this).nextAll('section')).slideUp(500);
});

// COUNTDOWN
$('[data-countdown]').each(function(){
    var $deadline = new Date($(this).data('countdown')).getTime();

    var $dataDays = $(this).children('[data-days]');
    var $dataHours = $(this).children('[data-hours]');
    var $dataMinuts = $(this).children('[data-minuts]');
    var $dataSeconds = $(this).children('[data-seconds]');

    var x = setInterval(function(){

        var now = new Date().getTime();
        var timeLeft = $deadline - now;

        var days = Math.floor(timeLeft/(1000*60*60*24));
        var hours = Math.floor(timeLeft%(1000*60*60*24) / (1000*60*60));
        var minuts = Math.floor(timeLeft%(1000*60*60) / (1000*60));
        var seconds = Math.floor(timeLeft%(1000*60) / (1000));

        if( days < 10 ){
            days = '0'+days;
        }

        if( hours < 10 ){
            hours = '0'+hours;
        }

        if( minuts < 10 ){
            minuts = '0'+minuts;
        }

        if( seconds < 10 ){
            seconds = '0'+seconds;
        }

        $dataDays.html(days+' : ');
        $dataHours.html(hours+' : ');
        $dataMinuts.html(minuts+' : ');
        $dataSeconds.html(seconds);

        seconds < 10 ? '0'+seconds: seconds


        if( timeLeft <= 0 ){
            clearInterval(x);

            $dataDays.html('00 : ');
            $dataHours.html('00 : ');
            $dataMinuts.html('00 : ');
            $dataSeconds.html('00');

        }



    },1000);
})


// CHARACTER COUNTER
function countChars(obj){
    let maxLength = 100;
    let strLength = obj.value.length;
    let charRemain = (maxLength - strLength);
    if(charRemain < 0){
        document.getElementById("counter").innerHTML = '<span style="color: yellow;">You have exceeded the limit of '+maxLength+' characters</span>';
        document.querySelector(".span").innerHTML = ""
        document.querySelector(".btn-outline-danger").setAttribute('disabled','true')
    }else{
        document.getElementById("counter").innerHTML = charRemain ;
        document.querySelector(".span").innerHTML = "characters left"
        document.querySelector(".btn-outline-danger").removeAttribute('disabled')

    }
}
