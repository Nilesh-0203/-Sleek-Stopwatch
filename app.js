const displayTime=document.querySelector("#displayTime");
const stop=document.querySelector("#stop");
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");

let [seconds, minutes, hours]=[0, 0, 0];
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10 ? "0"+hours : hours;
    let m=minutes<10 ? "0"+minutes : minutes;
    let s=seconds<10 ? "0"+seconds : seconds;
    displayTime.innerHTML=h+":"+m+":"+s;
};

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
};

start.addEventListener("click",()=>{
    watchStart();

});

reset.addEventListener("click",()=>{
    clearInterval(timer);
    [seconds, minutes, hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
});

stop.addEventListener("click", ()=>{
    clearInterval(timer);
})



