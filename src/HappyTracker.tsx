import { FC } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./selector";
type HappyTrackerProps = {};
const HappyTracker: FC<HappyTrackerProps> = () => {
  const happyCount = useSelector(happyCountSelector);
  return (
    <>
      <div className="bg-red-500 p-3 w-full text-center text-4xl">
        Your <span className="text-white">Happy</span> Score is {happyCount}
      </div>
    </>
  );
};
HappyTracker.defaultProps = {};
export default HappyTracker;
