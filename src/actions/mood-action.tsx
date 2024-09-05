import { ActionCreator } from "./index";
import { Moment } from "../store";

export const _HAPPY_BUTTON_CLICKED_ = "happy Button Clicked";
export const _SAD_BUTTON_CLICKED_ = "sad Button Clicked";
export const _CLEAR_BUTTON_CLICKED_ = "clear Button Clicked";

export const happyButtonClicked: ActionCreator<Moment> = (
  quantity: number,
  when: Date
) => ({
  type: _HAPPY_BUTTON_CLICKED_,
  payload: { quantity, when },
});

export const sadButtonClicked: ActionCreator<Moment> = (
  quantity: number,
  when: Date
) => ({
  type: _SAD_BUTTON_CLICKED_,
  payload: { quantity, when },
});

export const clearButtonClicked = () => {
  return {
    type: _CLEAR_BUTTON_CLICKED_,
  };
};
