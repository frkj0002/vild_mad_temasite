// Border rundt om det valgte svar 
// const answer = document.querySelector(".answerBox");


// answer.addEventListener("click", answerChosen);

// function answerChosen() {
    
//     answer.classList.add("chosen");
    
// }


// document.querySelectorAll(".answerBox").forEach((n) =>
//   n.addEventListener("click", () => {
//     navMenu.classList.add("chosen");
//   })
// );

let answers = document.querySelector(".answers");
// answers.forEach(setColor);
answers.forEach(chosenAnswer).addEventListener("click", setColor);




function setColor(chosenAnswer) {
    console.log(setColor);
    let chosenAnswer = document.querySelectorAll(".answers a");
    if ("click") {
        console.log("classlist added")
        chosenAnswer.classList.add("chosen");       
    }
    else {
        // chosenAnswer.classList.remove("chosen");
    }
}