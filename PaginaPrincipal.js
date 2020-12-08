import * as Modal from "./Modal.js";

//Fetch API
const PokeFetch= async (id)=>{
    try{
        const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let comingData=await pokemon.json();
        return comingData;
    }
    catch (error){
        console.log(`Oh no, an error ${error}`);
    }
    
}
/* 
const searchPokemon= async (element) => {
    console.log(element.value)
    let userInput=element.value;
    console.log(userInput);
    // const pokemon= await PokeFetch(searchBar)

} */

let searchBar=document.getElementById("search")

searchBar.addEventListener("keyup", async (e)=>{
    e.preventDefault();
    let input=searchBar.value;
    let pokeData=await PokeFetch(input);
    const pokemon={
        name:pokeData.name,

        abilities:pokeData.abilities.map((x)=>{
            return x.ability.name;  
        }),

        sprite:pokeData.sprites.other.dream_world.front_default
    }
    let modal=document.getElementById('exampleModal');
    let content=document.createElement('div');
    content.innerHTML= `
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">${pokemon.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="${pokemon.sprite}" 
                ${pokemon.name} is an excellent pokemon!

                It abilites are:
                ${pokemon.abilities}

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
            </div>
        </div>
        </div>
    `
    modal.appendChild(content);
    console.log(searchBar.appendChild(modal));
});





