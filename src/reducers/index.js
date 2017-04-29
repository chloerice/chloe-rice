import { combineReducers } from 'redux'
import posts from './postReducer'
import loading from './loadingReducer'

const rootReducer = combineReducers({
  posts,
  loading
})

export default rootReducer
