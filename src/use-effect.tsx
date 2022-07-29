import * as React from "react";

export const BadStopwatch: React.FC = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    console.log("bad stopwatch useEffect mount");

    setInterval(() => {
      setTime((old) => old + 0.1);
    }, 100);

    return () => {
      console.log("bad stopwatch useEffect unmount");
    };
  }, []);

  return <div>Bad stopwatch {time.toFixed()}</div>;
};

export const GoodStopwatch: React.FC = () => {
  const [time, setTime] = React.useState(0);
  const ref = React.useRef<number | null>(null);

  React.useEffect(() => {
    ref.current = setInterval(() => {
      setTime((old) => old + 0.1);
    }, 100);

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
        ref.current = null;
      }
    };
  }, []);

  return <div>Good stopwatch {time.toFixed()}</div>;
};
