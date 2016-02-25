
var player = document.getElementById('player');
var form =document.getElementById('form');
var questionsDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");
var countersDiv = document.getElementById("counter");

var playTrivia = {
  totalAnswerCorrect: 0,
  totalQuestionsAsked: 0,
  counters: 0,
  // display questions
  triviaQue: function() {
        var questions = this.trivia[this.counters].question;
        questionsDiv.innerHTML =  questions;
  },
// display choices
  triviaChoices: function() {
    // Loop through, attach button and print each choice
        for (var j=0; j<this.trivia[this.counters].choices.length; j++) {
          choicesDiv.innerHTML += "<input type='radio' class="+ j + " />" + this.trivia[this.counters].choices[j]
        }
        var answer = this.trivia[this.counters].answerIndex
        // add eventHandlers for all myRadio
        for (var i=0; i< choicesDiv.children.length; i++){
          // console.log(choicesDiv)
          console.log(choicesDiv.children[i])
          choicesDiv.children[i].addEventListener("click",playTrivia.triviaAnswers())
        }
      },
    triviaAnswers: function(){
            var playerChoiceRadio = choicesDiv.children
            // console.log("clicked radio:", playerChoiceRadio)
            var playerChoice = playerChoiceRadio //???
            countersDiv = this.counters++
            if (playerChoiceRadio == this.trivia.correctIndex) {
              totalAnswerCorrect++
            }
            else {
              // totalQuestionsAsked++
            }

            // if user click answerIndex button, increase number of correct answers by 1, else increae number of incorrect annswer by 1 and change to next question

  },
  trivia: [
      { question: "What size is",
        choices: [10, 44, 17],
        answerIndex: 1
      },
      { question: "???",
        choices: [0, 1, 2],
        answerIndex: 2
      },
      { question: "Where is ",
        choices: [10, 44, 19],
        answerIndex: 1
      },
      { question: "How do I",
        choices: [10, 44, 14],
        answerIndex: 0
      }
  ]
}

playTrivia.triviaQue();
playTrivia.triviaChoices();
