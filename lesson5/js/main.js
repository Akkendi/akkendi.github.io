//humburger menu
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector("nav ul").classList.toggle("responsive");
  }

//this shows the update date in the footer
let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let d = new Date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + ", " + d.getDate() + " " + monthname + " " + year;

document.getElementById("modifiedTime").textContent = fulldate;
console.log(fulldate);

document.getElementById("year").textContent = year;