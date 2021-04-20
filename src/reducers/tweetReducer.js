  
const initialState = {
    tweets: [],
    isLoading: true,
  };
  
  const tweetReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "FETCH_TWEETS":
        
        return {
          ...state,
          tweets: action.payload.tweets,
          isLoading: false,
        };
      case "LOADING_TWEETS":
        return {
          ...state,
          isLoading: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default tweetReducer;