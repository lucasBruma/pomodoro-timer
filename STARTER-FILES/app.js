const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const ring = document.querySelector(".ring");
const btnSettings = document.querySelector(".settings");
let s = seconds.childNodes[1].value;
let m = minutes.childNodes[1].value;
let x;
let y;

function callAlerts(){
    alert('The timer has finished');
    if(confirm('Would like to reset the timer?')){
        location.reload();
    }
}

function activateTimer(){
    x = setInterval(function(){
        console.log(m);
        if(s==0){
            s=60;
            m--;
            if(m<10) minutes.childNodes[1].value = `0${m}`;
            else minutes.childNodes[1].value = m;
        }; 
        s--;
        if(s<10) seconds.childNodes[1].value = `0${s}`;
        else  seconds.childNodes[1].value = s;
        
        if(m==0 && s==0){
            ring.style.stroke = 'red';
            clearInterval(x);
            setTimeout(callAlerts,500)    
        }
         
        
    },1000);
    
    console.log(minutes);
} 

function stopTimerButton(){
    activateTimer();
    btnStart.classList.add('inactive');
    btnStop.classList.remove('inactive');
}

function startTimerButton(){
    clearInterval(x);
    clearInterval(y);
    btnStart.classList.remove('inactive');
    btnStop.classList.add('inactive');
}


btnStart.addEventListener('click',stopTimerButton);

btnStop.addEventListener('click',startTimerButton);

btnSettings.addEventListener('click',()=>{
    startTimerButton();
    min = prompt('Enter minutes');
    if(min <10) minutes.childNodes[1].value = `0${min}`;
    else minutes.childNodes[1].value = min;
    m = min;

    sec = prompt('Enter seconds');
    if(sec <10) seconds.childNodes[1].value = `0${sec}`;
    else seconds.childNodes[1].value = sec;
    s = sec;
})

