const initialState = { product: [], countries: [] }

const itemReducer = (state = initialState, action) => {
    console.log(action.payload)
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
        default:
            return state
    }
}

export default itemReducer
