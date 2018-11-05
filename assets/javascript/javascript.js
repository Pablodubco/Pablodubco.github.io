// Duration of animations
var animationDuration = 1300;

// --------Firebase-------------------------------------------\\
// Ititialize database
var config = {
apiKey: "AIzaSyBNV6jBcHa8d7DdRSdrhPUFf0yJP463dME",
authDomain: "portfolio-contact-73560.firebaseapp.com",
databaseURL: "https://portfolio-contact-73560.firebaseio.com",
projectId: "portfolio-contact-73560",
storageBucket: "portfolio-contact-73560.appspot.com",
messagingSenderId: "614962534020"
};
firebase.initializeApp(config);

var database = firebase.database();
var contactMessage = database.ref("/contact");
//------------------------------------------------------------//


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

// Submit animation control
function animateMessage(){
    var animatedForm = $(".contactForm");
    animatedForm.addClass("udAnimOrder0");
    animatedForm.addClass("zoomOutDown");
    var refreshAnimation = setTimeout(function(){
        animateMessageRefresh();
        clearTimeout(refreshAnimation);
    },animationDuration/2);
}
function animateMessageRefresh(){
    var animatedForm = $(".contactForm");
    animatedForm.removeClass("udAnimOrder0");
    animatedForm.removeClass("zoomOutDown");
    animatedForm.addClass("udAnimOrder0");
    animatedForm.addClass("fadeInRight");
}

window.onload = function(){
    $("#ContactSubmitButton").click(function(event){
        event.preventDefault();
    // Storing inputs
        var name = $("#contactName").val().trim();
        var mail = $("#contactMail").val().trim();
        var message = $("#contactMessage").val().trim();
    // Resetting styles
        $("#feedback").removeAttr("style");
        $("#contactMail").removeAttr("style");
        $("#contactMessage").removeAttr("style");
        $("#feedback").text("");
        $("#contactMailCheck").text("");
        $("#contactMessageCheck").text("");
    // Validating input
        var validMail = false;
        var validMessage = true;
        if (name === "" || name === " " || name === undefined) name = "udNoName";
        if(mail !== "" && mail !== undefined){
            for (var i = 0; i < mail.length; i++){
                if(mail.charAt(i)==="@"){
                    for (var j = i; j < mail.length; j++){
                        if(mail.charAt(j)==="." && j < mail.length && validMail === false) validMail = true;
                    }
                }
            }
        }
        if(mail.includes(" ")) validMail = false;
        if(!validMail){
            $("#contactMail").attr("style","border:red solid 1px;");
            $("#contactMailCheck").text("Enter a valid email");
        }
        if(message === "" || message === " " || message === undefined){
            validMessage = false;
            $("#contactMessage").attr("style","border:red solid 1px;");
            $("#contactMessageCheck").text("Message required");
        }
    // Sending message to firebase for processing
        if(!validMail || !validMessage){
            $("#feedback").attr("style","color:red;")
            $("#feedback").text("Message not sent");
        } 
        else{
            var today = new Date;
            var year = today.getFullYear();
            var month = today.getMonth()+1;
            var day = today.getDate();
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();
            if (month<10) month = "0"+month.toString();
            if (day<10) day = "0"+day.toString();
            if (hour<10) hour = "0"+hour.toString();
            if (minute<10) minute = "0"+minute.toString();
            if (second<10) second = "0"+second.toString();
            var date = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second+":"
            var contactInfo = {
                date: date,
                name: name,
                email: mail,
                message: message
            }
            contactMessage.push(contactInfo);
            animateMessage();
            $("#feedback").text("Message sent!");
            $("#contactName").val('');
            $("#contactMail").val('');
            $("#contactMessage").val('');
        }
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