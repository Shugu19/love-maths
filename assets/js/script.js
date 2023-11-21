document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});


function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown gametype ${gameType}`);
        throw `unknown gametype ${gameType}. Aborting!`;
    }
    
}
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey you are Correct!");
        incrementScore();
    } else {
        alert(`Sorry, that's not correct! ${userAnswer} the correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerHTML);
    let operand2 = parseInt(document.getElementById('operand2').innerHTML);
    let operator = document.getElementById('operator').innerHTML;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unknown operator ${operator}`);
        throw `unknown operator ${operator}. Aborting!`;
    }
        
}
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++oldScore;

} function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerHTML);
    document.getElementById('incorrect').innerHTML = ++oldScore;
}


function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
