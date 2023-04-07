var startBtn = document.querySelector('.start-timer');
var quizTimer = document.querySelector('#time')
var seeScore = document.querySelector('#score')
startBtn.textContent = 'Start Timer';


var userScore = 0
var timeLeft = 60;
//set to 60 for actual quiz


//Timer
function quizTime () {
    console.log('Button was pressed. Timer has started')
    var displayQuizContent = document.querySelector('.quizPopUp')
    seeScore.textContent = userScore
    displayQuizContent.setAttribute('style','display:flex')
    quizAssessment()

    if (timeLeft <= 0) {
        return
        //set parameter so it checks time before starting timer+
    }

    var timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = 'Time left:' + timeLeft

        if (timeLeft <= 10) {
            console.log('User has less than 10 seconds!')
        }

        

        if (timeLeft <= 10 && timeLeft % 2 == 0) {
            quizTimer.setAttribute('style', 'color: red; font-weight: bolder;')
        } else {
            quizTimer.setAttribute('style','color: #fff;')
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log('Quiz timer has ended')
        }
        
    }, 1000)
}

startBtn.addEventListener('click', quizTime)

function quizAssessment () {
    var displayQuizContent = document.querySelector('.quizPopUp')
    displayQuizContent.setAttribute('style','display:flex')

    // add quiz content
}

function scoresList () {
    // create var that selects the proper div
    //set the attribute to display it
}


//Quiz Content
var quizPrompts = ['What is your favorite color?','What is your dream job?','what branch of the military were you in?','What is your favorite food?']
var option1 = ['red','race car driver','army','chicken']
var option2 = ['blue','professional athlete','air force','peas']
var option3 = ['black','salesman','navy','fish']
var option4 = ['green','pilot','coast guard','water']

var quizText = document.querySelector('#questions')
var button1 = document.querySelector('#b1')
var button2 = document.querySelector('#b2')
var button3 = document.querySelector('#b3')
var button4 = document.querySelector('#b4')

indexCount = 0

//Sets text for question and buttons
quizText.textContent = quizPrompts[indexCount]
button1.textContent = option1[indexCount]
button2.textContent = option2[indexCount]
button3.textContent = option3[indexCount]
button4.textContent = option4[indexCount]

button1.addEventListener('click', function(){
    console.log('--');
    console.log('The first button was pressed');
    indexCount += 1
    
    //default action should be user incorrect so that correct would have a special condition
    //if you want the correct answer to be on this button add it here
    if (indexCount === 1) {
        console.log('User selected the RIGHT option')
        userScore += 100
        console.log(userScore)
    } else {
        console.log('User selected the WRONG option')
        userScore += -50
    } 

    if (userScore < 0) {
        seeScore.setAttribute('style','color: red')
    } else {
        seeScore.setAttribute('style','color: #fff')
    }
    // console.log('The first button was pressed');
    // indexCount += 1

    if (indexCount >= quizPrompts.length) {
        indexCount = indexCount - quizPrompts.length
    }
    if (indexCount >= option1.length) {
        indexCount = indexCount - option1.length
    }
    if (indexCount >= option2.length) {
        indexCount = indexCount - option2.length
    }
    if (indexCount >= option3.length) {
        indexCount = indexCount - option3.length
    }
    if (indexCount >= option4.length) {
        indexCount = indexCount - option4.length
    }

    

    // if statement that looks for which question

    quizText.textContent = quizPrompts[indexCount]
    button1.textContent = option1[indexCount]
    button2.textContent = option2[indexCount]
    button3.textContent = option3[indexCount]
    button4.textContent = option4[indexCount]
    seeScore.textContent = userScore
})

