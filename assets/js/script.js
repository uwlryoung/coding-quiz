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
var players = [];
var timeLeft = 75;
scoreTotal = 0;
scoreCurrent.textContent = scoreTotal + " points";

//Questions Bank
var questionBank = [{
    question: "What is the command we use to create a new file?",
    answers: ["mkdir","touch","cd","pwd"],
    answer: "touch"
},
{
    question: "What is the purpose of the `alt` attribute for images?",
    answers: ["To make it easier to style the image with CSS","To make the image load faster","To provide context for the images in the cases where they are not observable, either due to an accessibility challenge or a broken link.","To prevent search engines from indexing the image"],
    answer: "To provide context for the images in the cases where they are not observable, either due to an accessibility challenge or a broken link"
},
{
    question: "What are HTML semantic elements?",
    answers: ["Semantic elements, like `<div>`, hold the important content together so it's easy to understand","Semantic elements are outdated and are no longer used in HTML","A semantic element clearly describes its meaning to both the browser and the developer","A semantic element reveals nothing about its content to the browser or the developer"],
    answer: "A semantic element clearly describes its meaning to both the browser and the developer"
},
{
    question: "Which of the following is not a component of the box model?",
    answers: ["The display property","The padding property","The border property","The content"],
    answer: "The content"
},
{
    question: "Which of the following statements are NOT true?",
    answers: ["Block elements take all the possible width, regardless of its actual size","Block elements are elements that always start on a new line","Inline elements are elements that only take up as much width as needed","Inline elements automatically start a new line"],
    answer: "Inline elements automatically start a new line"
},
{
    question: "What is a media query?",
    answers: ["A feature of CSS3 allowing content rendering to adapt to different conditions such as screen resolution","A feature of JavaScript allowing content rendering to adapt to different conditions such as screen resolution","A feature of HTML allowing content rendering to adapt to different conditions such as screen resolution","A feature of Flexbox allowing content rendering to adapt to different conditions such as screen resolution"],
    answer: "A feature of CSS3 allowing content rendering to adapt to different conditions such as screen resolution"
},
{
    question: "What is one advantage of Responsive Design for a developer?",
    answers: ["Faster page loading time","Faster development","More social sharing","Improved SEO"],
    answer: "Improved SEO"
},
{
    question: "When using flexbox, which property needs to be adjusted in order to add space between items?",
    answers: ["justify-content","flex-flow","flex-flow","space-between"],
    answer: "space-between"
},
{
    question: "What is a CSS reset?",
    answers: ["Deleting the contenst of a stylesheet to implement entirely new design","A stylesheet that clears the default formatting of the browser","A CSS property that resets the values of child elements","A media query that resets the responsive design when switching devices"],
    answer: "A stylesheet that clears the default formatting of the browser"
},
{
    question: "How do you declare a custom property or 'CSS variable'?",
    answers: ["var root-my-color = green;",":root { var my-color = green; }","var my-color = green;",":root { --my-color: green; }"],
    answer: ":root { --my-color: green; }"
},
{
    question: "Inside the HTML document, where do you place your JavaScript code?",
    answers: ["Inside the <link> element","In the <footer> element","Inside the <script> element","Inside the <head> element"],
    answer: "Inside the <script> element"
},
{
    question: "What operator is used to assign a value to a declared variable?",
    answers: ["Double-equal (==)","Question mark (?)","Colon (:)","Equal sign (=)"],
    answer: "Equal sign (=)"
},
{
    question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    answers: ["0","1","2","3"],
    answer: "1"
},
{
    question: "What are the two types of scope JavaScript uses?",
    answers: ["Abroad and Local","Surrounding and Inner","Outside and Inside","Global and Local"],
    answer: "Global and Local"
},
{
    question: "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
    answers: ["concat() and shift()","pop() and unshift()","forEach() and pop()","push() and sort()"],
    answer: "pop() and unshift()"
},
{
    question: "Which of the following would change an element's background to red?",
    answers: ["element.setAttribute('class', 'background: red');","element.setAttribute('style', 'red');","element.setAttribute('style', 'background-color: red');","element.setAttribute('red');"],
    answer: "element.setAttribute('style', 'background-color: red');"
},
{
    question: "How would you append the following to the DOM? var myDiv = document.createElement('div');",
    answers: ["document.body.appendChild = myDiv;","myDiv.appendChild.document.body;","document.body.appendChild('div');","document.body.appendChild(myDiv);"],
    answer: "document.body.appendChild(myDiv);"
},
{
    question: "You need to add an event listener to an element, pressEl, that checks to see if the element has been clicked and then runs myFunction(). Which of the following would you add to your code?",
    answers: ["addEventListener(pressEL, 'mouseover', myFunction())","pressEl.addEventListener('click', myFunction)","pressEl.addEventListener('keydown', myFunction())","addEventListener(pressEL, 'click', myFunction)"],
    answer: "pressEl.addEventListener('click', myFunction)"
},
{
    question: "Why do we need to convert an object into JSON in order for it to properly persist to local storage?",
    answers: ["Local storage only accepts JSON objects","Local storage cannot read JavaScript, so we convert JavaScript into JSON","Local storage can only store strings, so we convert the object to JSON to store it properly","It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read"],
    answer: "Local storage can only store strings, so we convert the object to JSON to store it properly"
},
{
    question: "You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
    answers: ["git branch feature-52","git checkout feature-52","git merge feature-52","git branch -d feature-52"],
    answer: "git branch -d feature-52"
}
];

