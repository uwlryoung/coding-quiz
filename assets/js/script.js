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

//Variables needed to keep track of data
var playerList = localStorage.getItem("players");
var timeLeft = 75;
scoreTotal = 0;
scoreCurrent.textContent = scoreTotal + " points";

var previousPlayers = [];

var players = [];

// var player = {
//     initials: initialsEl,
//     score: score,
//     rank: players.length
// };

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
    if (previousPlayers !== null){
        previousPlayers = JSON.parse(localStorage.getItem(previousPlayers));
        players.push(previousPlayers);
        // players = previousPlayers;
        console.log("NOT NulL!!!!")
    } else {
        return;
    }
};

function submitScore(event){
    event.preventDefault();

    
    var tr = document.createElement("tr");
    var tdRank = document.createElement("td");
    var tdName = document.createElement("td");
    var tdScore = document.createElement("td");

    var player = {
        initials: initialsEl,
        points: scoreTotal,
        rank: players.length
    };

    // players.push(player);
    // localStorage.setItem("previousPlayers", JSON.stringify(players));

    // var leaderBoardList = JSON.parse(localStorage.getItem(previousPlayers));
    // console.log(leaderBoardList);
    
    for (i = 0; i < players.length; i++) {

        // storePlayer();

        localStorage.setItem("player", JSON.stringify(players));
        localStorage.setItem("previousPlayers", JSON.stringify(previousPlayers));
        
        tdRank.textContent = player.rank;
        tdName.textContent = player.initials.value;
        tdScore.textContent = player.points;

        highScoreList.appendChild(tr);
        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }
}

// function saveLastPlayer() {
//     var player = {
//         initials: initialsEl,
//         points: scoreTotal,
//         rank: players.length
//     };
//     localStorage.setItem("previousPlayers", JSON.stringify(player));
//     return player;
//   }

function corIncorClear(){
    corIncor.textContent ="";
};

function results() {
    questionCard.setAttribute("data-state", "hidden");
    resultsCard.setAttribute("data-state", "visible");
    highScoresCard.setAttribute("data-state", "visible");
    scoreTime = timeLeft;
    timeLeft = 0;
    timerEl.textContent = '';
    finalScore.textContent = "Your score: " + scoreTotal;
};

// function storePlayer() {
//     localStorage.setItem("player", JSON.stringify(players));
//     localStorage.setItem("previousPlayers", JSON.stringify(previousPlayers));
//   }

// function getPlayer() {
//     previousPlayers = JSON.parse(localStorage.getItem(previousPlayers));
//   }





//Results function that hides the quiz, and shows the score

//click event for the link to the high scores

//High Score Function that hides all other parts of the HTML, and makes the high score visible



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