button2.addEventListener('click', function(){
    console.log('--');
    console.log('The second button was pressed');
    indexCount += 1
    
    
    //default action should be user incorrect so that correct would have a special condition
    //if you want the correct answer to be on this button add it here
    if (indexCount === 3) {
        console.log('User selected the RIGHT option')
        userScore += 100
        console.log(userScore)
    } else {
        console.log('User selected the WRONG option')
        userScore += -50
    }

    if (userScore < 0) {
        seeScore.setAttribute('style','color: red')
    } else {
        seeScore.setAttribute('style','color: #fff')
    }
    
    // console.log('The second button was pressed');
    // indexCount += 1

    if (indexCount >= quizPrompts.length) {
        indexCount = indexCount - quizPrompts.length
    }
    if (indexCount >= option1.length) {
        indexCount = indexCount - option1.length
    }
    if (indexCount >= option2.length) {
        indexCount = indexCount - option2.length
    }
    if (indexCount >= option3.length) {
        indexCount = indexCount - option3.length
    }
    if (indexCount >= option4.length) {
        indexCount = indexCount - option4.length
    }

    // if statement that looks for which question

    quizText.textContent = quizPrompts[indexCount]
    button1.textContent = option1[indexCount]
    button2.textContent = option2[indexCount]
    button3.textContent = option3[indexCount]
    button4.textContent = option4[indexCount]
    seeScore.textContent = userScore
})   

button3.addEventListener('click', function(){
    console.log('--');
    console.log('The third button was pressed');
    indexCount += 1
    
    
    
    //default action should be user incorrect so that correct would have a special condition
    //if you want the correct answer to be on this button add it here
    if (indexCount === 4) {
        console.log('User selected the RIGHT option')
        userScore += 100
        console.log(userScore)
    } else {
        console.log('User selected the WRONG option')
        userScore += -50
    }

    if (userScore < 0) {
        seeScore.setAttribute('style','color: red')
    } else {
        seeScore.setAttribute('style','color: #fff')
    }
    
    // console.log('The third button was pressed');
    // indexCount += 1

    if (indexCount >= quizPrompts.length) {
        indexCount = indexCount - quizPrompts.length
    }
    if (indexCount >= option1.length) {
        indexCount = indexCount - option1.length
    }
    if (indexCount >= option2.length) {
        indexCount = indexCount - option2.length
    }
    if (indexCount >= option3.length) {
        indexCount = indexCount - option3.length
    }
    if (indexCount >= option4.length) {
        indexCount = indexCount - option4.length
    }

    // if statement that looks for which question

    quizText.textContent = quizPrompts[indexCount]
    button1.textContent = option1[indexCount]
    button2.textContent = option2[indexCount]
    button3.textContent = option3[indexCount]
    button4.textContent = option4[indexCount]
    seeScore.textContent = userScore
})

button4.addEventListener('click', function(){
    console.log('--');
    console.log('The fourth button was pressed');
    indexCount += 1

    
    
    //default action should be user incorrect so that correct would have a special condition
    //if you want the correct answer to be on this button add it here
    if (indexCount === 2) {
        console.log('User selected the RIGHT option')
        userScore += 100
        console.log(userScore)
    } else {
        console.log('User selected the WRONG option')
        userScore += -50
    }

    if (userScore < 0) {
        seeScore.setAttribute('style','color: red')
    } else {
        seeScore.setAttribute('style','color: #fff')
    }
    




    if (indexCount >= quizPrompts.length) {
        indexCount = indexCount - quizPrompts.length
    }
    if (indexCount >= option1.length) {
        indexCount = indexCount - option1.length
    }
    if (indexCount >= option2.length) {
        indexCount = indexCount - option2.length
    }
    if (indexCount >= option3.length) {
        indexCount = indexCount - option3.length
    }
    if (indexCount >= option4.length) {
        indexCount = indexCount - option4.length
    }

    

    quizText.textContent = quizPrompts[indexCount]
    button1.textContent = option1[indexCount]
    button2.textContent = option2[indexCount]
    button3.textContent = option3[indexCount]
    button4.textContent = option4[indexCount]
    seeScore.textContent = userScore
})



//renderlastscorefunction


//var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   // TODO: Create user object from submissio
//   var signUp = {
//     firstName: firstNameInput.value,
//     lastName: lastNameInput.value,
//     email: emailInput.value,
//     password: passwordInput.value
//   }

//   localStorage.setItem('signUp', JSON.stringify(signUp));
//   // TODO: Set new submission to local storage 
// function renderMessage() {
//     var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//     if (lastGrade !== null) {
//       document.querySelector(".message").textContent = lastGrade.student + 
//       " received a/an " + lastGrade.grade
// });

