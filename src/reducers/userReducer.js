const initialState = {
    token: "",
    profile: {  },
    isLoading: true,
  };
  


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DATA":
        return {
          ...state,
          token: action.payload.token,
          profile: action.payload.profile,
          isLoading: false
        };
        case "USER_LOADING":
        return{
          ...state,
          isLoading: true,
        };
        case "LOG_OUT":
          return{
            ...state,
            token: "",
          profile: {},
          }
      default:
        return { ...state };
    }
  };
  
  export default userReducer;