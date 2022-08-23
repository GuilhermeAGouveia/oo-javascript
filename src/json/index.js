const fetch = async function (url, init) {
    const {default: fetch} = await import("node-fetch");
    return await fetch(url, init);
};
 
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  const response = await fetch(requestURL);
  const superHeroes = await response.json();

  showSuperHeroes(superHeroes);
}

const showSuperHeroes = (superHeroes) =>
  console.log(superHeroes)


populate()