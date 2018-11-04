// Duration of animations
var animationDuration = 1300;

// Initialize Firebase
/*var config = {
apiKey: "AIzaSyBNV6jBcHa8d7DdRSdrhPUFf0yJP463dME",
authDomain: "portfolio-contact-73560.firebaseapp.com",
databaseURL: "https://portfolio-contact-73560.firebaseio.com",
projectId: "portfolio-contact-73560",
storageBucket: "portfolio-contact-73560.appspot.com",
messagingSenderId: "614962534020"
};
firebase.initializeApp(config);
*/
function openLink(href){
    window.location.href = href;
}

// Changes classes for assigning exit first animations
function animateExit(){
//Filter elements depending on animation settings
    var firstInLastOut = $(".udAnimOrder0");
    var lastInFirstOut = $(".udAnimOrder1");
    var inLeftOutRight = $(".fadeInLeft");
    var inRightOutLeft = $(".fadeInRight");
    var inDownOutUp = $(".fadeInDown");
    var inBounceOutBounce = $(".bounceIn");
//Removing classes
    $("#sidebar").removeClass("active");
    firstInLastOut.removeClass("udAnimOrder0");
    lastInFirstOut.removeClass("udAnimOrder1");
    inLeftOutRight.removeClass("fadeInLeft");
    inRightOutLeft.removeClass("fadeInRight");
    inDownOutUp.removeClass("fadeInDown");
    inBounceOutBounce.removeClass("bounceIn");
//Adding classes
    firstInLastOut.addClass("udAnimOrder1");
    lastInFirstOut.addClass("udAnimOrder0");
    inLeftOutRight.addClass("fadeOutRight");
    inRightOutLeft.addClass("fadeOutLeft");
    inDownOutUp.addClass("fadeOutUp");
    inBounceOutBounce.addClass("bounceOut");
}

window.onload = function(){
    $("ContactSubmitButton").click(function(event){
        event.preventDefault();
    });

    $(".udAnimateExit").click(function(event){
        event.preventDefault();
        var clicked = $(this);
        var href = clicked.attr("href");
        animateExit();
        var waitAnimation = setTimeout(function(){ // Wait for animations to run before changing windows
            openLink(href);
            clearTimeout(waitAnimation);
        },animationDuration);
    });
}