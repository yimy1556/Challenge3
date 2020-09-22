const initialState = { title: '', description: '', photo: '', price: '', stock: '', type: '' }

const itemReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                photo: action.payload.photo,
                price: action.payload.price,
                stock: action.payload.stock,
                type: action.payload.type
            }
        default:
            return state
    }
}

export default itemReducer