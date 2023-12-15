let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessfeild')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.LastResult')
const lowOrhi = document.querySelector('.LoworHi');
const startOver = document.querySelector('.resultpara')

const p = document.createElement('p')

let previousGess = []
let Totalguesses = 1;



let playgame = true
if(playgame){

    submit.addEventListener('click' , function(event){
        event.preventDefault()
        let guess = parseInt(UserInput.value)
        // console.log(guess);
          checkvalidate(guess)
    })
}
function checkvalidate(guess){
       
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }
    else if(guess < 1 ){
        alert('Please Enter a number greater then one')
    }
    else if(guess > 100 ){
        alert('Please Enter a number less then Hundred')
    }
    else{
        previousGess.push(guess);
        if(Totalguesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over  Random number was ${randomnumber}`);
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage('congrats! You guessesd right number')
        endGame()
    }
    else if( guess < randomnumber){
        displayMessage('Your guessesd is Tooo low')
    }
    else if( guess > randomnumber){
        displayMessage('Your guessesd is Tooo High')
    }

}
function displayGuess(guess){
    UserInput.value = ''
    guessSlot.innerHTML  += `${guess} ,`
    Totalguesses ++;
    remaining.innerHTML = `${11 - Totalguesses}`

}
function displayMessage(message){

    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    UserInput.value = ''
    UserInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">"NEW GAME " Click here to Start new Game</h2>'
    remaining.innerHTML = 0;
    startOver.appendChild(p)
    playgame = false
    newGame()
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click' , function (e){

    randomnumber = parseInt(Math.random() * 100 + 1);
    previousGess = []
    Totalguesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - Totalguesses}`
    UserInput.removeAttribute('disabled')
    startOver.removeAttribute(p);
    playgame = true;
});
}
