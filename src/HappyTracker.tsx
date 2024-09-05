import { FC } from "react";
import { useSelector } from "react-redux";
import { happyMomentSelector } from "./selectors/mood-selector";
type HappyTrackerProps = {};
const HappyTracker: FC<HappyTrackerProps> = () => {
  const happyMoments = useSelector(happyMomentSelector);
  return (
    <>
      <div className="bg-red-500 p-3 w-full text-center text-4xl">
        {happyMoments.map((m) => (
          <div key={m.when.toISOString()}>
            Your <span className="text-white">Happy</span> Score is {m.quantity}{" "}
            at {m.when.toISOString()}
          </div>
        ))}
      </div>
    </>
  );
};
HappyTracker.defaultProps = {};
export default HappyTracker;
