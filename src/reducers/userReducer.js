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
      default:
        return { ...state };
    }
  };
  
  export default userReducer;