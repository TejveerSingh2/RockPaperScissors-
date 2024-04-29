let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePrint=document.querySelector("#user-score");
const compScorePrint=document.querySelector("#comp-score");
let resetBtn=document.querySelector("#reset-btn");



const resetGame=()=>{
    userScore=0;
    compScore=0;
    userScorePrint.innerText="0";
    compScorePrint.innerText="0";
    msg.innerText="Game has been restarted!";
}

resetBtn.addEventListener("click",resetGame);

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}


const playGame=(userChoice)=>{
    // console.log("user  choice =",userChoice);
    const compChoice=genCompChoice();
    // console.log(compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=(compChoice==="paper") ?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userChoice=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userScore++;
        userScorePrint.innerText=userScore;
        // console.log("You win");
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePrint.innerText=compScore;
        // console.log("computer win");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const draw=()=>{
    // console.log("game was draw");
    msg.innerText=`Game ties,Wanna play again`;
    msg.style.backgroundColor="#081b31";
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
      
    });
});