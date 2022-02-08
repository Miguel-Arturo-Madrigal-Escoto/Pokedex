import { useEffect, useState } from "react"
import { getPokemon } from "../helpers/getPokemon";

export const usePokemon = (pokemon) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: false
    });

    useEffect(() => {

        /*fetch(`https://pokeapi.co/api/v2/pokemon/asasa/`)
            .then(resp => {
                if (resp.status !== 404) {
                    return resp.json()
                }
                return Promise.reject('error 404')
            })
            .then(data => {
                setState({
                    ...state,
                    error: false,
                    data
                })
            })
            .catch(err => {
                console.log(err);
                setState({
                    ...state,
                    error: true
                })
            })*/
            getPokemon(pokemon)
                .then( data => {
                    setState({
                        ...state,
                        data
                    })
                })
                .catch(err => {
                    setState({
                        ...state,
                        error: true
                    })
                })
 
    }, [ pokemon ]);

    return state;
}

export default usePokemon;
