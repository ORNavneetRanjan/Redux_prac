import { AnyAction, createStore } from "redux";
import {
  _CLEAR_BUTTON_CLICKED_,
  _HAPPY_BUTTON_CLICKED_,
  _SAD_BUTTON_CLICKED_,
} from "./action";

export type State = {
  sadCount: number;
  happyCount: number;
};

const initialValues = {
  sadCount: 0,
  happyCount: 0,
};
//reducer has to be non-mutating
function reducer(
  currentState: State = initialValues,
  action: AnyAction
): State {
  if (action.type === _HAPPY_BUTTON_CLICKED_) {
    return {
      ...currentState,
      happyCount: currentState.happyCount + action.payload,
    };
  } else if (action.type === _SAD_BUTTON_CLICKED_) {
    return {
      ...currentState,
      sadCount: currentState.sadCount + action.payload,
    };
  } else if (action.type === _CLEAR_BUTTON_CLICKED_) {
    return {
      sadCount: 0,
      happyCount: 0,
    };
  }
  return currentState;
}
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
