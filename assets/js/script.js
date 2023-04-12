var startBtn = document.querySelector('.start-timer');
var quizTimer = document.querySelector('#time')
var seeScore = document.querySelector('#score')
var viewScoreBtn = document.querySelector('#viewScores')
var displayQuizContent = document.querySelector('.quizPopUp')
var saveScoresBtn = document.querySelector('#saveScoresBtn')
var usernameInput = document.querySelector('#username')
var usernameField = document.querySelector('#user-username')
var scoreDashboard = document.querySelector('#scoreDashboard')
var quizContent = document.querySelector('.question-buttons')
startBtn.textContent = 'Start Timer';


var userScore = 0
var timeLeft = 5;
//set to 60 for actual quiz


//Timer
function quizTime () {
    if (timeLeft <= 0) {
        timeLeft = 5
        userScore = 0
        quizContent.setAttribute('style','display: flex')
        viewScoreBtn.setAttribute('style','display: none')
    }
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
            quizContent.setAttribute('style', 'display: none')

            viewScoreBtn.setAttribute('style','display:inline') 
            viewScoreBtn.textContent = 'Game Over - You scored ' + userScore + '. Click here to save your score or view other scores'
            viewScoreBtn.addEventListener('click', function (e) {
                console.log('Scores button was pressed')
                 e.preventDefault

                displayQuizContent.setAttribute('style','display: none')
                scoreDashboard.setAttribute('style','display: flex')

                //is scored saved?
            })
        }
        localStorage.setItem('score', JSON.stringify(userScore))
        console.log('last saved score: -->', userScore)
    }, 1000)
}

renderScore()
function renderScore (e) {
    // var username = JSON.parse(localStorage.getItem('username'))
    // var score = JSON.parse(localStorage.getItem('score'))


    var username = JSON.parse(localStorage.getItem('username'))
    var score = JSON.parse(localStorage.getItem('score'))
    

    console.log(usernameField)
    if (username !== null) {
        var newEl = '<span>' + username + '-' + score + '</span>'
        var el = document.createElement('div')
        el.innerHTML = newEl
        document.getElementById('user-username').appendChild(el)

    }
}

saveScoresBtn.addEventListener('click',function (e) {
    e.preventDefault()

    var username = usernameInput.value

    console.log(username)

    localStorage.setItem('username', JSON.stringify(username))
    renderScore()
})

startBtn.addEventListener('click', quizTime)

function quizAssessment () {
    displayQuizContent.setAttribute('style','display:flex')
}


//Quiz Content
var quizPrompts = ['What will this return? \nDocument.children','Which statement calls the class green?','Which git command double checks to see if your local branch is in sync with the base branch in GitHub','Which of the following correctly applies css if the file is located in a folder called "css"','How many different data types can be stored in an array?','How do you stop an event from bubbling up?','What is the first value in a index?','How do you set a variable in css?','x=[2,4,5,9,54,8] \nWhat will console.log(x[7]) return?','What defines the alignment along the main axis of a flex container?']
var option1 = ['Returns the child elements of the current document','race car driver','army','chicken',5,'event.stopPropagation();',7,8,9,10]
var option2 = ['blue','professional athlete','git pull origin main','peas',5,6,7,8,'undefined',10]
var option3 = ['black','salesman','navy','<link rel="stylesheet" href="./assets/css/style.css">','There is no limit',6,7,8,9,'just-content']
var option4 = ['green',"document.querySelector('.green')",'coast guard','water',5,6,'0',':root {--variable_name}',9,10]

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
    if (indexCount === 1 || indexCount === 6) {
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
    if (indexCount === 3 || indexCount === 9) {
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
    if (indexCount === 4 || indexCount === 5 || indexCount === 10) {
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
    if (indexCount === 2 || indexCount === 7 || indexCount === 8) {
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
  
//   // TODO: Create user object from submission
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

