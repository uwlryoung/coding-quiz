var questionNumbers = [1,2,3,4,5];
var answerNumbers = [1,2,3,4];

var question1 = {
    question: "なに?",
    answers: ["はい","いいえ","かもしれない","もう一同"],
    answerNum: 0
}
var question2 = {
    question: "What?",
    answers: ["Yes","No","Maybe","Come again?"],
    answerNum: 2
}
var question3 = {
    question: "Why?",
    answers: ["Because","No Idea","Destiny","Wake up"],
    amswerNum: 1
}
var question4 = {
    question: "Where?",
    answers: ["Here","There","Canada","Nowhere"],
    answerNum: 4
}
var question5 = {
    question: "When?",
    answers: ["Now","Tomorrow","Yesterday","Never"],
    answerNum: 3
}


var container = document.querySelector(".container");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


function randomQandA() {  
    function randomOrder(){
        var base = [0,1,2,3];
        var newArray = [];

        var a = Math.floor(Math.random() * base.length);
        newArray.push(base[a]);
        var base1 = base.splice(a,1);

        var b = Math.floor(Math.random() * base1.length);
        newArray.push(base[b]);
        var base2 = base.splice(b,1);

        var c = Math.floor(Math.random() * base2.length);
        newArray.push(base[c]);
        var base3 = base.splice(c,1);

        var d = Math.floor(Math.random() * base3.length);
        newArray.push(base[d]);
        // var base4 = base.splice(d,1);

        return newArray;
    }
    
    var ans = randomOrder();
    
    question.textContent = question2.question;
    answer1.textContent = question2.answers[ans[0]];
    answer2.textContent = question2.answers[ans[1]];
    answer3.textContent = question2.answers[ans[2]];
    answer4.textContent = question2.answers[ans[3]];
}

randomQandA();









// var startQuiz = document.querySelector(".container");

// startQuiz.addEventListener("click", function(event){
//     var element = event.target;

//     if (element.matches(".box")){
//         var state = element.getAttribute("data-state");

//         if (state === "visible") {
//             element.setAttribute("data-state", "hidden");
//         }
//     }
// });

// var startQuizButton = document.querySelector("#start-quiz");

// startQuizButton.addEventListener("click", function(event){
//     var element = event.target;

//     if (element.matches("box")){
//         var state = element.getAttribute("data-state");

//         if (state === "visible") {
//             element.dataset.state = "hidden";
//         }
//     }

// });










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