var submitBtn = document.querySelector('.start-timer');
var quizTimer = document.querySelector('#time')
submitBtn.textContent = 'Start Timer';

var timeLeft = 3;

function quizTime () {
    var timerInterval = setInterval(function() {
        console.log('Button was pressed. Timer has started')
        timeLeft--;
        quizTimer.textContent = 'Time left:' + timeLeft

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //function place holder
        }
        
    }, 1000)
}

//Function() []
    //this function will handle timer
//


submitBtn.addEventListener('click', quizTime)