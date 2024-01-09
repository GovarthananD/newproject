const countryAPI = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountrys(data));
};

const displayCountrys = (countries) => {
  // console.log(countries);
  const countryHTML = countries.map((country) => getCountry(country));
  const container = document.getElementById("countries");
  container.innerHTML = countryHTML.join(" ");
};

const getCountry = (country) => {
  console.log(country);
  return `<div class='country-div'>
  <h2>${country.name.common}</h2>
  <img src="${country.flags.png}" alt="pic" />
  </div>`;
};

countryAPI();
