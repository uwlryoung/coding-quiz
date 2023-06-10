//variables connecting the Javascript to parts of the HTML

var startQuiz = document.querySelector("#start-quiz");
var titleCard = document.querySelector("#title-card");
var questionCard = document.querySelector("#question-card");
var resultsCard = document.querySelector("#results-card");
var highScoresCard = document.querySelector("#highScoresCard");
var highScoresForm = document.querySelector("#highScoresForm");
var question = document.querySelector("#question");
var ansButton = document.querySelector(".ansButton");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var corIncor = document.querySelector("#corIncor");
var finalScore = document.querySelector("#final-score");
var scoreCurrent = document.querySelector("#score");
var highScoreList = document.querySelector("#highScoreList");

//Variables needed to keep track of data
var score = localStorage.getItem("score");
scoreCurrent.textContent = score + " points";
var timeLeft = 75;
score = 0;

//An array of objects, each object being a different question and answer
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

// var playerStats = {
//     initials: initials.value,
//     score: finalScore
// }

var players = [];

startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    init();
    var q = 0;
    
    titleCard.setAttribute("data-state", "hidden");
    questionCard.setAttribute("data-state", "visible");

    corIncorClear();

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

    answer1.addEventListener("click", function(event){
        event.preventDefault();
        if (q < questionBank.length) {
            if ((answer1.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
                corIncor.textContent = "Correct!";
                setTimeout(corIncorClear,1500);
                q++;
                score = score + 10;
                scoreCurrent.textContent = score + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                score = score - 5;
                scoreCurrent.textContent = score + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            console.log("yeeepers");
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
                score = score + 10;
                scoreCurrent.textContent = score + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                score = score - 5;
                scoreCurrent.textContent = score + " points";
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
                score = score + 10;
                scoreCurrent.textContent = score + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                score = score - 5;
                scoreCurrent.textContent = score + " points";
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
                score = score + 10;
                scoreCurrent.textContent = score + " points";
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                score = score - 5;
                scoreCurrent.textContent = score + " points";
                timeLeft = timeLeft - 15;
                quesAnsText();
            } 
        } else {
            console.log("yeeepers");
            setTimeout(results,1000);
            return;
        }
    
    });

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

function init() {
    score = 0;
    scoreCurrent.textContent = score + " points";
};

function submitScore(event){
    event.preventDefault();
    console.log("submit score's logged?")
    for (var i = 0; i < players.length; i++) {
        var player = {
            initials: initials.value,
            score: score
        }
        
        player = players[i];

        var li = document.createElement("li");
        li.textContent = i +". " + player.initials + "  " + player.score;
        li.setAttribute("data-index", i);

        highScoreList.appendChild(li);
    }
}

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
    finalScore.textContent = "Your score: " + score;
    localStorage.setItem("score", score);
};

highScoresForm.addEventListener("submit", submitScore);





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


    // }