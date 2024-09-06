import { combineReducers, createStore } from "redux";
import {
  _CLEAR_BUTTON_CLICKED_,
  _HAPPY_BUTTON_CLICKED_,
  _SAD_BUTTON_CLICKED_,
} from "./actions/mood-action";
import happynessReducer from "./reducers/happynessReducer";
import sadnessReducer from "./reducers/sadnessReducer";
import productReducer from "./reducers/product";
import ordersReducer from "./reducers/orders";

export type Moment = {
  quantity: number;
  when: Date;
};

//reducer has to be non-mutating
// but bekar mei v naye object maath banao

//reducer has to be a pure function

const reducer = combineReducers({
  sad: sadnessReducer,
  happpy: happynessReducer,
  products: productReducer,
  orders: ordersReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
