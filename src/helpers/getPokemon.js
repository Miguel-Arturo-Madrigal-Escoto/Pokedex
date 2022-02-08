export const getPokemon = async ( pokemon ) => {

    const url = `https://pokeapi.co/api/v2/pokemon-form/${ pokemon }/`;
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error('Error en la peticion')
    }
    return resp.json();
     
}