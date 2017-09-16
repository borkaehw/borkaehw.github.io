// Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575px) { ... }

// Small devices (landscape phones, less than 768px)
// @media (max-width: 767px) { ... }

// Medium devices (tablets, less than 992px)
// @media (max-width: 991px) { ... }

// Large devices (desktops, less than 1200px)
// @media (max-width: 1199px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width

var language = "english";

// function

// education

function setProgress() {
    
    var gradStart = new Date();
    var gradGraduate = new Date();
    gradStart.setTime(1472688000000);
    gradGraduate.setTime(1525046400000);
    
    var undergradStart = new Date();
    var undergradGraduate = new Date();
    undergradStart.setTime(1314835200000);
    undergradGraduate.setTime(1435622400000);
    
    var today = new Date().getTime();

    // graduate school
    
    // set status
    $("#grad-status").css("font-weight", "bold");
    if (today >= gradGraduate) {
        if (language == "english") {
            $("#grad-status").html("Graduated");
        } else {
            $("#grad-status").html("已畢業");
        }
        $("#grad-progress").width("100%");
        $("#grad-progress").html("100%");
    } else {
        if (language == "english") {
            $("#grad-status").html("Currently Enrolled");
        } else {
            $("#grad-status").html("在學中");
        }
        var howFar = (today-gradStart)/(gradGraduate-gradStart);
        howFar = Math.floor(howFar*100);
        $("#grad-progress").width(howFar+"%");
        $("#grad-progress").html(howFar+"%");
    }
    
    // set margin
    var margin = Math.floor($("#grad-progress-top").width()-$("#grad-from").width()-$("#grad-to").width())-5;
    $("#grad-to").css('margin-left', margin+'px');
    
    // undergraduate school
    
    // set status
    $("#undergrad-status").css("font-weight", "bold");
    if (today >= undergradGraduate) {
        if (language == "english") {
            $("#undergrad-status").html("Graduated");
        } else {
            $("#undergrad-status").html("已畢業");
        }
        $("#undergrad-progress").width("100%");
        $("#undergrad-progress").html("100%");
    } else {
        if (language == "english") {
            $("#undergrad-status").html("Currently Enrolled");
        } else {
            $("#undergrad-status").html("在學中");
        }
        var howFar = (today-undergradStart)/(undergradGraduate-undergradStart);
        howFar = Math.floor(howFar*100);
        $("#undergrad-progress").width(howFar+"%");
        $("#undergrad-progress").html(howFar+"%");
    }
       
    // set margin
    var margin = Math.floor($("#undergrad-progress-top").width()-$("#undergrad-from").width()-$("#undergrad-to").width())-5;
    $("#undergrad-to").css('margin-left', margin+'px');
}

// language

function changeEnglish() {
    // head
    for (var i = 0; i < id.head.length; i++) {
        $("#"+id.head[i]).html(english.head[i]);
    }
    // contact
    for (var j = 0; j < id.contact.length; j++) {
        if (j < 4) {
            $("#"+id.contact[j]).attr("href", english.contact[j]);
        } else {
            $("#"+id.contact[j]).html(english.contact[j]);
        }
    }
    // work
    // parttime
    for (var j = 0; j < id.work.parttime.length; j++) {
        $("#"+id.work.parttime[j]).html(english.work.parttime[j]);
    }
    // intern
    for (var j = 0; j < id.work.intern.length; j++) {
        $("#"+id.work.intern[j]).html(english.work.intern[j]);
    }
    // school
    // um
    for (var j = 0; j < id.school.grad.length; j++) {
        $("#"+id.school.grad[j]).html(english.school.grad[j]);
    }
    // nthu
    for (var j = 0; j < id.school.undergrad.length; j++) {
        $("#"+id.school.undergrad[j]).html(english.school.undergrad[j]);
    }
    // grad course
    var gradCourseList = "";
    for (var j = 0; j < english.school.gradCourse.length; j++) {
        gradCourseList += "<li>" + english.school.gradCourse[j] + "</li>";
    }
    $("#"+id.school.gradCourse[0]).html(gradCourseList);
    
    // undergrad course
    var underCourseList = "";
    for (var j = 0; j < english.school.undergradCourse.length; j++) {
        underCourseList += "<li>" + english.school.undergradCourse[j] + "</li>";
    }
    $("#"+id.school.undergradCourse[0]).html(underCourseList);
    
    // status
    // um
    if ($("#grad-status").html() == "Graduated" || $("#grad-status").html() == "已畢業") {
        $("#grad-status").html("Graduated");
    } else {
        $("#grad-status").html("Currently Enrolled");
    }
    // nthu
    if ($("#undergrad-status").html() == "Graduated" || $("#undergrad-status").html() == "已畢業") {
        $("#undergrad-status").html("Graduated");
    } else {
        $("#undergrad-status").html("Currently Enrolled");
    }
    
    // project
    for (var j = 0; j < id.project.title.length; j++) {
        $("#"+id.project.title[j]).html(english.project.title[j]);
        $("#"+id.project.content[j]).html(english.project.content[j]);
    }
    
    // skill
    for (var j = 0; j < id.skill.title.length; j++) {
        $("#"+id.skill.title[j]).html(english.skill.title[j]);
        $("#"+id.skill.content[j]).html(english.skill.content[j]);
    }
    
    // biography
    var content = "";
    for (var j = 0; j < englishBio.length; j++) {
        content += "<p>" + englishBio[j] + "</p>";
    }
    $("#"+id.biography[0]).html(content);
    
    // extra
    for (var j = 0; j < id.extra.title.length; j++) {
        $("#"+id.extra.title[j]).find("h3").html(english.extra.title[j]);
        $("#"+id.extra.title[j]).find("img").attr("src", english.extra.img[j]);
        $("#"+id.extra.title[j]).find("p").html(english.extra.content[j]);
    }
}

