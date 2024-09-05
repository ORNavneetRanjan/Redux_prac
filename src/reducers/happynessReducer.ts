import { AnyAction } from "redux";
import { Moment } from "../store";
import { _HAPPY_BUTTON_CLICKED_ } from "../actions/mood-action";
import { produce } from "immer";

export type happyState = {
  happyMoments: Moment[];
};

export const initialHappy: happyState = {
  happyMoments: [],
};
export default function happynessReducer(
  currentHappyState = initialHappy,
  action: AnyAction
) {
  switch (action.type) {
    case _HAPPY_BUTTON_CLICKED_:
      return produce(currentHappyState, (draft) => {
        draft.happyMoments.push(action.payload);
      });
    default:
      return currentHappyState;
  }
}
