// Definerer variabler
const herbsURL = "https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?order=id.asc&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM";
let herbTemplate;
let allHerbs;
let herbClone;

// Fetcher dataen fra url'en
fetch(herbsURL)
.then((response) => response.json())
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


{/* <a href="herb.html" class="herbCard">
<img src="imgs/herbs/daisy.webp" alt="Daisy flower" />
<div class="herbText">
  <p class="lightP">Herbs and smaller plants</p>
  <h2>Daisy</h2>
  <div class="seasons">
    <p class="lightP">Seasons</p>
    <p>Spring, summer & fall</p>
  </div>
</div>
</a> */}



