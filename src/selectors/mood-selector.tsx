import { State } from "../store";

export function happyMomentSelector(state: State) {
  return state.happpy.happyMoments;
}

export function sadMomentSelector(state: State) {
  return state.sad.sadMoments;
}
