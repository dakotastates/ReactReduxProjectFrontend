import { combineReducers } from "redux";
import userReducers from "./usersReducer";
import AuthReducer from "./AuthReducer";
import commentsReducers from "./commentsReducer";

const rootReducer = combineReducers({
  usersStore: userReducers,
  auth: AuthReducer,
  commentsStore: commentsReducers
});

export default rootReducer;
