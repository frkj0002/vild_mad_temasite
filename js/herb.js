const urlParams = new URLSearchParams(window.location.search);
// console.log("urlParams", urlParams);
var id = urlParams.get("id");
if (id == undefined) id = 1;

fetch("https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?id=eq." + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM",
  },
})
  .then((res) => res.json())
  .then((json) => showSingleHerb(json));

function showSingleHerb(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.name;
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
