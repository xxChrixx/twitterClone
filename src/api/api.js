const base_url = "http://localhost:3001/api";


export const LOGIN_ULR = () => base_url + "/user/login"
export const REGISTER_ULR = () => base_url + "/user/register"
export const POST_ULR =  `${base_url}/private/tweet/add`
export const HOMETWEET_URL = `${base_url}/private/home/all`
export const BASE_URL = base_url;