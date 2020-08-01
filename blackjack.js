       //Array with deck//
       var deck = ["<img src=./Imgs/2C.png>", "<img src=./Imgs/2D.png>", "<img src=./Imgs/2H.png>", "<img src=./Imgs/2S.png>", "<img src=./Imgs/3C.png>", "<img src=./Imgs/3D.png>", "<img src=./Imgs/3H.png>", "<img src=./Imgs/3S.png>", "<img src=./Imgs/4C.png>", "<img src=./Imgs/4D.png>", "<img src=./Imgs/4H.png>", "<img src=./Imgs/4S.png>", "<img src=./Imgs/5C.png>", "<img src=./Imgs/5D.png>", "<img src=./Imgs/5H.png>", "<img src=./Imgs/5S.png>", "<img src=./Imgs/6C.png>", "<img src=./Imgs/6D.png>", "<img src=./Imgs/6H.png>", "<img src=./Imgs/6S.png>", "<img src=./Imgs/7C.png>", "<img src=./Imgs/7D.png>", "<img src=./Imgs/7H.png>", "<img src=./Imgs/7S.png>", "<img src=./Imgs/8C.png>", "<img src=./Imgs/8D.png>", "<img src=./Imgs/8H.png>", "<img src=./Imgs/8S.png>", "<img src=./Imgs/9C.png>", "<img src=./Imgs/9D.png>", "<img src=./Imgs/9H.png>", "<img src=./Imgs/9S.png>", "<img src=./Imgs/10C.png>", "<img src=./Imgs/10D.png>", "<img src=./Imgs/10H.png>", "<img src=./Imgs/10S.png>", "<img src=./Imgs/JC.png>", "<img src=./Imgs/JD.png>", "<img src=./Imgs/JH.png>", "<img src=./Imgs/JS.png>", "<img src=./Imgs/QC.png>", "<img src=./Imgs/QD.png>", "<img src=./Imgs/QH.png>", "<img src=./Imgs/QS.png>", "<img src=./Imgs/KC.png>", "<img src=./Imgs/KD.png>", "<img src=./Imgs/KH.png>", "<img src=./Imgs/KS.png>", "<img src=./Imgs/AC.png>", "<img src=./Imgs/AD.png>", "<img src=./Imgs/AH.png>", "<img src=./Imgs/AS.png>"];
       // variables to store the values and hands//

var vals = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var suits = ["C", "D", "H", "S"];

