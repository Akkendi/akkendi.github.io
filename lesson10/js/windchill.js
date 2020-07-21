function getWindChill(){
  let t = parseFloat(document.getElementById("currentTemp").textContent);
  let s = parseFloat(document.getElementById("windSpeed").textContent);
  let x = windChill(t, s);

  document.getElementById("windChill").innerHTML = x;
}

function windChill(tempF, speed){
  if (tempF < 50 && speed > 4.8) {

  let output = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));

  return Math.round(output);
  }
  else {
      return "N/A";
  }
}
