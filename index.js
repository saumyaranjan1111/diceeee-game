if (performance.navigation.type === 1) {
    rollDice();
  }

function rollDice(){
    let images = document.querySelectorAll('img');
    let num1 = Math.ceil(Math.random()*6);
    let num2 = Math.ceil(Math.random()*6);

    images[0].src = `./images/dice${num1}.png`
    images[1].src = `./images/dice${num2}.png`

    let heading = document.querySelector('h1');
    if(num1 === num2){
        heading.innerText = "Draw!";
    }
    else if(num1 > num2){
        heading.innerText = "🚩 Player 1 Wins!";
    }
    else {
        heading.innerText = "Player 2 Wins 🚩";
    }   
}
