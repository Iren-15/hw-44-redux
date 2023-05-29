import { combineReducers, compose, createStore } from "redux";
import { formReducer } from "./reducer/formReducer";

const rootReducer = combineReducers({
  formUser: formReducer,
});

export const store = createStore(
  rootReducer,
  {},
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
