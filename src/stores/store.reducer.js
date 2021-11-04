import { combineReducers } from "redux";

import userStore from "./users/user.store";

export default combineReducers({
    user : userStore
})