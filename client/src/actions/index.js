import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs",{
            
        });
       return  dispatch({
        type: 'GET_DOGS',
        payload: json.data
        })
    }
}

export function filterDogsByTemperament(payload){
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

