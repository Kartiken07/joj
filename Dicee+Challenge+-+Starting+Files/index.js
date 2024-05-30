let randomNumber1=Math.floor(Math.random()*6+1);
let dicemay1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",dicemay1);
let randomNumber2=Math.floor(Math.random()*6+1);
let dicemay2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",dicemay2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw";
}
else{
    document.querySelector("h1").textContent="Player 2 wins"
}