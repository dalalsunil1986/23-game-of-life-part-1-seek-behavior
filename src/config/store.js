import { createStore, combineReducers } from 'redux'
import specimenReducer from '../reducers/specimens'

const rootReducer = combineReducers({
  specimens: specimenReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store