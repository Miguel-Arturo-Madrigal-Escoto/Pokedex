import React, { useState } from 'react';
import { getPokemon } from '../helpers/getPokemon';

export const Pokedex = () => {
    const [ name, setName ] = useState('');
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: false
    });

    const handleInputChange = ({ target }) => {
        setName(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length > 0) {

            getPokemon(name)
                .then( data => {
                    setState({
                        loading: false,
                        error: false,
                        data
                    })
                })
                .catch(err => {
                    console.clear();
                    setState({
                        data: {},
                        loading: false,
                        error: true
                    })
                });
        }  
    }

    const { data, error, loading } = state;
    

    return (
      <form onSubmit={ handleSubmit }>
            <div className="card animate__animated animate__bounce" style={{'width': '18rem', 'margin': '30px auto'}}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">pokemon</span>
                    </div>
                    <input onChange={ handleInputChange } type="text" className="form-control" placeholder="ej: pikachu" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                {
                    (!error && !loading) ? <img className="card-img-top" src={ data.sprites?.front_default } alt="imagen del pokemon" />
                           : name === '' ? <div className="alert alert-info" role="alert"> Busca un pokemon </div>
                           : <div className="alert alert-danger" role="alert">Pokemon no encontrado</div>
                }
                
                <div className="card-body">
                    <h5 className="card-title">{ (!error && !loading) && data.name }</h5>
                </div>
            </div>
      </form>
  );
};

