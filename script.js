var player = document.getElementById('player');
var form =document.getElementById('form');

var questionsDiv = document.querySelectorAll(".flex-item:nth-child(1)"); // pause here to test and change to jquery after testing
var answersDiv = document.querySelectorAll(".flex-item:nth-child(2)");
// // document.querySelector('') : use vanilla first
var countersDiv = document.querySelectorAll(".flex-item:nth-child(3)");
 // get questions and answers from preloaded subject arrays

var playTrivia = {
  scienceQue: function() {
    console.log(questionsDiv)
      for (var i = 0; i < this.science.length; i++) {
          questionsDiv[0].innerHTML +=
           this.science[i].question;
      }
  },

  scienceChoices: function() {
    console.log(answersDiv)
      for (var i = 0; i < this.science.length; i++) {
          answersDiv[0].innerHTML += this.science[i].choices;
          // create and append buttons to choices
          // var button = document.createElement("BUTTON");
          // var myButton = answersDiv.appendChild(btn);
      }
  },

// correctChoice: function(){
//   for (var i=0; i<this.science.length; i++) {
//     // if user click correctIndex button, increase number of correct answers by 1, else increae number of incorrect annswer by 1 and change to next question
//     if ()
//   }
// }
  science: [
      { question: "What size is", choices: [10, 44, 15], correctIndex: 1 },
      { question: "???", choices: [0, 1, 2], correctIndex: 2 },
      { question: "Where is ", choices: [10, 44, 15], correctIndex: 1 },
      { question: "How do I", choices: [10, 44, 15], correctIndex: 0 }
  ]

}
playTrivia.scienceQue();
playTrivia.scienceChoices();








// var playTrivia = {
//
// };
