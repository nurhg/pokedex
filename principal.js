const searchBtn = document.getElementById('search-btn'); // boton de busqueda
const inputField = document.getElementById('name-input'); // input de busqueda
const nameScreen = document.getElementById('name-screen'); //nombre de pokemon
const imageScreen = document.getElementById('main-screen'); // imagen de pokemon
const height = document.getElementById('height'); // tamaño
const weight = document.getElementById('weight'); // peso
const hp = document.getElementById('hp'); // hp
const attack = document.getElementById('attack'); // ataque
const defense = document.getElementById('defense'); // defensa
const speed = document.getElementById('speed'); // velocidad
const typeScreen = document.getElementById('type-screen'); // tipo de pokemon
const idScreen = document.getElementById('id-screen'); // numero de pokemon

const getPokemonData = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            let id = ('00' + data.id).slice(-3);
            imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
            nameScreen.innerHTML = `Nombre: ${data.name}`;
            typeScreen.innerHTML = `Tipo: ${data.types[0].type.name}`;            
            height.innerHTML = `Tamaño: ${data.height * 10}cm`;
            weight.innerHTML = `Peso: ${data.weight / 10}kg`;
            hp.innerHTML = `Hp ${data.stats[0].base_stat}`;
            attack.innerHTML = `Ataque ${data.stats[1].base_stat}`;
            defense.innerHTML = `Defensa ${data.stats[2].base_stat}`;
            speed.innerHTML = `Velocidad: ${data.stats[5].base_stat}`;
            inputField.value = '';
        });
};

inputField.addEventListener('keydown',(event) => event.key === 'Enter' && searchBtn.click());
searchBtn.addEventListener('click', () => getPokemonData(inputField.value));