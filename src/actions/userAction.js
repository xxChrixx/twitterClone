export const loadUser = (data)=> {
    //FETCH AXIOS
    const token = data.token;
    const profile =data.profile;
   
    return({
      type: "GET_DATA",
      payload: {
        token: token,
        profile: profile,
      },
    });
  };