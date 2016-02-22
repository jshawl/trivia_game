# Trivia_game
Pseudocode
`start`
- What is your name?
  - `Name`
- Nice to meet you, `Name`. Please choose a subject.**(Science, Arts, Programming)**

    - `Subject`
        -  Display randomized questions     
        - prompt user to enter choose an answer(true/false or multiple choice), by clicking the radio-button next to the answers.
         **(T/F)**

            - `Answer`
                - check if users choice is equal to preloaded answer.
                - Display next question and show/update counter;
                no of questions answered, numbers answered correctly, numbers missed, number of remaining question(s)
                - Stop questions when preset number of questions have been answered.

                  `Feedback`
                    If all answers are correct, give player $5 Amazon gift card

                    else if number of correct answer is more than 50% ...

                    else encourage the user to play again

                - user can Play game or select other topic
                 **(Play, Change Subject, Quit)**

                    - `Play`
                    Take user back to `start`

                    - `Change Topic`
                        - take user to `topic`

                    - `Quit`
                      - end session and redirect to `start` and prompt to enter player-name.
