
var player = document.getElementById('player');
var form =document.getElementById('form');
var questionsDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");
var countersDiv = document.getElementById("counter");

var playTrivia = {
  totalAnswerCorrect: 0,
  totalQuestionsAsked: 0,
  counter: 0,
  // display questions
  triviaQue: function() {
        var questions = this.trivia[this.counter].question;
        questionsDiv.innerHTML =  questions;
  },
// display choices
  triviaChoices: function() {
    // Loop through, attach button and print each choice
        for (var j=0; j<this.trivia[this.counter].choices.length; j++) {
          choicesDiv.innerHTML += "<input type='radio' class="+ j + " name='myRadio' />" + this.trivia[this.counter].choices[j]
        }
        var answer = this.trivia[this.counter].answerIndex
        // add eventHandlers for all myRadio
        for (var i=0; i< choicesDiv.children.length; i++){
          console.log(choicesDiv)
          console.log(choicesDiv.children[i])
          choicesDiv.children[i].addEventListener("click", playTrivia.triviaAnswer)
        }
  },
  triviaAnswer: function(){
    console.log(this.children)
    // var playerChoice = [choicesDiv[0].elements['myRadio']];
    var playerChoiceRadio = choicesDiv.children
    console.log("clicked radio:", playerChoiceRadio)
    var playerChoice = playerChoiceRadio //???
    console.log("playerChoice:", playerChoice)

      // if (playerChoice = this.answer){
      //   totalAnswerCorrect++;
      // }


    // for (var i=0; i < playerChoice.length; i++) {
    //   playerChoice[i].checked = function() {
    //     console.log(playerChoice.index)
    //     // if (this.trivia[this.counter].answerIndex = playerChoice.index)
    //     //playerChoice
    //   }
    // }
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
