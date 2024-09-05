import { AnyAction } from "redux";
import { Moment } from "../store";
import { _SAD_BUTTON_CLICKED_ } from "../actions/mood-action";
import { produce } from "immer";

export type sadState = {
  sadMoments: Moment[];
};

export const initialSad: sadState = {
  sadMoments: [],
};

export default function sadnessReducer(
  currentSadState = initialSad,
  action: AnyAction
): sadState {
  switch (action.type) {
    case _SAD_BUTTON_CLICKED_:
      return produce(currentSadState, (draft) => {
        draft.sadMoments.push(action.payload);
      });
    default:
      return currentSadState;
  }
}
