import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ContainerReducer from "./reducers/ContainerReducer"

const reducer = combineReducers({
  ContainerReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store