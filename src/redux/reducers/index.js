import { combineReducers } from "redux";
import { buyCakeReducer } from "./reducer/buyCakeReducer";

const rootReducers = combineReducers({
  buyCakeReducer,
});

export default rootReducers;
