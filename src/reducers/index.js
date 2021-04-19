  
import { combineReducers } from "redux";


//import reducer
import userReducer from './userReducer'

const rootReducer = combineReducers({
user : userReducer
});

export default rootReducer;