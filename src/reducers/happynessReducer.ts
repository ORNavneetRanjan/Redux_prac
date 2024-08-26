import { AnyAction } from "redux";
import { Moment } from "../store";
import { _HAPPY_BUTTON_CLICKED_ } from "../action";

export type happyState = {
  happyMoments: Moment[];
};

export const initialHappy: happyState = {
  happyMoments: [],
};
export default function happynessReducer(
  currentHappyState: happyState,
  action: AnyAction
) {
  switch (action.type) {
    case _HAPPY_BUTTON_CLICKED_:
      return {
        ...currentHappyState,
        happyMoments: [
          ...currentHappyState.happyMoments,
          {
            quantity: action.payload.quantity,
            when: action.payload.when,
          },
        ],
      };
    default:
      return currentHappyState;
  }
}
