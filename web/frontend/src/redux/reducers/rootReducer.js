import authReducer from './authReducer'
import itemReducer from './itemReducer'
import shoppingCartReducer from './shoppingCartReducer'

const { combineReducers } = require('redux')

const rootReducer = combineReducers ({
    authReducer: authReducer,
    itemReducer: itemReducer,
    shoppingCartReducer,
})

export default rootReducer
