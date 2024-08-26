import { FC } from "react";
import { useSelector } from "react-redux";
import { sadMomentSelector } from "./selector";
type SadTrackerProps = {};
const SadTracker: FC<SadTrackerProps> = () => {
  const sadMoments = useSelector(sadMomentSelector);
  return (
    <>
      <div className="bg-blue-500 p-3 w-full text-center text-4xl">
        {sadMoments.map((m) => (
          <div key={m.when.toISOString()}>
            Your <span className="text-white">Sad</span> Score was {m.quantity}{" "}
            at {m.when.toISOString()}
          </div>
        ))}{" "}
      </div>
    </>
  );
};
SadTracker.defaultProps = {};
export default SadTracker;
