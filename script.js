var board = document.getElementById('board');
var player = document.getElementById('player');
var nav = document.getElementById('nav');
var form =document.getElementById('form');
var questionsDiv = document.querySelector('flex-item'); // pause here to test and change to jquery after testing
var answersDiv = $("flex-item:nth-child(2)");
// document.querySelector('') : use the jquery first
var countersDiv = $("flex-item:nth-child(3)");
 // get questions and answers from preloaded subject arrays
var scienceQuestion = {
  scienceQue: function(){
    for (var i = 0; i <science.questions.length; i++)
    console.log('questions');
  }
var scienceAnswers = {
  scienceAns: function(){
    for (var i = 0; i <science.choices.length; i++)
    console.log('answers');
  }
var artsQuestions = {
  artsQue: function(){
    for (var i = 0; i <arts.questions.length; i++)
    console.log('answers');
  }
var artsAnswers = {
  artsAns: function(){
    for (var i = 0; i <arts.choices.length; i++)
    console.log('answers');
  }

var programmingQuestions = {
  programQue: function(){
    for (var i = 0; i <program.questions.length; i++)
    console.log('answers');
  }
  var programmingAnswers = {
    programAns: function(){
      for (var i = 0; i <program.choices.length; i++)
      console.log('answers');
    }

science = {
    questions = [
      { question: "What size is",
        choices: [10,44,15],
        correctIndex: 1
      },
      { question: "???"
        choices: [0,1,2]
        correctIndex: 2
      }
  ]
}

var playTrivia = {

}
