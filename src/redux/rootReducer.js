import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer=combineReducers({
    data:userReducer,
})

export default rootReducer;