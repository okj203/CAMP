import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
  errors: errorsReducer,
  session,
  entities: entitiesReducer,
});

export default RootReducer;
