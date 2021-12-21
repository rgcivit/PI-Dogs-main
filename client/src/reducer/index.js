const initialState ={
    dogs :[]
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state, 
                dogs: action.payload
            }
        case 'FILER_BY_TEMPERAMENT':
               
            const allTemperament = state.temperament
            const tempFiltered =action.payload === 'All'? allTemperament:
            allTemperament.filter(el => el.temperament ===action.payload)
            return {
                ...state, 
                temperament: tempFiltered
            }
         
        
            
            default:
                
                return state;

         
    }

}

export default rootReducer;