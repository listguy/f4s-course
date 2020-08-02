function renderCountries(countries) {
  console.log(countries);
  for (const country of countries) {
    console.log(country);
  }
}

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://api.covid19api.com/countries", requestOptions)
  .then((response) => response.json())
  .then(renderCountries)
  .catch((error) => console.log("fetch error", error));
