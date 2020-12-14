//Fetch API
import renderModal from './modalModule.js';

const PokeFetch = async (id) => {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let comingData = await pokemon.json();
        return comingData;
    } catch (error) {
        console.log(`Oh no, an error ${error}`);
    }

}


let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    renderModal();
})

modalBg.addEventListener('click', () => {
    modalBg.classList.remove('modalActive');

})

export default PokeFetch;