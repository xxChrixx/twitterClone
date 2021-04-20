  
import { combineReducers } from "redux";


//import reducer
import userReducer from './userReducer'
import tweetReducer from './tweetReducer'

const rootReducer = combineReducers({
user : userReducer,
homeTweets: tweetReducer
});

export default rootReducer;