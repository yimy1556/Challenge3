const initialState = { product: '' }

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                product: action.payload.product,

            }
        default:
            return state
    }
}

export default itemReducer
