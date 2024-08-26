import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatcher = useDispatch();
  function increment() {
    dispatcher(sadButtonClicked(quantity));
  }
  return (
    <>
      <div className="p-10 flex flex-col gap-5 items-center">
        <h1 className="text-4xl">
          Are you <span className="text-blue-500">Sad</span> ?
        </h1>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
          className="border-2 border-blue-500 p-2 text-2xl rounded-md block"
        />
        <button
          onClick={increment}
          className="p-2 text-white bg-blue-600 rounded-md inline-block"
        >
          Update
        </button>
      </div>
    </>
  );
};

SadIncrementor.defaultProps = {};

export default memo(SadIncrementor);
