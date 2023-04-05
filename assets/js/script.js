var submitBtn = document.querySelector('.start-timer');
var quizTimer = document.querySelector('#time')
submitBtn.textContent = 'Start Timer';

var timeLeft = 15;
//set to 60 for actual quiz

function quizTime () {
    var timerInterval = setInterval(function() {
        console.log('Button was pressed. Timer has started')
        timeLeft--;
        quizTimer.textContent = 'Time left:' + timeLeft

        if (timeLeft <= 10) {
            quizTimer.setAttribute('style', 'color: red; font-weight: bolder;')
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            quizAssessment()
        }
        
    }, 1000)
}

function quizAssessment () {
    console.log('Quiz timer has ended')
    
}


submitBtn.addEventListener('click', quizTime)