import axios from "axios";
import { HOMETWEET_URL } from "../api/api";

//Action Creator

export const loadHomeTweet = (userId, token) => async (dispatch) => {
  dispatch({
    type: "LOADING_TWEETS",
  });

  //FETCH AXIOS
  const tweetsResoponse = await axios
    .get(
      `${HOMETWEET_URL}/${userId}`,
      {body:"" },
      { headers: { "auth-token": token } }
    )
    .catch((err) => console.log(err.response));

  if (!tweetsResoponse) return;

  dispatch({
    type: "FETCH_TWEETS",
    payload: {
      tweets: tweetsResoponse.data,
    },
  });
};
