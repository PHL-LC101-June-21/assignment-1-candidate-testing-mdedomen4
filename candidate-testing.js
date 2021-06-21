const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let questions = [
    "Who was the first American woman in space?\n",
    "\nTrue or false: 5 kilometer == 5000 meters?\n",
    "\n(5+3)/2*10= ?\n",
    "\nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n",
    "\nWhat is the minimum crew size for the ISS?\n"
];

let correctAnswers = [
    "Sally Ride",
    "true",
    "40",
    "Trajectory",
    "3"
];

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Who was the first American woman in space? ";
let question;
let correctAnswer;
let candidateAnswers;
let candidateAnswer = "";
//let correctAnswer = "Sally Ride";
//let questions;
//let correctAnswers;

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("\nWhat is your name?\n");
  }

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
   //console.log(questions[i]);
   //prompt the user with answers and store them
   candidateAnswer = input.question(questions[i]);
}
  }
  
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //if (candidateAnswer === correctAnswer){
   // console.log("Correct!");
  //} else {
  //  console.log("Incorrect.");
  //}

console.log(`\n\nCandidate Name: ${candidateName}
1) Who was the first American woman in space?\n
Your Answer: ${candidateAnswer[0]}
Correct Answer: Sally Ride

2) True or false: 5000 meters = 5 kilometers.\n
Your Answer: ${candidateAnswer[1]}
Correct Answer: true

3) (5 + 3)/2 * 10 = ?\n
Your Answer: ${candidateAnswer[2]}
Correct Answer: 40

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?\n
Your Answer: ${candidateAnswer[3]}
Correct Answer: Trajectory

5) What is the minimum crew size for the ISS?\n
Your Answer: ${candidateAnswer[4]}
Correct Answer: 3`)

//debugging:
//console.log(candidateAnswer);
//console.log(correctAnswer);

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nWelcome to the quiz, ${candidateName}!\n`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);

  //debug message:
  //console.log("end of program!");
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
  runProgram: runProgram
};

