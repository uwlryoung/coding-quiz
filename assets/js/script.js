//variables connecting the Javascript to parts of the HTML

var startQuiz = document.querySelector("#start-quiz");
var titleCard = document.querySelector("#title-card");
var questionCard = document.querySelector("#question-card");
var resultsCard = document.querySelector("#results-card");
var highScoresCard = document.querySelector("#highScoresCard");
var highScoresForm = document.querySelector("#highScoresForm");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var corIncor = document.querySelector("#corIncor");
var finalScore = document.querySelector("#final-score");
var scoreCurrent = document.querySelector("#score");
var highScoreList = document.querySelector("#highScoreList");
var initialsEl = document.querySelector("#initials");
var resultMessage = document.querySelector("#message");
var highScoreLink = document.querySelector("#go-to-highscores");
var restartButton = document.querySelector("#restart");
var clearScores = document.querySelector("#clearScores");

//Variables needed to keep track of data
var timeLeft = 75;
scoreTotal = 0;
scoreCurrent.textContent = scoreTotal + " points";

var players = [];

//Questions Bank
var questionBank = [{
    question: "なに?",
    answers: ["はい","いいえ","かもしれない","もう一同"],
    answer: "はい"
},
{
    question: "What?",
    answers: ["Yes","No","Maybe","Come again?"],
    answer: "No"
},
{
    question: "Why?",
    answers: ["Because","No Idea","Destiny","Wake up"],
    answer: "Because"
},
{
    question: "Where?",
    answers: ["Here","There","Canada","Nowhere"],
    answer: "Nowhere"
},
{
    question: "When?",
    answers: ["Now","Tomorrow","Yesterday","Never"],
    answer: "Yesterday"
}
];

restartButton.addEventListener("click", function(){
    location.reload();
});

clearScores.addEventListener("click", function(){
    var confirm = window.confirm("Are you sure you want to clear the scores?");

    if (confirm === true){
        localStorage.clear();
        location.reload();
    }      
});

//Link to go to the high scores board right away
highScoreLink.addEventListener("click", function(){
    titleCard.setAttribute("data-state", "hidden");
    questionCard.setAttribute("data-state", "hidden");
    resultsCard.setAttribute("data-state", "hidden");
    highScoresCard.setAttribute("data-state", "visible");

    players = JSON.parse(localStorage.getItem("players"));

    
    for (i = 0; i < players.length; i++) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdScore = document.createElement("td");

        tdName.textContent = players[i].initials;
        tdScore.textContent = players[i].points;

        highScoreList.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }

    sortTable();
}, { once: true });

highScoresForm.addEventListener("submit", submitScore);

