import { AnyAction } from "redux";
import { Moment } from "../store";
import { _SAD_BUTTON_CLICKED_ } from "../action";

export type sadState = {
  sadMoments: Moment[];
};

export const initialSad: sadState = {
  sadMoments: [],
};

export default function sadnessReducer(
  currentSadState: sadState,
  action: AnyAction
) {
  switch (action.type) {
    case _SAD_BUTTON_CLICKED_:
      return {
        ...currentSadState,
        sadMoments: [
          ...currentSadState.sadMoments,
          {
            quantity: action.payload.quantity,
            when: action.payload.when,
          },
        ],
      };
    default:
      return currentSadState;
  }
}
