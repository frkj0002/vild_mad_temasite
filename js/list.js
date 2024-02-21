// Definerer variabler
const herbsURL = "https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?select=id,name,category,image,spring,summer,fall,winter&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM";
let herbTemplate;
let allHerbs;
let herbClone;

// Fetcher dataen fra url'en
fetch(herbsURL)
.then((res) => res.json())
.then(showHerbs);

function showHerbs(herbs) {
    console.log(herbs);
  // Looper og kalder funktionen showProduct
  herbs.forEach(showHerb);
}

function showHerb(herb) {
  console.log(herb);
  // Fang element 
  herbTemplate = document.querySelector(".herbTemplate").content;

  // Lav en kopi
  herbClone = herbTemplate.cloneNode(true);

  // Ændre indhold
  herbClone.querySelector(".herbCategory").textContent = herb.category;
  herbClone.querySelector("h2").textContent = herb.name;
  herbClone.querySelector(".seasons").textContent = herb.seasons;
  //   herbClone.querySelector("img").src = herb.image;
  herbClone.querySelector("img").src = herb.image;

  // Man går til den rigtige produktoversigt, når man klikker på et produkt på produktlisten.
  herbClone.querySelector("a").href = `herb.html?id=${herb.id}`

  // Appende
  allHerbs = document.querySelector(".allHerbs");
  allHerbs.appendChild(herbClone);
}



