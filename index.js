let message_el=document.getElementById("msg");
let cards_el = document.getElementById("cards");
let total_el = document.getElementById('total');
let playerEl = document.getElementById("player-el");
let message = "";
let first_card;
let second_card;
let cards;
let hasblackjack = false;
let player = {"playername":"lalli","playerchips":145};
let isalive = false;
let sum = 0;

playerEl.textContent = "playername: " + player.playername;
playerEl.textContent += " , playerchips: " + player.playerchips;

function randomNumber(){
    let num = Math.floor(Math.random() * 13) + 1;
       if(num > 10){
        return num = 10;
       }
       else if(num === 1){
        return num = 11;
       }
       else {
        return num;
       }
}

function startGame(){
    first_card = randomNumber();
    second_card = randomNumber();
    cards = [first_card,second_card];
    isalive = true;
    sum = cards[0] + cards[1]
    blackjack();
}

function blackjack(){
cards_el.textContent = "cards: ";
for(i = 0;i < cards.length; i ++){
    cards_el.textContent += cards[i] + " ";
}


//cards_el.innerText = "cards: " + cards[0] + " " + cards[1]; 
total_el.innerText = "sum: " + sum;   

if(sum <= 20){
    if(cards.length < 3){
    message = "do u wonna pick another card?"
    message_el.innerText = message;
    }
    else{
        message = "game over please restart the game"
        message_el.innerText = message;  
    }
}

else if(sum === 21){
    message = "wohoo,u won";
    message_el.innerText = message;
    hasblackjack = true;
}


else if(sum > 21){
    message = "better luck next time";
    message_el.innerText = message;
    isalive = false;
}
}

function newcard(){
   let newcard;
   newcard = randomNumber()
   if( cards.length < 3){
    if(isalive === true &&  hasblackjack === false){
   cards.push(newcard);
   console.log(cards);
   sum = sum + newcard;
   blackjack();
   }
}
}