import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const dispatcher = useDispatch();
  function increment() {
    dispatcher(happyButtonClicked);
  }
  return (
    <>
      <div className="p-10 flex flex-col gap-5 items-center">
        <h1 className="text-4xl">
          Are you <span className="text-red-600">Happy</span> ?
        </h1>
        <button
          onClick={increment}
          className="p-2 text-white bg-red-600 rounded-md inline-block"
        >
          Yes
        </button>
      </div>
    </>
  );
};

HappyIncrementor.defaultProps = {};

export default memo(HappyIncrementor);
