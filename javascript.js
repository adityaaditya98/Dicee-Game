var temp1 = Math.random()*7;
var player1 = Math.round(temp1);
var player2 = Math.round(Math.random()*7);

var diceplayer1 = "dice"+player1+".png";
var diceplayer2= "dice"+player2+".png";
document.querySelectorAll("img")[0].src=diceplayer1;
document.querySelectorAll("img")[1].src=diceplayer2;

if(player1>player2){
    document.querySelector("h1").textContent="Player 1 Won the Math";
}else if(player1===player2){
    document.querySelector("h1").textContent="Draw Math";
}
else{
    document.querySelector("h1").textContent="Player 2 Won the Math";
}



