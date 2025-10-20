//this component is a typing animation that you can use for beautiful type writings
"use client";

import { useEffect, useState } from "react";

const TypeWriter = ({ text, speed, ...props }: any) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);
  return <h4 {...props}>{displayedText}</h4>;
};

export default TypeWriter;
