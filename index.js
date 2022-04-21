const allDataFrame = document.getElementById("pokeNames");
const mainImage = document.getElementById("image");
const toggleSwitch = document.getElementById("switch");
const allPokeFrame = document.createElement("div");
const grassDiv = document.createElement("div");
const waterDiv = document.createElement("div");
const firediv = document.createElement("div");

const renderAllPokemon = (arrOfObj) => {
  arrOfObj.forEach((pokemon) => {
    const pokemonImg = document.createElement("img");
    pokemonImg.style.height = "200px";
    pokemonImg.style.width = "200px";
    pokemonImg.style.marginTop = "1.5%";
    pokemonImg.style.marginLeft = "5%";
    pokemonImg.style.marginRight = "5%";
    pokemonImg.style.borderRadius = "50%";
    pokemonImg.style.border = "2px solid rgba(0,0,0,0.2)";
    pokemonImg.style.backgroundColor = "rgba(52, 152, 219, 0.2)";
    pokemonImg.addEventListener("mouseover", () => {
      mainImage.src = pokemon.image;
    });
    if (pokemon.power === 1) {
      pokemonImg.src = pokemon.image;
      grassDiv.append(pokemonImg);
    } else if (pokemon.power === 2) {
      pokemonImg.src = pokemon.image;
      waterDiv.append(pokemonImg);
    } else if (pokemon.power === 3) {
      pokemonImg.src = pokemon.image;
      firediv.append(pokemonImg);
    }
  });
  allPokeFrame.append(grassDiv);
  allPokeFrame.append(waterDiv);
  allPokeFrame.append(firediv);
  allDataFrame.append(allPokeFrame);
};

mainImage.addEventListener("click", () => {
  mainImage.style.marginTop = "0%";
  mainImage.style.width = "140px";
  mainImage.style.height = "140px";
  mainImage.src = "./assets/openBall.png";
  allDataFrame.style.display = "";
});

document.addEventListener("DOMContentLoaded", async () => {
  await fetch("http://localhost:3000/pokeNames")
    .then((resp) => {
      return resp.json();
    })
    .then((pokemon) => {
      renderAllPokemon(pokemon);
    });
});