//Start the Quiz
startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    init();
    var q = 0;
    
    titleCard.setAttribute("data-state", "hidden");
    questionCard.setAttribute("data-state", "visible");

    function quesAnsText () {
        if (q < questionBank.length) {
            question.textContent = questionBank[q].question;
            answer1.textContent = questionBank[q].answers[0];
            answer2.textContent = questionBank[q].answers[1];
            answer3.textContent = questionBank[q].answers[2];
            answer4.textContent = questionBank[q].answers[3];
        } else {
            setTimeout(results,1000);
            return;
        }
    };

    //Answer Button Event Listeners (moves to the next question or ends the quiz)
    answer1.addEventListener("click", function(event){
        event.preventDefault();
        if (q < questionBank.length) {
            if ((answer1.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
                corIncor.textContent = "Correct!";
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal + 10;
                scoreCurrent.textContent = scoreTotal + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 5;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            setTimeout(results,1000);
            return;
        }
    
    });

    answer2.addEventListener("click", function(){
        if (q < questionBank.length) {
            if ((answer2.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
                corIncor.textContent = "Correct!";
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal + 10;
                scoreCurrent.textContent = scoreTotal + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 5;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            console.log("yeeepers");
            setTimeout(results,1000);
            return;
        }
    
    });

    answer3.addEventListener("click", function(){
        if (q < questionBank.length) {
            if ((answer3.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
                corIncor.textContent = "Correct!";
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal + 10;
                scoreCurrent.textContent = scoreTotal + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 5;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            console.log("yeeepers");
            setTimeout(results,1000);
            return;
        }
    
    });

    answer4.addEventListener("click", function(){
        if (q < questionBank.length) {
            if ((answer4.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
                corIncor.textContent = "Correct!";
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal + 10;
                scoreCurrent.textContent = scoreTotal + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 5;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            console.log("yeeepers");
            setTimeout(results,1000);
            return;
        }
    
    });

    corIncorClear();
    quesAnsText();
    countdown();

});

//Timercountdown (Starting from 75 seconds)
function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        questionCard.setAttribute("data-state", "hidden");
        resultsCard.setAttribute("data-state", "visible");
      }
    }, 1000);
  }

//Initializes the quiz, resets the score to 0, recalls the old player data
function init() {
    scoreTotal = 0;
    scoreCurrent.textContent = scoreTotal + " points";
    previousPlayers = JSON.parse(localStorage.getItem("players"));
    if (previousPlayers !== null){
        players = previousPlayers;
    }

};

function submitScore(event){
    event.preventDefault();

    var player = {
        initials: initialsEl.value,
        points: scoreTotal
    };

    players.push(player);

    localStorage.setItem("players", JSON.stringify(players));

    players = JSON.parse(localStorage.getItem("players"));

    
    for (i = 0; i < players.length; i++) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdScore = document.createElement("td");

        tdName.textContent = players[i].initials;
        tdScore.textContent = players[i].points;

        highScoreList.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }

    sortTable();

    highScoresCard.setAttribute("data-state", "visible");
    resultsCard.setAttribute("data-state", "hidden");
}


function corIncorClear(){
    corIncor.textContent ="";
};

function results() {
    questionCard.setAttribute("data-state", "hidden");
    resultsCard.setAttribute("data-state", "visible");
    scoreTime = timeLeft;
    timeLeft = 0;
    timerEl.textContent = '';
    finalScore.textContent = "Your score: " + scoreTotal;

    if (scoreTotal < 10) {
        resultMessage.textContent = "Keep studying and try again!"
    } else if (scoreTotal >= 10 && scoreTotal < 20){
        resultMessage.textContent = "You're on your way, don't give up now!"
    } else if (scoreTotal >= 20 && scoreTotal < 30) {
        resultMessage.textContent = "Ok, you know your stuff, but still have room for improvement!"
    } else if (scoreTotal >=30){
        resultMessage.textContent = "You're a coding master!"
    } else {
        resultMessage.textContent = "Somehow, you're so good you broke the quiz!"
    }
};

//Sorts the High Scores Table from high to low
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("highScoreList");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];

        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }




// This function will randomize the order the buttons. Try to add later. 
    // function generateQSet() {  
    //     function randomOrder(){
    //         var base = [0,1,2,3];
    //         var newArray = [];
    
    //         var a = Math.floor(Math.random() * base.length);
    //         newArray.push(base[a]);
    //         var base1 = base.splice(a,1);
    
    //         var b = Math.floor(Math.random() * base1.length);
    //         newArray.push(base[b]);
    //         var base2 = base.splice(b,1);
    
    //         var c = Math.floor(Math.random() * base2.length);
    //         newArray.push(base[c]);
    //         var base3 = base.splice(c,1);
    
    //         var d = Math.floor(Math.random() * base3.length);
    //         newArray.push(base[d]);
    
    //         return newArray;
    //     }
    //     var ans = randomOrder();

    //     question.textContent = question2.question;
    //     answer1.textContent = question2.answers[ans[0]];
    //     answer2.textContent = question2.answers[ans[1]];
    //     answer3.textContent = question2.answers[ans[2]];
    //     answer4.textContent = question2.answers[ans[3]];


    //}