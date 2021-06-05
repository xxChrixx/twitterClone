import {LOGIN_AUTH_ULR} from '../api/api'

import axios from 'axios'
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


  export const loginToken = (userId, token) => async (dispatch) => {
    
    //FETCH AXIOS
    dispatch({
      type: "USER_LOADING",
    });

    const dataBody = {
      id: userId
    }
    console.log(userId);
    const response = await axios
      .post(
        LOGIN_AUTH_ULR(),
        dataBody,
        { headers: { "auth-token": token } }
      )
      .catch((err) => console.log(err.response));
  console.log(response);
    if (!response) return;
  
    dispatch({
      type: "GET_DATA",
      payload: {
        token: token,
        profile: response.data
      },
    });

  };
  