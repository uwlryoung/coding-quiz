//variables connecting the Javascript to parts of the HTML

var startQuiz = document.querySelector("#start-quiz");
var question = document.querySelector("#question");
var nextQuestion = document.querySelector('.button');
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var corIncor = document.querySelector("#corIncor")

//Variables needed to keep track of data
var score = 0;
var timeLeft = 75;

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


startQuiz.addEventListener("click", function(){
    countdown();
    document.querySelector("#title-card").setAttribute("data-state", "hidden");
    document.querySelector("#question-card").setAttribute("data-state", "visible");

    // questionAnswers(); 
    var q = 0;

    function corIncorClear(){
        corIncor.textContent ="";
    }

    function quesAnsText () {
        question.textContent = questionBank[q].question;
        answer1.textContent = questionBank[q].answers[0];
        answer2.textContent = questionBank[q].answers[1];
        answer3.textContent = questionBank[q].answers[2];
        answer4.textContent = questionBank[q].answers[3];
    }

    quesAnsText();

    answer1.addEventListener("click", function(){
        if ((answer1.textContent === questionBank[q].answer) && (timeLeft !== 0)) {
            console.log("Correct!");
            corIncor.textContent = "Correct";
            setTimeout(corIncorClear,1000);
            q++;
            score = score + 10;
            quesAnsText();
        } else {
            console.log("Incorrect!");
            corIncor.textContent = "Incorrect!"
            q++;
            score = score - 5;
            timeLeft = timeLeft - 15;
            quesAnsText();
        } 

        if (q === questionBank.length) {
            document.querySelector("#question-card").setAttribute("data-state", "hidden");
        }
    });

});



//Timercountdown (Starting from 75 seconds)
function countdown() {
    // var timeLeft = 75;
  
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
        results();
      }
    }, 1000);
  }

//   function questionAnswers(){
//     question.textContent = questionBank[0].question;
//     answer1.textContent = questionBank[0].answers[0];
//     answer2.textContent = questionBank[0].answers[1];
//     answer3.textContent = questionBank[0].answers[2];
//     answer4.textContent = questionBank[0].answers[3];
//   }









//Results function that hides the quiz, and shows the score

//click event for the link to the high scores

//High Score Function that hides all other parts of the HTML, and makes the high score visible









// var timeEl = document.querySelector(".timer");
// var startQuizButton = document.querySelector("#start-quiz");
// var questionEl = document.querySelector(".box");
// var state = box.getAttribute("data-state");
// var box = document.querySelector(".box");

// startQuizButton.addEventListener("click", startQuiz);

// function startQuiz(){

//     console.log("hello")

//     var state = box.getAttribute("data-state");

//     if (state === "visible") {
//         state = "hidden";
//     }

//     if (state === "hidden") {
//         state = "visible";
//     }
    
    
    // var element = event.target;

    // var state = element.getAttribute("data-state");



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