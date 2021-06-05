const base_url = "http://localhost:3001/api";


export const LOGIN_ULR = () => base_url + "/user/login"
export const REGISTER_ULR = () => base_url + "/user/register"
export const LOGIN_AUTH_ULR = () => base_url + "/private/profile/login"
export const PROFILE_INFO = () => base_url + "/private/profile/allInfo"
export const FOLLOWING_URL = () => base_url + "/private/user/follow"
export const UNFOLLOWING_URL = () => base_url + "/private/user/unfollow"
export const GETALLTWEET_URL = () => base_url + "/private/tweet/all"
export const POST_ULR =  `${base_url}/private/tweet/add`
export const HOMETWEET_URL = `${base_url}/private/home/all`
export const BASE_URL = base_url;
export const BASIC = "http://localhost:3001";
