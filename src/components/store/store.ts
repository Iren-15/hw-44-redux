import { combineReducers, compose, createStore } from "redux";
import { userReducer } from "./reducer/formReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  {},
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
