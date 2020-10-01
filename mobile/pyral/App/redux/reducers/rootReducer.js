import itemReducer from './itemReducer'

const { combineReducers } = require('redux')

const rootReducer = combineReducers ({
    itemReducer: itemReducer,
})

export default rootReducer