//At the end of the quiz, there is a restart button (refreshes the page)
restartButton.addEventListener("click", function(){
    location.reload();
});

//At the end of the quiz, you can clear the highscores (this also refreshes the page and brings player back to the start)
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


//When the submit button is clicked at the end of the quiz, this begins the localStorage setting and getting and rendering the highscores list
highScoresForm.addEventListener("submit", submitScore);

//Starts the Quiz
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
                scoreTotal = scoreTotal + 7;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft + 5;
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 3;
                if (scoreTotal < 0){
                    scoreTotal = 0;
                }
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 10;
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
                scoreTotal = scoreTotal + 7;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft + 5;
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 3;
                if (scoreTotal < 0){
                    scoreTotal = 0;
                }
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 10;
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
                scoreTotal = scoreTotal + 7;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft + 5;
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 3;
                if (scoreTotal < 0){
                    scoreTotal = 0;
                }
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 10;
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
                scoreTotal = scoreTotal + 7;
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft + 5;
                quesAnsText();
            } else {
                corIncor.textContent = "Incorrect!"
                setTimeout(corIncorClear,1500);
                q++;
                scoreTotal = scoreTotal - 3;
                if (scoreTotal < 0){
                    scoreTotal = 0;
                }
                scoreCurrent.textContent = scoreTotal + " points";
                timeLeft = timeLeft - 10;
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

//Activates the form once a player submits their initials, begins localStorage setting and getting
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

//Clears the Correct/Incorrect message after answering
function corIncorClear(){
    corIncor.textContent ="";
};

//Shows the results and sends a message based on score on the resultsCard
function results() {
    questionCard.setAttribute("data-state", "hidden");
    resultsCard.setAttribute("data-state", "visible");
    scoreTime = timeLeft;
    timeLeft = 0;
    timerEl.textContent = '';
    finalScore.textContent = "Your score: " + scoreTotal;

    if (scoreTotal < 20) {
        resultMessage.textContent = "Keep studying and try again!"
    } else if (scoreTotal >= 20 && scoreTotal < 30){
        resultMessage.textContent = "You're on your way, don't give up now!"
    } else if (scoreTotal >= 30 && scoreTotal < 40) {
        resultMessage.textContent = "Ok, you know your stuff, but we know you can go higher!"
    } else if (scoreTotal >=40){
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