import {GET_FILMS}  from './types'

export const getFilms=()=>dispatch=>{

    return function(dispatch){
        fetch('http://127.0.0.1:3000/api/films')
        .then(res => res.json())
        .then(data=> dispatch({
            type:GET_FILMS,
            payload: films
        }))
    }
}