let choices = ["Rock","Paper","Scissor"];
let user_input = prompt("Choose from Rock Paper and Scissor: ");
let finalResult;
function GetComputerChoice(list){
    randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

let computer = GetComputerChoice(choices);
console.log(computer)
if (user_input == choices[0] && computer == choices[2]) {
    finalResult = "You Win!!"
}
else if (user_input == choices[1] && computer == choices[0]) {
    finalResult = "You Win!!"
}
else if (user_input == choices[2] && computer == choices[1]) {
    finalResult = "You Win!!"
}
else if (computer == choices[0] && user_input == choices[2]) {
    finalResult = "Computer Wins!!"
}
else if (computer == choices[0] && user_input == choices[2]) {
    finalResult = "Computer Wins!!"
}
else if (computer == choices[0] && user_input == choices[2]) {
    finalResult = "Computer Wins!!"
}
else if(computer == user_input){
    finalResult = "It is a Draw!!"
}
else{
    finalResult = "There is something wrong try again"
}

console.log(`You: ${user_input}`)
console.log(`Computer: ${computer}`)
console.log(finalResult)
