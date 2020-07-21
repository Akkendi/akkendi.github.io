const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      let town = towns[i]
      let townNames = ["Fish Haven", "Preston", "Soda Springs"]
      if (townNames.includes(town.name)) {

        let section = document.createElement('section');
        section.classList.add('town');
        // info div
        let info = document.createElement('div');
        info.classList.add('info');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        h2.textContent = town.name;
        motto.textContent =  'Motto: ' + town.motto;
        year.textContent = 'Year Founded: ' + town.yearFounded;
        pop.textContent = 'Current Population: ' + town.currentPopulation;
        rain.textContent = 'Average Rainfall: ' + town.averageRainfall;
        info.appendChild(h2);
        info.appendChild(motto);
        info.appendChild(year);
        info.appendChild(pop);
        info.appendChild(rain);
        // picture div
        let picture = document.createElement('div')
        picture.classList.add('picture');
        let img = document.createElement('img');
        let alt = document.createElement('alt');
        alt.setAttribute('alt', town.name);
        img.setAttribute('src', "images/" + town.photo);
        img.setAttribute('alt', `Photo of ${town.name}`);
        picture.appendChild(img);
        
        // append info and picture to section
        section.appendChild(info)
        section.appendChild(picture)

        document.getElementById('towns').appendChild(section);
      }


    }


  })