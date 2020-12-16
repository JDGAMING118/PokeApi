let template = document.getElementById('templateCard').content;
let fragment = document.createDocumentFragment();
let dinamicCard = document.getElementById('dinamicCard');

const PokeFetch = async (id) => {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let comingData = await pokemon.json();
        return comingData;
    } catch (error) {
        console.log(`Oh no, an error ${error}`);
    }

}

const pokeRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);


}

const renderModal = async () => {

    const data = await PokeFetch(pokeRandom(1, 400));

    const pokemon = {
        name: data.name,
        abilities: data.abilities,
        sprite: data.sprites.other.dream_world.front_default,
        baseExperience: data.base_experience
    }

    template.querySelector('#sprite').setAttribute('src', pokemon.sprite);
    template.querySelector('#name').textContent = pokemon.name;
    template.querySelector('#abilities').textContent = pokemon.abilities.map(x => {
        return x.ability.name;
    });

    let clone = template.cloneNode(true);
    fragment.appendChild(clone)
    dinamicCard.appendChild(fragment);

}

for (let i = 0; i < 12; i++) {
    renderModal()

}