import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import { animals } from "./modules/animals";
import { food } from "./modules/food";

export const history = createBrowserHistory({ basename: "/" });

const modules = {
  animals,
  food
};

const initialState = window.initialReduxState;
export const store = configureStore(history, initialState, modules);
