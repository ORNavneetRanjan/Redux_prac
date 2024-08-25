import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

function App() {
  return (
    <>
      <div className=" bg-gray-200 min-h-screen  flex flex-col items-center">
        <HappyTracker />
        <HappyIncrementor />
        <SadTracker />
        <SadIncrementor />
      </div>
    </>
  );
}

export default App;
