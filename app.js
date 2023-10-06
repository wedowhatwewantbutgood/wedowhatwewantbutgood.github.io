const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x');
const $textBox = $('.text-box');
const $projectBox = $('.project-container');
const $projectText = $('.project-text');

//NAV MENU
$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '0')
});

$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '1');
});

//PROJECTS SLIDER PANELS START
$($projectBox).on('mouseenter', (e)=>{
    $(e.target).toggleClass('show-description');
    $(e.target.querySelector('small')).css('opacity', '1')
});
$($projectBox).on('mouseleave', (e)=>{
    $(e.target).toggleClass('show-description')
    $(e.target.querySelector('small')).css('opacity', '0')
})

//LANDING PAGE OPENING SEQUENCE START
$('.document').ready( ()=>{
            // setTimeout(puctuationChange, 1000)
            setTimeout(nameAppear, 1400);
            setTimeout(jobAppear, 2400);
    });

//PUNCTUATION CHANGE
function puctuationChange(){
    $('.punctuation').fadeOut(()=>{
        $('.punctuation').text('. :-)').fadeIn();
    });
}

//NAME APPEAR EFFECT
function nameAppear(){
    $('.hero h2').css('opacity', '1');
};

//JOB TITLE APPEAR EFFECT
function jobAppear(){
    $('.hero h3').css('opacity', '1');
};

//NAV APPEAR
function navAppear(){
    $('header').toggleClass('nav-appear');
};

//LANDING PAGE OPENING SEQUENCE END


//SHOW BIO PHOTO
function photoSlide(){
        $('.photo-container').parent().toggleClass('photo-appear');
}
// END SHOW BIO PHOTO


// SHOW BIO PARAGRAPH

function paraSlide(){
    $('.paragraph').parent().toggleClass('para-appear');
}

// END SHOW BIO PARAGRAPH

$(document).ready(paraSlide);



//EXECUTES PHOTO AND PARAGRAPH SLIDE ON BIO PAGE LOAD
$(document).ready(photoSlide);



//CONTACT FORM

// $('.email-button').on('click', ()=>{
//    $('.contact-form').css('display', 'block')
// })

//END CONTACT FORM
