import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./styles.css";

const TEXTS = ["Fearless", "Bold", "Tough", "Powerful"];

export default function Text() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="adj">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
}
