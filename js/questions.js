// Definerer variabler
const herbsUrl = "https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM"

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
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    spring.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    summer.classList.remove("chosen");
    fall.classList.remove("chosen");
    winter.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const springHerbs = data.filter(herb => herb.seasons.includes('Spring'));

    console.log(springHerbs);
    })

}
function resultsSummer() {
    console.log("Summer chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    summer.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    fall.classList.remove("chosen");
    winter.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const summerHerbs = data.filter(herb => herb.seasons.includes('Summer'));

    console.log(summerHerbs);
    })

}
function resultsFall() {
    console.log("Fall chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    fall.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    summer.classList.remove("chosen");
    winter.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const fallHerbs = data.filter(herb => herb.seasons.includes('Fall'));

    console.log(fallHerbs);
    })
}
function resultsWinter() {
    console.log("Winter chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    winter.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    spring.classList.remove("chosen");
    summer.classList.remove("chosen");
    fall.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const winterHerbs = data.filter(herb => herb.seasons.includes('Winter'));

    console.log(winterHerbs);
    })
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
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    beach.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    forest.classList.remove("chosen");
    city.classList.remove("chosen");
    fields.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {
    // De arrays der skal bruges 
    const targetLandscapes = ['Fence', 'Roadside', 'Sea marshes', 'Beach', 'Grassland'];
        
    const beachHerbs = data.filter(herb => {

    // Checker, hvilke urter i dataen der har de ovenstående arrays og viser urterne i konsollen
    return targetLandscapes.some(landscape => herb.landscapes.includes(landscape));
    });

    console.log(beachHerbs);
    })
}
function resultsForest() {
    console.log("Forest chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    forest.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    city.classList.remove("chosen");
    fields.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {
    // De arrays der skal bruges 
    const targetLandscapes = ['Fence', 'Roadside', 'Lake', 'A sea', 'Stream', 'Coniferous forest', 'Deciduous forest'];
        
    const forestHerbs = data.filter(herb => {

    // Checker, hvilke urter i dataen der har de ovenstående arrays og viser urterne i konsollen
    return targetLandscapes.some(landscape => herb.landscapes.includes(landscape));
    });

    console.log(forestHerbs);
    })
}
function resultsCity() {
    console.log("City chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    city.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    forest.classList.remove("chosen");
    fields.classList.remove("chosen");
    
    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const townHerbs = data.filter(herb => herb.landscapes.includes('Town'));

    console.log(townHerbs);
    })
}
function resultsFields() {
    console.log("Fields chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    fields.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    beach.classList.remove("chosen");
    forest.classList.remove("chosen");
    city.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {
    // De arrays der skal bruges 
    const targetLandscapes = ['Grassland', 'Fence', 'Roadside', 'Salt marshes'];
        
    const fieldsHerbs = data.filter(herb => {

    // Checker, hvilke urter i dataen der har de ovenstående arrays og viser urterne i konsollen
    return targetLandscapes.some(landscape => herb.landscapes.includes(landscape));
    });

    console.log(fieldsHerbs);
    })
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
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    white.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    yellow.classList.remove("chosen");
    green.classList.remove("chosen");
    purple.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const whiteHerbs = data.filter(herb => herb.colors.includes('White'));

    console.log(whiteHerbs);
    })
}
function resultsYellow() {
    console.log("Yellow chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    yellow.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    green.classList.remove("chosen");
    purple.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const yellowHerbs = data.filter(herb => herb.colors.includes('Yellow'));

    console.log(yellowHerbs);
    })
}
function resultsGreen() {
    console.log("Green chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    green.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    yellow.classList.remove("chosen");
    purple.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const greenHerbs = data.filter(herb => herb.colors.includes('Green'));

    console.log(greenHerbs);
    })
}
function resultsPurple() {
    console.log("Purple chosen");
    // Tilføjer rødbrun baggrundsfarve til valgte svar
    purple.classList.add("chosen");

    // Fjerner baggrundsfarve fra de andre svar
    white.classList.remove("chosen");
    yellow.classList.remove("chosen");
    green.classList.remove("chosen");

    // Fetcher og filtrerer den data det skal bruges
    fetch(herbsUrl)
    .then(response => response.json())
    .then(data => {

    const purpleHerbs = data.filter(herb => herb.colors.includes('Purple'));

    console.log(purpleHerbs);
    })

}

let confirmBtn = document.querySelector(".resultBtn");
confirmBtn.querySelector("a").href = `list.html?`









