import { useEffect, useState } from "react";

export const Cursor = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{showCursor ? "█" : " "}</span>;
};
