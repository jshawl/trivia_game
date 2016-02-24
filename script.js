var player = document.getElementById('player');
var form =document.getElementById('form');

var questionsDiv = document.querySelectorAll(".flex-item:nth-child(1)"); // pause here to test and change to jquery after testing
var answersDiv = document.querySelectorAll(".flex-item:nth-child(2)");
// // document.querySelector('') : use vanilla first
var countersDiv = document.querySelectorAll(".flex-item:nth-child(3)");
 // get questions and answers from preloaded subject arrays

var playTrivia = {
  triviaQue: function() {
      for (var i = 0; i < this.trivia.length; i++) {
          questionsDiv[0].innerHTML =
           this.trivia[i].question;
      }
  },

  triviaChoices: function() {
      for (var i = 0; i < this.trivia.length; i++) {
        buildDeck: function() { // running continous loop in console
         for (i = 0; i < values.length; j++) {
              for (j = 0; j < suits.length; j++) {
                game.deck.push(values[i]+suits[j]);

          answersDiv[0].innerHTML = this.trivia[i].choices + "<input type='radio' />"
          // create and append buttons to choices
          // var button = document.createElement("BUTTON");
          // var myButton = answersDiv.appendChild(btn);
      }
  },

// correctChoice: function(){
//   for (var i=0; i<this.trivia.length; i++) {
//     // if user click correctIndex button, increase number of correct answers by 1, else increae number of incorrect annswer by 1 and change to next question
//     if ()
//   }
// }
  trivia: [
      { question: "What size is", choices: [10, 44, 15], correctIndex: 1 },
      { question: "???", choices: [0, 1, 2], correctIndex: 2 },
      { question: "Where is ", choices: [10, 44, 15], correctIndex: 1 },
      { question: "How do I", choices: [10, 44, 15], correctIndex: 0 }

  ]

}
playTrivia.triviaQue();
playTrivia.triviaChoices();








// var playTrivia = {
//
// };
