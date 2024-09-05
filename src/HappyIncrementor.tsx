import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/mood-action";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatcher = useDispatch();
  function increment() {
    dispatcher(happyButtonClicked(quantity, new Date()));
  }
  return (
    <>
      <div className="p-10 flex flex-col gap-5 items-center">
        <h1 className="text-4xl">
          Are you <span className="text-red-600">Happy</span> ?
        </h1>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
          className="border-2 border-red-500 p-2 text-2xl rounded-md block"
        />
        <button
          onClick={increment}
          className="p-2 text-white bg-red-600 rounded-md inline-block"
        >
          Update
        </button>
      </div>
    </>
  );
};

HappyIncrementor.defaultProps = {};

export default memo(HappyIncrementor);
