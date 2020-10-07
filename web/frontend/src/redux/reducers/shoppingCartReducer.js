const initialState = {
    listProduct: [],
}

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                listProduct: action.payload
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                listProduct: action.payload
        }
        case 'REMOVE_LIST_PRODUCT':
            return {
                listProduct:[]    
        }
        default:
            return state
    }
}

export default shoppingCartReducer
