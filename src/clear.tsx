import { useDispatch } from "react-redux";
import { clearButtonCLicked } from "./action";

export default function Clear() {
  const dispatcher = useDispatch();
  function handleClick() {
    dispatcher(clearButtonCLicked());
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
