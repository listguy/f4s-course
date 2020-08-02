async function getResources() {
  const response = await fetch("https://api.covid19api.com/countries");
  const countries = await response.json();
  return countries;
}

async function getCountryData(countryName) {
    try{
        const response = await fetch(`https://api.covid19api.com/live/country/${countryName}/status/confirmed`);
        const countryData = await response.json()
        return countryData;
    } catch(error) {
        console.log("error", error);
    };
}

(async function main() {
  const countries = await getResources();
  
  const israel = countries.find((country) => country["Country"] === "Israel");

  const israelData = await getCountryData(israel.Slug);
  
  const list = [];
  for (const data of israelData) {
      const {Date: date, Recovered: recovered} = data;
      list.push({date, recovered});
  }

  console.table(list);
})();
