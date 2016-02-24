var player = document.getElementById('player');
var form =document.getElementById('form');

var questionsDiv = document.querySelectorAll(".flex-item:nth-child(1)"); // pause here to test and change to jquery after testing
var answersDiv = document.querySelectorAll(".flex-item:nth-child(2)");
// // document.querySelector('') : use vanilla first
var countersDiv = document.querySelectorAll(".flex-item:nth-child(3)");
 // get questions and answers from preloaded subject arrays

var playTrivia = {
  counter: 0,
  // display questions
  triviaQue: function() {
        var questions = this.trivia[this.counter].question;
        questionsDiv[0].innerHTML =  questions;
  },

// display choices
  triviaChoices: function() {

        for (var j=0; j<this.trivia[this.counter].choices.length; j++) {
          answersDiv[0].innerHTML += "<input type='radio' name='myRadio' />" + this.trivia[this.counter].choices[j]
          // attach button to each choice
        }
  },

  triviaAnswer: function(){
    var playerChoice = [answersDiv[0].elements['myRadio']];
    for (var i=0; i < playerChoice.length; i++) {
      playerChoice[i].checked = function() {
        console.log(playerChoice.index)
        // if (this.trivia[this.counter].answerIndex = playerChoice.index)
        //playerChoice
      }
    }
    // if user click answerIndex button, increase number of correct answers by 1, else increae number of incorrect annswer by 1 and change to next question

  }

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
playTrivia.triviaAnswer()
