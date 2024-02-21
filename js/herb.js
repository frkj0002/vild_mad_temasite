const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM",
  },
})
  .then((res) => res.json())
  .then(showSingleHerb);

function showSingleHerb(herb) {
  console.log(herb);

  // Viser objektet inden i arrayen 
  const singleProduct = herb[0];

  // Ændrer indholdet
  document.querySelector(".herb_name h1").textContent = singleProduct.name;
  document.querySelector(".herb_image").src = singleProduct.image;
  document.querySelector("#beach").src = singleProduct.beach;
  document.querySelector("#forest").src = singleProduct.forest;
  document.querySelector("#town").src = singleProduct.town;
  document.querySelector("#fields").src = singleProduct.fields;



 


  // if (herb.filter(herb => herb.seasons.includes('Summer'))) {
  //   document.querySelector("#summer").classList.remove("hide");
  // }
  // if (herb.filter(herb => herb.seasons.includes('Fall'))) {
  //   document.querySelector("#fall").classList.remove("hide");
  // }


  if (singleProduct.summer) {
    document.querySelector("#summer").classList.remove("hide");
  }
  if (singleProduct.spring) {
    document.querySelector("#spring").classList.remove("hide");
  }
  if (singleProduct.fall) {
    document.querySelector("#fall").classList.remove("hide");
  }
  if (singleProduct.winter) {
    document.querySelector("#winter").classList.remove("hide");
  }

  


  

}


// SLIDESHOW

// Variabel, der indikerer hvilket nr. slide man er på
var slideIndex = 0;

// Kalder funktionen showSlides, for at vise det første billede
showSlides(slideIndex);

// Funktion der skifter slide ved at tilføje eller trække en fra slideIndex
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Funktion der viser et bestemt slide (det nuværende slide) baseret på slideIndex
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Funktion til at vise slides
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (slides.length === 0) {
    return; // Hvis der ikke er nogen billeder, afslut funktionen
  }

  if (n >= slides.length) {
    slideIndex = 0; // Gå til første slide, hvis vi når slutningen
  }

  if (n < 0) {
    slideIndex = slides.length - 1; // Gå til sidste slide, hvis vi er på første slide og går baglæns
  }

  // Skjul alle slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Vis det aktuelle slide
  slides[slideIndex].style.display = "block";
}
