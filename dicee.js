var player1 = "Player1";

var player2 = "Player2";

function editNames(){

  player1 = prompt("Change Player 1 name");
  player2 = prompt("Change Player 2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;

}

function refreshPage() {

var playerScore1 = Math.floor(Math.random() * 6);

  var playerScore2 = Math.floor(Math.random() * 6);

  var dicePic=[

      'images/inverted-dice-1.png', 'images/inverted-dice-2.png', 'images/inverted-dice-3.png',

       'images/inverted-dice-4.png', 'images/inverted-dice-5.png', 'images/inverted-dice-6.png'

    ]

    document.querySelector(".img1").setAttribute("src", dicePic[ playerScore1 ] );

    document.querySelector(".img2").setAttribute("src", dicePic[ playerScore2 ] );

    if(playerScore1 === playerScore2){

      document.querySelector("h1").innerHTML = "Draw!";

    }

    if(playerScore1 > playerScore2){

      document.querySelector("h1").innerHTML = player1 + " wins!";

    }

    if(playerScore1 < playerScore2){

      document.querySelector("h1").innerHTML = player2 + " wins!";

    }
}
