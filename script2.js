// Guessing game

// variables
var guess = document.getElementById('guess');
var feedback = document.getElementById('feedback');
var button = document.getElementById('btn');

const num = Math.floor(Math.random() * 100);
var counter = 0;
var countDown = 4;
console.log(num);

// functions
    // prevent default action of enter key
    
    function checkKeyCode(e) {
        console.log(e.key)
        if(e.keyCode === 13) {
            e.preventDefault();
        }
    }

    // check for valid number
    function numberValidity() {
        if(+guess.value > 0 && +guess.value < 100) {
            return +guess.value; 
        } else {
            return null;
        }    
    }

    // update values and provide feedback
    function updateValues() {

        var g = numberValidity(); // set g to an integer
            if(g === null) {
                feedback.innerHTML = "invalid number";
            } else if (g > num && counter < 4) { // check g against randomly generated number
                feedback.innerHTML = `Too high, you have ${countDown--} guess(es) left`;
                guess.value = ""; // clears guess field
                counter++;
            } else if(g < num && counter < 4) {
                feedback.innerHTML = `Too low, you have  ${countDown--} guess(es) left`;
                guess.value = "";
                counter++;
            } else if(g === num) {
                feedback.innerHTML = "Congratulations, you guessed correctly";
                setTimeout(() => {location.reload()}, 2000) // automatically reloads page at end off game
            } else {
                feedback.innerHTML = `Too many guesses, the correct number was ${num}`
                setTimeout(() => {location.reload()}, 2000) // automatically reloads page at end off game
            }
            
    }

    // clear
    function clearFeedback() { // clears feedback on input
        feedback.innerHTML = "";
    }
    

// event listeners

guess.addEventListener('keypress', checkKeyCode);
button.addEventListener('click', updateValues);
guess.addEventListener('input', clearFeedback);


