import { applyMiddleware, compose, createStore } from "redux";
import { addMovieReducer } from "./Reducer/AddmovieReducer";
import { thunk } from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  addMovieReducer,
  composeEnhancers(applyMiddleware(thunk))
);