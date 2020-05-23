//this shows the update date in the footer
let date = new Date(document.lastModified);
let time = date.toLocaleString('en-US');
    
document.getElementById("modifiedTime").textContent = time;

//humburger menu
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
  }