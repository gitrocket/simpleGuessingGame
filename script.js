// Guessing Game
// variables
var guess = document.getElementById('guess');
var feedback = document.getElementById('feedback');
var button = document.getElementById('btn')

const num = Math.floor(Math.random() * 100);
var counter = 0;
var countDown = 4;
console.log(num)

// update values
function enterValue(e) {
    e.preventDefault();
    var g = +guess.value;
    if(g < num && counter < 4) {
        feedback.innerText = `Incorrect, too low. You have ${countDown--} guesses left`;
        counter++;
    } else if (g > num && counter < 4) {
        feedback.innerText = `Incorrect, too high. You have ${countDown--} guesses left`;
        counter++;
    } else if (g === num){
        feedback.innerText = "Congratulations! You guessed correctly.";
        setTimeout(() => {location.reload()}, 2000) // automatically reloads page at end off game
    } else {
        feedback.innerText = `Too many guesses. The correct answer was ${num}`;
        setTimeout(() => {location.reload()}, 2000) // automatically reloads page at end off game

    }
}

// clear feedback
function clearFeedback() {
    feedback.innerText = "";
}

function clearField() {
    guess.value = '';
}
// event listeners

// guess.addEventListener('input', clearFeedback);
button.addEventListener('click', enterValue);
guess.addEventListener('input', clearFeedback);
button.addEventListener('click', clearField);
