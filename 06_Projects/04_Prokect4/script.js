let random = parseInt(Math.random()*100+1);

const submit = document.querySelector('#sbmt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number:');
    }
    else if(guess<1){
        alert('Please enter a number greater than 1');
    }
    else if(guess>100){
        alert('Please enter a less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            dispGuess(guess);
            dispMsg(`Game Over. Random number was =${random}`);
            endGame();
        }
        else{
            dispGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess=== random){
        dispMsg(`You guessed it Right!`);
        endGame();
    }
    else if(guess < random){
        dispMsg(`Number is too low`);
    }
    else if(guess > random){
        dispMsg(`Number is too High`);
    }
    
}

function dispMsg(msg){
   lowOrHi.innerHTML= `<h2>${msg}<h2>`
}

function dispGuess(guess){
    userInput.value ='';
    guessSlot.innerHTML+=`${guess},`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;

}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);;
    playGame=true;
})
}
