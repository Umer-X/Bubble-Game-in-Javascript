function makebubble()
{
    let cluter = " ";

 for(let i = 1; i < 145; i++) {
    let randomN = Math.floor(Math.random() * 30);
    cluter += `<div class="bubble">${randomN} </div>`
 }

 document.querySelector("#panelbtm").innerHTML = cluter;


}

let time = 60;

function maketimer()
{

 setInterval(() =>{
 if (time > 0)
 {
    time--;
    document.querySelector('#timer1').textContent = time;
 }
 else 
 {
    clearInterval(time);
    document.querySelector('#panelbtm').innerHTML = `<h1>Game Over</h1>`
 }
   },1000)

}

let randomhit = 0;

function hitbutton()
{
     randomhit = Math.floor(Math.random() * 30);
     document.querySelector('#hitval').textContent  = randomhit;
}

let score = 0;

function scoreincrease()
{
    score += 10;
    document.querySelector('#Scoreval').textContent= score;
}


document.querySelector('#panelbtm').addEventListener('click', function (details) {
    var clickedNumber = Number(details.target.textContent);
    
    if (clickedNumber === randomhit) {
        scoreincrease();
        makebubble();
        hitbutton();
    }
});



maketimer ();
makebubble();
hitbutton();
