let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
var us=document.getElementById("user-score");
var comp=document.getElementById("computer-score");
let button=document.getElementById("reset");
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
playGame(userchoice);
});
});
const playGame=function(userchoice){
    console.log("userchoice",userchoice);
   let computerChoice=generateComputerChoice();
   console.log("computer Choice",computerChoice);
if(userchoice==computerChoice){
drawGame(userchoice);
}
else{
    let userwin=true;
    if(userchoice=="scissors"){
    userwin=computerChoice=="paper" ?true:false;
    }
    else if(userchoice=="rock"){
        userwin=computerChoice=="scissors"?true:false;
    }
    else{
        userwin=computerChoice=="rock"?true:false;
    }
    showWinner(userwin,userchoice,computerChoice);
}
};
const generateComputerChoice=function(){
let options=["rock","paper","scissors"];
let val=Math.floor(Math.random()*3);
return options[val];


};
const showWinner=(userwin,user,computer)=>{
if(userwin){
    console.log("user win");
    message.innerText=`You Won By Beating ${computer} From ${user}`;
    userScore++;
    us.innerText=userScore;
    message.style.backgroundColor="green";
}
else{
    console.log("you lose");
    message.innerText=`Computer Won By Beating  ${computer} From ${user}`;
    computerScore++;
    comp.innerText=computerScore;
    message.style.backgroundColor="red";
}
};
const drawGame=(user)=>{

    message.innerText=`Draw Game ${user}`;
    message.style.backgroundColor="blue";


}
button.addEventListener("click",()=>{
userScore=0;
computerScore=0;
us.innerText=0;
comp.innerText=0;
message.innerText="Start Game";
message.style.backgroundColor="black";
});