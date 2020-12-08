

//Fetch API
const PokeFetch= async (id)=>{
    try{
        const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let comingData=await pokemon.json();
        return comingData;
    }
    catch (error){
        console.log(error);
    }
    
}


PokeFetch(5)
.then((value)=>{
    return value
})