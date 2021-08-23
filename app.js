
//Game
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playButton = document.querySelector("button.lets-play");
        const playGame = document.querySelector(".play-game");
        const gameInto = document.querySelector(".game-into");

        //click on the button
        playButton.addEventListener("click", function(){
            playGame.classList.add("fadeOut");
            gameInto.classList.remove("fadeOut")
        })

    }

    //play the match
    const playTheMatch = () => {
        const gameButtons = document.querySelectorAll(".game-optoin-buttons button");
        const playerHand = document.querySelector("img.player-hand");
        const computerHand = document.querySelector("img.computer-hand");
        const hands = document.querySelectorAll(".game-hands img");

        //animaiton loop
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });


        //computer math
        const computerOptions = ["rock", "paper", "scissors"];

        gameButtons.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() *3);
                computerChoice = computerOptions[computerNumber]
                

                setTimeout(() => {
                    //compare hand call here
                    compareHands(this.textContent, computerChoice);

                    //update images
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerChoice}.png`;
                }, 2500)
                    //Animation
                    playerHand.style.animation = "shakePlayer 2s ease";
                    computerHand.style.animation = "shakeComputer 2s ease";
               
                

                
              
                
            })
        });

        //player options

    }


    const updateScore = ()=>{
        const playerLeftScore = document.querySelector(".player-left p")
        const computerRight = document.querySelector(".computer-right p")

        playerLeftScore.textContent = pScore;
        computerRight.textContent = cScore;
    }

    //comparehands

    const compareHands = (playerchoice, computerChoice) =>{
        const chooseOptoinText = document.querySelector(".game-into h2");
        //tie checking
        if (playerchoice === computerChoice) {
            chooseOptoinText.textContent = "This is tie"
              //update score call here
              
            return;
        }

        //rock checking
        if (playerchoice === "rock") {
            if (computerChoice === "scissors") {
                chooseOptoinText.textContent = "You win!"
                pScore++
                  //update score call here
                  updateScore();
                return;
            }
            else{
                chooseOptoinText.textContent = "Computer win!"
                cScore++;
                  //update score call here
                  updateScore();
                return;
            }
            
        }

        //paper checking
        if (playerchoice === "paper") {
            if (computerChoice === "scissors") {
                chooseOptoinText.textContent = "Computer win!"
                cScore++
                  //update score call here
                  updateScore();
                return;
            }
            else{
                chooseOptoinText.textContent = "You win!"
                pScore++
                  //update score call here
                  updateScore();
                return;
            }
        }

        //scissorss checking
        if (playerchoice === "scissors") {
            if (computerChoice === "rock") {
                chooseOptoinText.textContent = "Computer Win!"
               cScore++
                 //update score call here
                 updateScore();
               return;
            }
            else{
                chooseOptoinText.textContent = "You win!"
                pScore++;
                  //update score call here
                  updateScore();
                return;
            }
        }
    }

    //start game function end
    startGame();
    playTheMatch();
};

game();