function changeChinese() {
    for (var i = 0; i < id.head.length; i++) {
        $("#"+id.head[i]).html(chinese.head[i]);
    }
    // work
    // parttime
    for (var j = 0; j < id.work.parttime.length; j++) {
        $("#"+id.work.parttime[j]).html(chinese.work.parttime[j]);
    }
    // intern
    for (var j = 0; j < id.work.intern.length; j++) {
        $("#"+id.work.intern[j]).html(chinese.work.intern[j]);
    }
    // school
    // um
    for (var j = 0; j < id.school.grad.length; j++) {
        $("#"+id.school.grad[j]).html(chinese.school.grad[j]);
    }
    // nthu
    for (var j = 0; j < id.school.undergrad.length; j++) {
        $("#"+id.school.undergrad[j]).html(chinese.school.undergrad[j]);
    }
    // grad course
    var courseList = "";
    for (var j = 0; j < chinese.school.gradCourse.length; j++) {
        courseList += "<li>" + chinese.school.gradCourse[j] + "</li>";
    }
    $("#"+id.school.gradCourse[0]).html(courseList);
    
    // undergrad course
    var underCourseList = "";
    for (var j = 0; j < chinese.school.undergradCourse.length; j++) {
        underCourseList += "<li>" + chinese.school.undergradCourse[j] + "</li>";
    }
    $("#"+id.school.undergradCourse[0]).html(underCourseList);
    
    // status
    // um
    if ($("#grad-status").html() == "Graduated" || $("#grad-status").html() == "已畢業") {
        $("#grad-status").html("已畢業");
    } else {
        $("#grad-status").html("在學中");
    }
    // nthu
    if ($("#undergrad-status").html() == "Graduated" || $("#undergrad-status").html() == "已畢業") {
        $("#undergrad-status").html("已畢業");
    } else {
        $("#undergrad-status").html("在學中");
    }
    
    // project
//    for (var j = 0; j < id.project.title.length; j++) {
//        $("#"+id.project.title[j]).html(chinese.project.title[j]);
//        $("#"+id.project.content[j]).html(chinese.project.content[j]);
//    }
    
    // skill
    for (var j = 0; j < id.skill.title.length; j++) {
        $("#"+id.skill.title[j]).html(chinese.skill.title[j]);
    }
    
    // biography
    var content = "";
    for (var j = 0; j < chineseBio.length; j++) {
        content += "<p>" + chineseBio[j] + "</p>";
    }
    $("#"+id.biography[0]).html(content);
    
    // extra
    for (var j = 0; j < id.extra.title.length; j++) {
        $("#"+id.extra.title[j]).find("h3").html(chinese.extra.title[j]);
    }
}

// email me validation
function emailMe(event) {

    var error = "";

    if ($("#email-email-me").val() == "") {

      error += "The email field is required.<br>"

    }

    if ($("#subject-email-me").val() == "") {

      error += "The subject field is required.<br>"

    }

    if ($("#body-email-me").val() == "") {

      error += "The content field is required.<br>"

    }

    if (error != "") {

        $("#error-email-me").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');

        return false;

    } else {

        return true;

    }
}

function adjustBody() {
    
//    var narHeight = $("#navbar-scrollspy").height()+10;
    
    var narHeight;
    if ($(window).width() > 575) {
        
        narHeight = $("#top-bar").height()+$("#menuBar").height()+10;
        
    } else {
        
        narHeight = $("#top-bar").height()+10;
        
    }
    $("body").css("top", narHeight+"px");

}

function adjustProfile() {
    
    var photoY = -$("#profile-photo").height()/2;
    
    $("#profile-photo").css("top", photoY+"px");
    $("#contact").css("top", photoY+"px");
    
}

function adjustCarousel() {
    
    $("#carouselExampleIndicators").find("img").width($(window).width());
    $("#carouselExampleIndicators").find("img").height($("#carouselExampleIndicators").find("img").width()/2);
    
}

function toggleMenuBar() {
    
    if ($(window).width() < 575) {
        
        $("#menuBar").addClass("collapse");
        $("#menuBar").find("ul").addClass("navbar-nav");
        $("#menuBar").removeClass("hidden-xs-down");
        
    } else {
        
        $("#menuBar").removeClass("collapse");
        $("#menuBar").find("ul").removeClass("navbar-nav");
        $("#menuBar").addClass("hidden-xs-down");
        
    }
    
}

//$("body").attr("data-offset", "200");

// button

$(".lang-btn").on("click", function() {

    if ($(this).html() == "English") {
        language = "english";
        changeEnglish();
    } else {
        language = "chinese";
        changeChinese();  
    }
    setProgress();
    
});

// on change

$(window).resize(function() {

    setProgress();
    adjustBody();
    adjustCarousel();
    toggleMenuBar();
        
});

$("#submit-email").submit(function(event) {
    // if this function return false, form will not be submitted

    if (emailMe(event)) {

        return true;
        
    } else {
        
        return false;
        
    }
    
});

// back to top button
$(document).ready(function() { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1200);

    });

    $('#back-to-top').tooltip('show'); 
});


// execute when start

changeEnglish();
setProgress();
adjustBody();
adjustProfile();
adjustCarousel();
toggleMenuBar();
$('[data-toggle="tooltip"]').tooltip();

// assign link
$(".home-link").attr("href", "index.html");