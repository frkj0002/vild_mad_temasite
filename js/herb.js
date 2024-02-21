// https://vuifwijcjpzjqqspgrxn.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM

// window.addEventListener("DOMContentLoaded", showProduct);

const urlParams = new URLSearchParams(window.location.search);
// console.log("urlParams", urlParams);
var id = urlParams.get("id");
if (id == undefined) id = 1;
// const id = 343;
// const url = `https://vuifwijcjpzjqqspgrxn.supabase.co/rest/v1/herbs?id=${id}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM`;

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

// showSingleHerb();
// , {
//     method: "GET",
//     headers: {
//       apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aWZ3aWpjanB6anFxc3BncnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE2NTAsImV4cCI6MjAyMzQ3NzY1MH0.d0KA4WqvNlBMrmaDdam3yl6R7rhU8NevlOTM3BBzeYM",
//     },
//   }

// function showProduct() {
//   console.log("hej");
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       visProdukt(json);
//     });
// }

// function visProdukt(produkt) {
//   console.log(produkt);
//   document.querySelector("h1").textContent = produkt.name;
//   // document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
//   // document.querySelector(".underkategori").textContent = produkt.subcategory;
//   // document.querySelector(".maerke").textContent = produkt.brandname;
//   // document.querySelector(".pris").textContent = "DKK " + produkt.price + " ,-";

//   // if (produkt.discount) {
//   //   document.querySelector(".udsalg_procent").classList.remove("skjul");
//   //   document.querySelector(".udsalg_pris_før").classList.remove("skjul");
//   //   document.querySelector(".udsalg_pris_før").classList.add("pris_før");
//   //   document.querySelector("h4").classList.add("udsalg_pris_efter");
//   //   document.querySelector("h4").textContent = "DKK " + Math.round((produkt.price * (100 - produkt.discount)) / 100) + " ,-";
//   // }
//   // document.querySelector("#procent").textContent = produkt.discount + "%";

//   // if (produkt.soldout) {
//   //   document.querySelector(".udsolgt_tekst").classList.remove("skjul");
//   //   document.querySelector(".product_img").classList.add("udsolgt");
//   // }
// }

// showProduct();

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
