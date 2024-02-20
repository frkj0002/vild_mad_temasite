// Variabel, der indikerer hvilket nr. slide man er på
var slideIndex = 0;

// Kalder funktionen showslides, for at vise det første billede
showSlides(slideIndex);

// Funktion der skifter slide ved at tilføje (+)
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

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