var createDeck = function () {
  var deck = [];
  suits.forEach(function (suit) {
    vals.forEach(function (val) {    
      var card = {
        value: val,
        pretty_name: val + " of " + suit,
        image_url: "./Imgs/" + val + suit + ".png",
      }
      deck.push(card);
    }
  }
  return deck;
}
              
var deck1 = createDeck();
var deck2 = createDeck();

var foo = [1,2,3].forEach(function(x) { return x + 1; });               

       var facedup = "<img src=./Imgs/gray_back.png>";
       var dealtCards = [];
       var text_points = document.getElementById("mypoints");
       var dealer_points = document.getElementById("dealer-points");
       var hitOrStand = document.getElementById("Hit");
       var cards_player = document.getElementById("cards-player");
       var cards_dealer = document.getElementById("cards-dealer");
       var values = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
       var values2 = [];
       var value_dealer = [];
       var hitButton = document.getElementById("button-hit");
       var standbutton = document.getElementById("stand-button");
       var lucky = document.getElementById("lucky");
       var cancel_btn = document.getElementById("cancel");
       var dealerCards = [];
       var result = document.getElementById("result");
       var ace = 1;




       //Function to deal cards to player//
       var deal_cards = function deal_cards () { 

          for (var i = 0; i < 2; i++) {

             var number = Math.floor(Math.random() * deck.length);
             var element = deck[number];
             dealtCards.push(element);
             cards_player.innerHTML = dealtCards.join(" ");
             deck.splice(number, 1);
             indexvalue = values[number];
             values2.push(indexvalue);
             values.splice(number, 1);

          }

          if (values2[0] + values2[1] < 21) {

             text_points.innerHTML = (values2[0] + values2[1]) + " Points"
          } else if (values2[0] + values2[1] === 21) {

             result.innerHTML = "You have a Blackjack - 21 points, this does not happen very often! You got really lucky!";
             text_points.innerHTML = "21 points"
             hitButton.disabled = true;
             standbutton.disabled = true;
             hitButton.style.cursor = "not-allowed";
             standbutton.style.cursor = "not-allowed";
             hitButton.style.display = "none";
             standbutton.style.display = "none";
             lucky.style.display = "inline";
             cancel_btn.style.display = "inline";


          }

       }
       
       standbutton.onclick = function () {
          text_points.innerHTML = (values2[0] + values2[1]) + " points";
          return dealer_calculation();

       }


       //Function do deal cards to dealer//

       function deal_to_dealer() {
          for (var i = 0; i < 2; i++) {


             var number = Math.floor(Math.random() * deck.length);
             var element = deck[number];
             dealerCards.push(element);
             cards_dealer.innerHTML = facedup + dealerCards[0];
             deck.splice(number, 1);
             indexvalue = values[number];
             value_dealer.push(indexvalue);
             values.splice(number, 1);
          }
          dealer_points.innerHTML = value_dealer[0] + " Points";

       }



       //function to hit cards//

       hitButton.onclick = function () {



          var number = Math.floor(Math.random() * deck.length)
          element = deck[number];
          dealtCards.push(element);
          cards_player.innerHTML = dealtCards.join(" ");
          deck.splice(number, 1);
          indexvalue = values[number];
          values2.push(indexvalue);
          values.splice(number, 1);
          var sumPlayer = 0;
          var is_there_ace = values2.indexOf(11);




          for (var j = 0; j < values2.length; j++) {

             if (sumPlayer > 11 || values2[0] + values2[1] > 11) {
                if (is_there_ace !== -1) {
                   values2[is_there_ace] = 1;
                }

             }


             sumPlayer += values2[j];

          }

          console.log(is_there_ace);
          console.log(values2)


          text_points.innerHTML = sumPlayer;


          if (sumPlayer > 11) {
             if (is_there_ace !== -1) {
                values2[is_there_ace] = 1;
             }
          }

          if (sumPlayer === 21) {
             text_points.innerHTML = "Black Jack! You have 21 points.";
             hitButton.disabled = true;
             standbutton.disabled = true;
             hitButton.style.cursor = "not-allowed";
             standbutton.style.cursor = "not-allowed";
             hitButton.style.display = "none";
             standbutton.style.display = "none";
             return dealer_calculation();
          } else if (sumPlayer > 21) {
             result.innerHTML = "That's too much! You Busted. You got " + sumPlayer + "points.";
             text_points.innerHTML = sumPlayer + " points."
             hitButton.disabled = true;
             standbutton.disabled = true;
             hitButton.style.cursor = "not-allowed";
             standbutton.style.cursor = "not-allowed";
             hitButton.style.display = "none";
             standbutton.style.display = "none";
             lucky.style.display = "inline";
             cancel_btn.style.display = "inline";

          }
          standbutton.onclick = function () {
             text_points.innerHTML = sumPlayer + " points.";
             hitButton.disabled = true;
             standbutton.disabled = true;
             hitButton.style.cursor = "not-allowed";
             standbutton.style.cursor = "not-allowed";
             return dealer_calculation();

          }
       }
       console.log(dealerCards);

       //function to calculate dealer cards//

       function dealer_calculation() {
          cards_dealer.innerHTML = dealerCards[1] + dealerCards[0];
          dealer_points.innerHTML = value_dealer[0] + value_dealer[1];


          if (value_dealer[0] + value_dealer[1] < 17) {
             return setTimeout(hitdealer, 1000);
          }
          if (value_dealer[0] + value_dealer[1] >= 17) {
             return setTimeout(endGame, 1000);
          }

       }


       function hitdealer() {
          for (var x = 0; x <= 6; x++) {
             var sumDealer = 0;
             var number = Math.floor(Math.random() * deck.length);
             var element = deck[number];
             dealerCards.push(element);
             deck.splice(number, 1);
             indexvalue = values[number];
             value_dealer.push(indexvalue);
             values.splice(number, 1);
             cards_dealer.innerHTML = dealerCards.join(" ");
             var ace_dealer = value_dealer.indexOf(11);


             for (var j = 0; j < value_dealer.length; j++) {

                if (sumDealer >= 11 || value_dealer[0] + value_dealer[1] >= 11) {
                   if (ace_dealer !== -1) {
                      value_dealer[ace_dealer] = 1;
                   }
                }


                sumDealer += value_dealer[j];




             }
             console.log(ace_dealer);
             console.log(value_dealer);
             dealer_points.innerHTML = sumDealer;
             if (sumDealer >= 17) {
                break
             }
          }
          return setTimeout(endGame, 1300)

       }
       //Function to disclose winner
       function endGame() {
          var sumDealer = 0;
          var sumPlayer = 0;
          var is_there_ace = values2.indexOf(11);
          var ace_dealer = value_dealer.indexOf(11);

          for (var y = 0; y < values2.length; y++) {

             sumPlayer += values2[y];
          }
          for (var z = 0; z < value_dealer.length; z++) {
             sumDealer += value_dealer[z];

          }
          console.log(sumDealer);
          console.log(sumPlayer);

          if (sumPlayer > sumDealer && sumPlayer !== 21) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + "points."
             result.innerHTML = "You won this match!!! You have " + sumPlayer + " points."
          } else if (sumDealer > sumPlayer && sumDealer < 21) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + "points. ";
             result.innerHTML = " You lost this one. Better luck next time."

          } else if (sumDealer === sumPlayer) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + " points."
             result.innerHTML = " Nice hand, it is a push! Both of you have " + sumPlayer + " points. There is no winner this time"
          }
          if (sumPlayer === 21 && sumDealer !== 21) {
             result.innerHTML = " You got a blackjack! 21 points! You win this time!"
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + " points."

          }

          if (sumPlayer === 21 && sumDealer === 21) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + " points."
             result.innerHTML = " Incredible, It is a Blackjack tie. Both have 21 points"

          }
          if (sumPlayer < 21 && sumDealer > 21) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + " points."
             result.innerHTML = " The dealer busted. you got luck! You win this time."
          }

          if (sumDealer === 21 && sumPlayer < 21) {
             text_points.innerHTML = sumPlayer + " points."
             dealer_points.innerHTML = sumDealer + " points."
             result.innerHTML = " The dealer has made a Black Jack. It is unbeatable. I am sorry!";

          }

          hitButton.style.display = "none";
          standbutton.style.display = "none";
          lucky.style.display = "inline";
          cancel_btn.style.display = "inline";



       }

       lucky.onclick = function () {
          window.location.reload();

       }

       cancel_btn.onclick = function () {
          window.close();
       }
       deal_cards();
       deal_to_dealer();
