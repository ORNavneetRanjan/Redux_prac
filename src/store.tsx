import { AnyAction, createStore } from "redux";
import {
  _CLEAR_BUTTON_CLICKED_,
  _HAPPY_BUTTON_CLICKED_,
  _SAD_BUTTON_CLICKED_,
} from "./action";
import sadnessReducer, {
  initialSad,
  sadState,
} from "./reducers/sadnessReducer";
import happynessReducer, {
  happyState,
  initialHappy,
} from "./reducers/happynessReducer";

export type Moment = {
  quantity: number;
  when: Date;
};

export type State = {
  sad: sadState;
  happy: happyState;
};

const initialValues: State = {
  sad: initialSad,
  happy: initialHappy,
};
//reducer has to be non-mutating
function reducer(currentState = initialValues, action: AnyAction): State {
  if (action.type === _CLEAR_BUTTON_CLICKED_) {
    return {
      sad: sadnessReducer(initialSad, action),
      happy: happynessReducer(initialHappy, action),
    };
  }
  return {
    sad: sadnessReducer(currentState.sad, action),
    happy: happynessReducer(currentState.happy, action),
  };
}
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
