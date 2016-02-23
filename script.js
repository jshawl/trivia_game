var player = document.getElementById('player');
var form =document.getElementById('form');

var questionsDiv = document.querySelector('flex-item'); // pause here to test and change to jquery after testing
var answersDiv = document.querySelectorAll("flex-item:nth-child(2)");
// // document.querySelector('') : use vanilla first
var countersDiv = document.querySelectorAll("flex-item:nth-child(3)");
 // get questions and answers from preloaded subject arrays
 var scienceQuestion = {
scienceQue: function() {
    for (var i = 0; i < this.science.length; i++) {
        questionsDiv.innerHTML +=
         this.science[i].question;
    }
},
scienceChoices: function() {
    for (var i = 0; i < this.science.length; i++) {
        questionsDiv.innerHTML += this.science[i].choices;
    }
},

science: [
    { question: "What size is", choices: [10, 44, 15], correctIndex: 1 },
    { question: "???", choices: [0, 1, 2], correctIndex: 2 },
    { question: "Where is ", choices: [10, 44, 15], correctIndex: 1 },
    { question: "How do I", choices: [10, 44, 15], correctIndex: 0 }
]
}









// var playTrivia = {
//
// };
