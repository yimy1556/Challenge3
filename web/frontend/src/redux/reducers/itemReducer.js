const initialState = { product: [], rating: [],countries: [] }

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                product: action.payload,

            }
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }        
        case 'RATING':
            return {
                ...state,
                rating: action.payload.rating
            }
        default:
            return state
    }
}

export default itemReducer
