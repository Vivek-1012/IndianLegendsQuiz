var readlinesync = require("readline-sync")

console.log("Welcome to the quiz , this quiz test your knowledge about the LEGENDS whoes work made a great impact on nation and contribution to the development of nation")
score = 0
console.log("_________")

var username = readlinesync.question("May I know Your sweet name ? ")
console.log("_________")
console.log("welcome " + username + " lets get started")
console.log("_________")

function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("WOW!! you are right!!")
    score = score + 1;
  } else {
    console.log("Oops ! you are wrong read about the legend")
    console.log(answer);
  }
  console.log(score)
}


play("who is Iron man of India ?", "Vallabbhai Patel")
play("who is Nightingale of India ?", "Sarojini Naidu")
play("who is Prince of martyrs ?", "Bhagat Singh")
play("who is Father of the nation ?", "Gandhi ji")
play("who is Missile Man of India ?", "Dr APJ Abdul Kalam")


console.log("---------")
console.log("your score final score is " + score)
console.log("thank u for playing :)")
