// DOM ELEMENT 

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const time = $('#time'),
    greeting = $('#greeting'),
    name = $('#name'),
    question = $('#question'),
    focus = $('#focus');

const displayAmPm = true;

// Display the TIME
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // SET AM or PM 
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr FORMAT
    hour = hour % 12 || 12;

    // OUTPUT TIME
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${displayAmPm ? amPm : ""}`;

    if (hour > 6){
        time.style.color = 'white';
        name.style.color = 'white';
        focus.style.color = "white";
        question.style.color = "white";
    }


    setTimeout(showTime, 1000);
}
// ADD ZERO 
function addZero(num){
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// SET BACKGROUND IMAGE AND GREETING BASED ON THE CURRENT HOUR
function setBgImageGreeting(){
    let today = new Date(),
        hour = today.hour;

    if (hour < 12){
        document.body.style.backgroundImage = "url('./assets/img/morning.png')";
        greeting.textContent = "Good Morning"
        greeting.style.color = "#fff";
    }
    else if (hour < 18){
        document.body.style.backgroundImage = "url('./assets/img/afternoon.png')";
        greeting.textContent = "Good Afternoon";
        greeting.style.color = "#fff";


    }
    else{
        // EVENING
        document.body.style.backgroundImage = "url('./assets/img/night.png')";
        greeting.textContent = "Good Evening";
        greeting.style.color = "#fff";
    }
}

function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = "[Please Enter Your Name]"
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = ["Please enter your focus"];
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function setName(e){
    if (e.type == 'keypress'){
        if (e.which == 13 | e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
        else{
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

function setFocus(e){
    if (e.type === 'keypress'){
        if (e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        else{
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName)

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgImageGreeting();
getName();
getFocus();

