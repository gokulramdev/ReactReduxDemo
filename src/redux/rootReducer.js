import { combineReducers } from 'redux'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  user1: userReducer,
  user2: userReducer,
})

export default rootReducer
