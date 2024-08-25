import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const dispatcher = useDispatch();
  function increment() {
    dispatcher(sadButtonClicked);
  }
  return (
    <>
      <div className="p-10 flex flex-col gap-5 items-center">
        <h1 className="text-4xl">
          Are you <span className="text-blue-500">Sad</span> ?
        </h1>
        <button
          onClick={increment}
          className="p-2 text-white bg-blue-600 rounded-md inline-block"
        >
          Yes
        </button>
      </div>
    </>
  );
};

SadIncrementor.defaultProps = {};

export default memo(SadIncrementor);
