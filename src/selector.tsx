import { State } from "./store";

export function happyMomentSelector(state: State) {
  return state.happy.happyMoments;
}

export function sadMomentSelector(state: State) {
  return state.sad.sadMoments;
}
