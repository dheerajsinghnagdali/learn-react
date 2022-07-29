import * as React from "react";
import { BadStopwatch, GoodStopwatch } from "./use-effect";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <BadStopwatch />
      <GoodStopwatch />
    </div>
  );
};

export default App;
