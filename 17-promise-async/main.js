// const getPokemon = (idOrName) => {
//   const xhr = new XMLHttpRequest();


//   xhr.open('GET', `http://pokeapi.co/api/v2/pokemon/${idOrName}`, true);

//   xhr.onload = () => {
//     debugger;
//     if(xhr.status === 200) {
//         const json = JSON.parse(xhr.responseText);
//         debugger;
//         const firstTypeUrl = json.types[0].type.url;

//         const xhrFirstType = new XMLHttpRequest();

//         xhrFirstType.open('GET', firstTypeUrl, true);
      
//         xhrFirstType.onload = () => {
//           debugger;
//           if(xhrFirstType.status === 200) {
//               const json = JSON.parse(xhrFirstType.responseText);
//               debugger;
//           }
//         }
//         xhrFirstType.send();
//     }
//   }
//   xhr.send();
// }

// getPokemon(3);

// debugger;





// // ====================================================================================

const wait = (ms) => new Promise((myResolve, myReject) => setTimeout(myResolve, ms))

const myAxios = (url) => {
  return new Promise((resolve, reject) => {
    const xhrFirstType = new XMLHttpRequest();

    xhrFirstType.open('GET', url, true);

    xhrFirstType.onload = () => {
      if(xhrFirstType.status === 200) {
          const json = JSON.parse(xhrFirstType.responseText);
          resolve(json)
      }
    }
    xhrFirstType.send();
  })
};

myAxios('http://pokeapi.co/api/v2/pokemon/3').then((pokemon) => {
  myAxios(pokemon.types[0].type.url).then((type) => {
    console.log('all pokemon type', type.pokemon)
  })  
})

async function main() {
  const pokemon = await myAxios('http://pokeapi.co/api/v2/pokemon/3');
  const type = await myAxios(pokemon.types[0].type.url);
  console.log('type po', type.pokemon)
}

main();



// await wait(5000)




















// const myPromise = getMyPromise(5);


// myPromise.then((value) => {
//   debugger;
//   console.log('value', value)
// }).then(() => {
//   debugger;
// })

// myPromise.then(() => {
//   debugger;
// })

// myPromise.then(() => {
//   debugger;
// })

// myPromise.catch(() => {
//   debugger;
// })

// function checkPromise() {
//   if (myPromise) {
//     alert('myPromise ready')
//   } else {
//     alert('myPromise not ready')
//   }
  
// }


// const myAxios = (url) => new Promise((resolve, reject) => {

// })




// getPokemon(4);



// function reqListener () {
//   const response = this.responseText;

//   response.types[0];
//   function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();


// // ================

// axios.get("http://www.example.org/example.txt").then(response => {
//   const types = response.types;

//   return axios.get("http://www.example.org/example/types/" + types[0])
// }).then(typesResponse => {
//     document.querySelector('.allPokemonInFirstType').innerHTML = typesResponse.pokemons;
// })


// // ================

// async function main() {
//   const pokemonObject = await axios.get("http://www.example.org/1");
//   const allPokemonFirstType = await axios.get(`http://www.example.org/types/${pokemonObject.types[0]}`);
//   document.querySelector('.allPokemonInFirstType').innerHTML = allPokemonFirstType.pokemons;
// }

