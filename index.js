
var timer = 30;
var score = 0;
var hitrn = 0;

function setscore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function hitscore(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function makeboubble(){
    
    
    var conflict = "";
    for(var i = 1; i<=184; i++)
    {
        conflict +=  `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    
    document.querySelector('#pbtm').innerHTML = conflict;

}

function runtimer(){

    var timerint = setInterval(function(){

        if(timer>0){

            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Your Score is ${score}</h1><h3>Game Finished</h3>`;
            // document.querySelector('#pbtm').innerHTML = `<h3>Your Score Is ${score}</h3>`
            document.querySelector('#hitval').textContent = 0;
            document.querySelector('#scoreval').textContent = 0;
        }
        
    },1000)

}

document.querySelector('#pbtm').addEventListener("click", function(det)
{
    var clickednum = Number(det.target.textContent);
    if(hitrn === clickednum)
    {
        setscore();
        makeboubble();
        hitscore();
    }
})

hitscore();

runtimer();

makeboubble();