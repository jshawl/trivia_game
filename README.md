# Trivia_game
Pseudocode
`start`
- What is your name?
  - `Sean`
- Nice to meet you, `Sean`. Please choose a topic.**(Science, Arts, Programming)**
    - `Subject`
        -  Display questions, prompt user to enter choose an answer(true/false or multiple choice), by clicking the radiobutton next to the answers. randomized questions **(T/F)**
            - `Answer`
                - check if users choice is equal to preloaded answer.
                - Display next question and show the stats for the questions user have answered;
                no of questions answered, numbers answered correctly, numbers missed, question counter
                - End session when preset number of questions have been answered.
                - user can replay game or select other topic
                 **(Replay, Change Subject, Quit)**
                    - `Replay`
                    Take user back to `Answer`

                    - `Change Topic`
                        - take user to `topic`
                    - `Quit`
                      - end session and redirect to `start`
