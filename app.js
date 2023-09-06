import { titleEng, titleFra } from "./data.js";

const title = document.getElementById("title");
const langCheckbox = document.getElementById("langCheckbox");

langCheckbox.addEventListener("change", function () {
  if (langCheckbox.checked) {
    console.log("Fra");
    title.innerText = titleFra
  } else {
    console.log("Eng");
    title.innerText = titleEng
  }
});