import { FC } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selector";
type SadTrackerProps = {};
const SadTracker: FC<SadTrackerProps> = () => {
  const sadCount = useSelector(sadCountSelector);
  return (
    <>
      <div className="bg-blue-500 p-3 w-full text-center text-4xl">
        Your <span className="text-white">Sad</span> Score is {sadCount}
      </div>
    </>
  );
};
SadTracker.defaultProps = {};
export default SadTracker;
