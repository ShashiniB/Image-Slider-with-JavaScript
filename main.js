// -----variables------
var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt;
var intTime = 5000;

// -----Radio navigation button manual--
rbtn.forEach(function(item, index){
    // click event for buttons
    item.addEventListener('click', function(){
        manButtonNav(index);
    });
});

//--Click event for arrows------
//Right
rightArrow.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

//left
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();
});

// -------Function for radio navigation
function manButtonNav(index){
    for(var i = 0; i<slides.length; i++){
        // Set slide and radio navigation button
        if(i !== index){
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }
        else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
        clearInterval();
    }
}

// -------Function for the next slide
function nextSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');
    //set next slide and radio button
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add('active')
    }
    else{
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active')
    }
}

// ---Function for the prev slide
function prevSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');
    //set next slide and radio button
    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('curr');
        active.previousElementSibling.classList.add('active')
    }
    else{
        slides[slides.length - 1].classList.add('curr');
        rbtn[slides.length - 1].classList.add('active')
    }
}

//-Function for clear interval--------
function clrInterval(){
    clearInterval(slideInt);
    slideInt=setInterval(nextSlide,intTime);
}

// ----Automatic Navigation ------
slideInt = setInterval(nextSlide, intTime);