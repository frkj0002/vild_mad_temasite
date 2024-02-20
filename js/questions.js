// Filtrering af data

// Definerer variabler
// const herbsUrl = "https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?order=id.asc&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM"

// Fetcher dataen fra url'en
// fetch(herbsUrl)
//     .then(res=>res.json())
//     .then(showHerbs);

// function showHerbs(herbs) {
//     console.log("All herbs:", herbs);
// }



          

const urlParams = new URLSearchParams(window.location.search);
const colors = urlParams.get("colors");
const herbsUrl = `https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM${colors}`

// Fetcher dataen fra url'en
fetch(herbsUrl)
    .then(res=>res.json())
    .then(showHerbs);

function showHerbs(herbs) {
    console.log(herbs);
}

// Sæson variabler
let spring = document.querySelector("#firstQuestion .answerBtn:nth-child(1)");
let summer = document.querySelector("#firstQuestion .answerBtn:nth-child(2)");
let fall = document.querySelector("#firstQuestion .answerBtn:nth-child(3)");
let winter = document.querySelector("#firstQuestion .answerBtn:nth-child(4)");
spring.addEventListener("click", resultsSpring);
summer.addEventListener("click", resultsSummer);
fall.addEventListener("click", resultsFall);
winter.addEventListener("click", resultsWinter);

// Sæson funktioner
function resultsSpring() {
    console.log("Spring chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    spring.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    summer.classList.remove("chosen");
    fall.classList.remove("chosen");
    winter.classList.remove("chosen");
}
function resultsSummer() {
    console.log("Summer chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    summer.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    fall.classList.remove("chosen");
    winter.classList.remove("chosen");
}
function resultsFall() {
    console.log("Fall chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    fall.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    summer.classList.remove("chosen");
    winter.classList.remove("chosen");
}
function resultsWinter() {
    console.log("Winter chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    winter.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    summer.classList.remove("chosen");
    fall.classList.remove("chosen");
}

// Landskab variabler
let beach = document.querySelector("#secondQuestion .answerBtn:nth-child(1)");
let forest = document.querySelector("#secondQuestion .answerBtn:nth-child(2)");
let city = document.querySelector("#secondQuestion .answerBtn:nth-child(3)");
let fields = document.querySelector("#secondQuestion .answerBtn:nth-child(4)");
beach.addEventListener("click", resultsBeach);
forest.addEventListener("click", resultsForest);
city.addEventListener("click", resultsCity);
fields.addEventListener("click", resultsFields);

// Landskab funktioner
function resultsBeach() {
    console.log("Beach chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    beach.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    forest.classList.remove("chosen");
    city.classList.remove("chosen");
    fields.classList.remove("chosen");
}
function resultsForest() {
    console.log("Forest chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    forest.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    city.classList.remove("chosen");
    fields.classList.remove("chosen");
}
function resultsCity() {
    console.log("City chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    city.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    forest.classList.remove("chosen");
    fields.classList.remove("chosen");
}
function resultsFields() {
    console.log("Fields chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    fields.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    forest.classList.remove("chosen");
    city.classList.remove("chosen");
}

// Farve variabler
let white = document.querySelector("#thirdQuestion .answerBtn:nth-child(1)");
let yellow = document.querySelector("#thirdQuestion .answerBtn:nth-child(2)");
let green = document.querySelector("#thirdQuestion .answerBtn:nth-child(3)");
let purple = document.querySelector("#thirdQuestion .answerBtn:nth-child(4)");
white.addEventListener("click", resultsWhite);
yellow.addEventListener("click", resultsYellow);
green.addEventListener("click", resultsGreen);
purple.addEventListener("click", resultsPurple);

// Farve funktioner
function resultsWhite() {
    console.log("White chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    white.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    yellow.classList.remove("chosen");
    green.classList.remove("chosen");
    purple.classList.remove("chosen");
}
function resultsYellow() {
    console.log("Yellow chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    yellow.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    green.classList.remove("chosen");
    purple.classList.remove("chosen");
}
function resultsGreen() {
    console.log("Green chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    green.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    yellow.classList.remove("chosen");
    purple.classList.remove("chosen");
}
function resultsPurple() {
    console.log("Purple chosen");
    // Tilføj rødbrun baggrundsfarve til valgte svar
    purple.classList.add("chosen");

    // Fjern baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    yellow.classList.remove("chosen");
    green.classList.remove("chosen");

    
    // Definerer variabler
    // const urlParams = new URLSearchParams(window.location.search);
    // const purple = urlParams.get("purple");
    // const herbsUrl = `https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs/${colors["Purple"]}?order=id.asc&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM`

    // Fetcher dataen fra url'en
    // fetch(herbsUrl)
    //     .then(res=>res.json())
    //     .then(showPurple);
        
    // function showPurple(purple) {
    //     console.log("Herbs with purple", herbs);
    // }
}



let confirmBtn = document.querySelector("#resultBtn");
confirmBtn.addEventListener("click", seeResults);

function seeResults(result) {
    console.log("Results");

    document.querySelector(".breadcrumbs li:nth-child(3) a").href = `productlist.html?category=${product.category}`
}








