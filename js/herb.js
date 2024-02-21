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
  document.querySelector(".herbName").textContent = singleProduct.name;
  document.querySelector(".herbInfo p").textContent = singleProduct.description;
  document.querySelector(".herbImage").src = singleProduct.image;

  // Vis kun de sæsoner, som urten har
  if (document.querySelector("#spring").src = singleProduct.spring) {
    document.querySelector("#spring").classList.remove("hide");
  }
  if (document.querySelector("#summer").src = singleProduct.summer) {
    document.querySelector("#summer").classList.remove("hide");
  }
  if (document.querySelector("#fall").src = singleProduct.fall) {
    document.querySelector("#fall").classList.remove("hide");
  }
  if (document.querySelector("#winter").src = singleProduct.winter) {
    document.querySelector("#winter").classList.remove("hide");
  }

  // Vis kun de landskaber som urten har 
  if (document.querySelector("#beach").src = singleProduct.beach) {
    document.querySelector("#beach").classList.remove("hide");
  }
  if (document.querySelector("#forest").src = singleProduct.forest) {
    document.querySelector("#forest").classList.remove("hide");
  }
  if (document.querySelector("#town").src = singleProduct.town) {
    document.querySelector("#town").classList.remove("hide");
  }
  if (document.querySelector("#fields").src = singleProduct.fields) {
    document.querySelector("#fields").classList.remove("hide");
  }

}
