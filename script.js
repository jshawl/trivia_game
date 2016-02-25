
var player = document.getElementById('player');
var form =document.getElementById('form');
var questionsDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");
var countersDiv = document.getElementById("counter");

var playTrivia = {
  totalAnswerCorrect: 0,
  totalQuestionsAsked: 0,
  counters: 0,
  currentTrivia: function(){
    // console.log("counters:", this.counters);
    // console.log("triv:", this.trivia);
    // console.log("triv[0]:", this.trivia[0]);
    return this.trivia[this.counters];
  },
  // display questions
  triviaQue: function() {
    // console.log("counters:", this.counters);
    // console.log("triv:", this.trivia);
    // console.log("triv[0]:", this.trivia[0]);


    console.log("curTriv:", this.currentTrivia())
        var question = this.currentTrivia().question;
        questionsDiv.innerHTML =  question;
  },
// display choices
  triviaChoices: function() {

    // Loop through, attach button and print each choice
        for (var j=0; j<this.currentTrivia().choices.length; j++) {
          var choice = this.currentTrivia().choices[j];
          // TODO: use label for "choice" caption/text
          choicesDiv.innerHTML += "<input type='radio' class="+ j + "  value='" + choice + "' />" + choice
        }
        var answer = this.currentTrivia().answerIndex
        // add eventHandlers for all myRadio
        for (var i=0; i< choicesDiv.children.length; i++){
          // console.log(choicesDiv)
          console.log(choicesDiv.children[i])
          choicesDiv.children[i].addEventListener("click",playTrivia.triviaAnswers)
        }
      },
    triviaAnswers: function(event){
            // var playerChoiceRadio = choicesDiv.children
            var playerChoiceRadio = event.target;
            console.log("clicked radio:", playerChoiceRadio)
            var playerChoice = playerChoiceRadio.value
            var correctAnswer = playTrivia.currentTrivia().choices[playTrivia.currentTrivia().answerIndex];
            console.log("choice", playerChoice)
            console.log("correctAnswer", correctAnswer)
            if (playerChoice == correctAnswer) {
              alert("Correct");
              totalAnswerCorrect++
            }
            else {
              // totalQuestionsAsked++
              alert("Wrong");
            }

            countersDiv = this.counters++

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
