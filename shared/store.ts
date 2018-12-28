import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer, push } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../features/front/auth/reducer";
import thunk from "redux-thunk";

export const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({
  router: routerReducer,
  auth
});

export interface IState {
  router: ReturnType<typeof routerReducer>;
  auth: ReturnType<typeof auth>;
}

type AllActions = any;

//Redirect to Home Page
const hasLoggedIn = (action: any) => {
  return action.type === "LOGIN_SUCCESS";
};
//Redirect to Login Page
const hasRegistred = (action: any) => {
  return action.type === "REGISTER_SUCCESS";
};

//Creating a Redirect to home middleware
const redirectMiddleware = (store: Store) => (next: any) => (action: any) => {
  if (hasLoggedIn(action)) {
    (store as any).dispatch(push("/"));
  }
  if (hasRegistred(action)) {
    (store as any).dispatch(push("/auth/verify"));
  }
  next(action);
};

export const store: Store<IState, AllActions> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, thunk, redirectMiddleware))
);
