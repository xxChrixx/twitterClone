const initialState = {
    token: "",
    profile: {  },
 
  };
  


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DATA":
        return {
          ...state,
          token: action.payload.token,
          profile: action.payload.profile,
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