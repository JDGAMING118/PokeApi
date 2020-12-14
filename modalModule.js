import PokeFetch from './PaginaPrincipal.js';

let modalBg = document.querySelector('.modalBg');
let modalName = document.getElementById('name');
let modalAbilities = document.getElementById('abilities');
let modalSprite = document.getElementById('sprite');

const renderModal = async (info) => {

    const data = await PokeFetch(1);

    const pokemon = {
        name: data.name,
        abilities: data.abilities.map((x) => {
            return x.ability.name
        }),
        sprite: data.sprites.other.dream_world.front_default,
        baseExperience: data.base_experience
    }


    modalBg.classList.add('modalActive');
    modalName.textContent = pokemon.name
    modalAbilities.textContent = pokemon.abilities;
    modalSprite.setAttribute('src', pokemon.sprite);
}

export default renderModal;