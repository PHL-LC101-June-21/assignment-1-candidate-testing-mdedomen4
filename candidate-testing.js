const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

let questions = [
  "Who was the first American woman in space?\n",
  "\nTrue or false: 5 kilometer == 5000 meters?\n",
  "\n(5+3)/2*10= ?\n",
  "\nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n",
  "\nWhat is the minimum crew size for the ISS?\n",
];

let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and
let question;
let correctAnswer;
let candidateAnswers = [];
let candidateAnswer;
let grade = 0;
let gradePercentage = 0;
let passingStatus;

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("\nWhat is your name?\n");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    //prompt the user with answers and store them
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase().trim() === correctAnswers[i]) {
      grade++;
    }
  }

  gradePercentage = (grade / questions.length) * 100;

  if (gradePercentage >= 80) {
    passingStatus = "PASSED";
  } else {
    passingStatus = "FAILED";
  }

  return grade;
  //return gradePercentage;
}

function printResults() {
  console.log(`\n\n\nCandidate Name: ${candidateName}

1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: Sally Ride

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: true

3) ${questions[2]}
Your Answer: ${candidateAnswers[2]} 
Correct Answer: 40

4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: Trajectory

5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: 3

>>> Overall Grade: ${gradePercentage}% (${grade} of ${questions.length} responses correct <<<
>>> Status: ${passingStatus} <<<`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nWelcome to the quiz, ${candidateName}!\n`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
  printResults();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};

//Notes from speaking w Ankur
//create a function that prints a report
//think of a function that takes a few inputs and prints little sections
//the idea behind this is that you can remove the massive string and decrease amount of static code

//Notes from speaking w Ryan
//loops
//comparing strings
//javascript style conventions