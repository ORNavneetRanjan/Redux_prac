import { useDispatch } from "react-redux";
import {
  _CLEAR_BUTTON_CLICKED_,
  clearButtonClicked,
} from "./actions/mood-action";

export default function Clear() {
  const dispatcher = useDispatch();
  function handleClick() {
    dispatcher(clearButtonClicked());
  }
  return (
    <>
      <div>
        <button
          className="p-2 text-white bg-red-600 rounded-md inline-block"
          onClick={handleClick}
        >
          Clear
        </button>
      </div>
    </>
  );
}
