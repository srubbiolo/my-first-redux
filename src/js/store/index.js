import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
// import thunk from "redux-thunk"; this is for thunk
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  // applyMiddleware(forbiddenWordsMiddleware, thunk)
  applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
);

initialiseSagaMiddleware.run(apiSaga);
export default store;
