
var player = document.getElementById('player');
var form =document.getElementById('form');
var questionsDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");
var countersDiv = document.getElementById("counter");

totalAnswerCorrect = 0;
var playTrivia = {
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
            var playerChoiceRadio = event.target;
            event.preventDefault() //??
            console.log("clicked radio:", playerChoiceRadio)
            var playerChoice = playerChoiceRadio.value
            var correctAnswer = playTrivia.currentTrivia().choices[playTrivia.currentTrivia().answerIndex];
            console.log("choice", playerChoice)
            console.log("correctAnswer", correctAnswer)
            playTrivia.counters++
            if (playerChoice == correctAnswer) {
              totalAnswerCorrect++

              alert("Correct");
            }
            else {
              // totalQuestionsAsked++
              alert("Wrong");
            }
            countersDiv.innerHTML = "You answered " + totalAnswerCorrect + " of " + playTrivia.counters +" questions correctly "

            if (playTrivia.counters == 10){
              alert("End of Game!")
              location.reload();
            }
            playTrivia.triviaQue();
            // if user click answerIndex button, increase number of correct answers by 1, else increae number of incorrect annswer by 1 and change to next question
  },
  trivia: [
      { question: "From which country did French horns originate?",
        choices:["Germany", "Russia", "UK"],
        answerIndex:0
      },
      { question: "What mineral is an Alaskan diamond?",
      choices:["Graphite", "Quartz", "Gold"],
      answerIndex:1
      },

      { question: "What type of creature is Bombay duck?",
      choices:["Bird", "Insect", "Fish"],
      answerIndex:2
      },

      { question: "What color is orange blossom?",
      choices:["Pink","Orange","White"],
      answerIndex:2
      },

      { question: "Where did Panama hats originate?",
      choices:["Ecuador","Panama","US"],
      answerIndex:0
      },
      { question: "What type of creature is a prairie dog?",
      choices:["Rodent", "Dog", "Wolf"],
      answerIndex:0
      },

      { question: "What meat is hamburger made from?",
      choices:["Beef", "pork","Lamb" ],
      answerIndex:0
      },

      { question: "What type of alcoholic drink is barley wine?",
      choices:["Whiskey","Vodka","Beer"],
      answerIndex:2
      },

      { question: "What color is the black box on a plane?",
      choices:["Red","Black","Orange"],
      answerIndex:2
      },

      { question: "In what continent did camels first evolve?",
      choices:["Africa","North America","Asia"],
      answerIndex:1
      },

      { question: "What nation invented the kilt?",
      choices:["Scotland", "Ireland", "Croatia"],
      answerIndex:1
      },

      { question: "How long was the 100 Years War?",
      choices:["101 years", "116 years", "110 years"],
      answerIndex:1
      },

      { question: "What type of creature is a horned toad?",
      choices:["Frog", "Toad", "Lizard"],
      answerIndex:2
      },

      { question: "What is the liquid inside a coconut?",
      choices:["Coconut water", "Coconut milk", "Coconut oil"],
      answerIndex:0
      },

      { question: "What color are white grapes?",
      choices:["Pale-yellow", "Green", "Pink"],
      answerIndex:1
      },

      { question: "What creatures are the Canary Islands named after?",
        choices:["Dogs", "Birds", "Lizard"],
        answerIndex:0
      },

      { question: "In which month is the October Revolution celebrated in Russia?",
        choices:["October", "November", "December"],
        answerIndex:1
      },

      { question: "What type of insect is a Spanish fly?",
        choices:["Ant", "Dragonfly", "Beetle"],
        answerIndex:2
      },

      { question: "Arabic numerals originated in which country?",
        choices:["Egypt","Saudi Arabia","India"],
        answerIndex:2
      },

      { question: "What country invented baseball?",
        choices:["Canada","England", "US"],
        answerIndex:1
      },

      { question: "What signal was given by Roman emperors to call for the death of a gladiatorial contestant?",
        choices:["Thumb-up", "Thumb-down", "Middle-finger"],
        answerIndex:0
      }
  ]
}

playTrivia.triviaQue();
playTrivia.triviaChoices();
