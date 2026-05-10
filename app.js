let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userChoicePara=document.querySelector("#user-score");
const compChoicePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");


const drawGame=()=>{
    msg.innerText="Game is draw! Try again.";
    msg.style.backgroundColor= "#081b31";
}

const genCompChoice=()=>{
      let options=["rock","paper","scissors"];
      let randIdx=Math.floor(Math.random()*3);
      return options[randIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userChoicePara.innerText=userScore;
            msg.innerText=`You win! Your ${userChoice} beats ${compChoice}.`;
            msg.style.backgroundColor="green";
        }else{
            compScore++;
            compChoicePara.innerText=compScore;
            msg.innerText=`You lose! ${compChoice} beats your ${userChoice}.`;
            msg.style.backgroundColor="red";
        }
}

const playGame=((userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
          let userWin=true;
        if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
        }
        else{
        userWin=compChoice==="rock"?false:true;
    }
 
    showWinner(userWin,userChoice,compChoice);
}
});


choices.forEach((choice)=>{
        choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
        });
});