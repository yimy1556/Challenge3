import authReducer from './authReducer'
import itemReducer from './itemReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers ({
    authReducer: authReducer,
    itemReducer: itemReducer
})

export default rootReducer