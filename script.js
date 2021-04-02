const button = document.getElementById('submit');
const searchBar = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const componentContainer = document.getElementById('components');
const spellList = document.getElementById('spell-list');
const API_URL = 'https://www.dnd5eapi.co/api/spells/';
const spells = document.getElementsByClassName('spells');
const range = document.getElementById('range');
const concentration = document.getElementById('concentration');
const casting = document.getElementById('casting');
const spellName = document.getElementById('spellname');

//aoe
//classes
//damage

//search for a spell
button.addEventListener('click', (e) => {
  e.preventDefault();
  let searchValue = searchBar.value
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace('/', '-')
    .replace(/'/g, '');
  let SEARCH_URL = `https://www.dnd5eapi.co/api/spells/${searchValue}`;
  fetch(SEARCH_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      spellName.innerText = `${data.name}`;
      resultsContainer.innerHTML = `<p class='info'>${data.desc}</p>`;

      if (data.components) {
        componentContainer.innerHTML = `<p class='info'>${data.components}</p> `;
      }
      if (data.range) {
        range.innerHTML = `<p class='info'>Range: ${data.range}.</p>`;
      }
      if (data.concentration) {
        concentration.innerHTML = `<p class='info'>Requires concentration.</p>`;
      }
      if (data.ritual) {
        ritual.innerHTML = `<p class='info'>This spell is a ritual.</p>`;
      }
      if (data.duration) {
        duration.innerHTML = `<p class='info'>Duration: ${data.duration}</p>`;
      }
      if (data.casting_time) {
        casting.innerHTML = `<p class='info'>Casting time: ${data.casting_time}</p>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//populate spellList & Make clickable
fetch(API_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.results.forEach((spell) => {
      const newSpell = document.createElement('p');

      newSpell.classList.add('spells');
      newSpell.textContent = spell.name;
      spellList.appendChild(newSpell);
      newSpell.addEventListener('click', (e) => {
        let searchValue = e.target.innerHTML
          .toLowerCase()
          .replace(/\s/g, '-')
          .replace('/', '-')
          .replace(/'/g, '');
        let SEARCH_URL = `https://www.dnd5eapi.co/api/spells/${searchValue}`;
        fetch(SEARCH_URL)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            spellName.innerText = `${data.name}`;
            resultsContainer.innerHTML = `<p class='info'>${data.desc}</p>`;

            if (data.components) {
              componentContainer.innerHTML = `<p class='info'>${data.components}</p> `;
            }
            if (data.range) {
              range.innerHTML = `<p class='info'>Range: ${data.range}.</p>`;
            }
            if (data.concentration) {
              concentration.innerHTML = `<p class='info'>Requires concentration.</p>`;
            }
            if (data.ritual) {
              ritual.innerHTML = `<p class='info'>This spell is a ritual.</p>`;
            }
            if (data.duration) {
              duration.innerHTML = `<p class='info'>Duration: ${data.duration}</p>`;
            }
            if (data.casting_time) {
              casting.innerHTML = `<p class='info'>Casting time: ${data.casting_time}</p>`;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });


  