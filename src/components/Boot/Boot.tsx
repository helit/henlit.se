import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { glow, theme } from "@/theme";
import { MACHINE } from "@/system/filesystem";

/** Columns the dot leaders are padded out to. */
const WIDTH = 38;

/** A checked item, with its result aligned to a fixed right margin. */
const check = (label: string, result: string) => {
  const dots = Math.max(3, WIDTH - label.length - result.length - 2);
  return `${label} ${".".repeat(dots)} ${result}`;
};

interface BootLine {
  text: string;
  /** Milliseconds to hold before the next line appears. */
  pause: number;
}

const SEQUENCE: BootLine[] = [
  { text: "HENLIT SYSTEMS", pause: 420 },
  { text: `PERSONAL TERMINAL ${MACHINE.version}`, pause: 560 },
  { text: "", pause: 180 },
  { text: check("POST", "OK"), pause: 340 },
  { text: check("CPU", "1 x HUMAN"), pause: 260 },
  { text: check("MEMORY", "OK"), pause: 520 },
  { text: check("DISPLAY", "AMBER P3"), pause: 260 },
  { text: check("INPUT", "KEYBOARD DETECTED"), pause: 300 },
  { text: check("NETWORK", "ONLINE"), pause: 460 },
  { text: "", pause: 180 },
  { text: check("MOUNTING /home/henrik", "OK"), pause: 380 },
  { text: check("LOADING PROFILE", "OK"), pause: 620 },
  { text: "", pause: 160 },
  { text: "READY.", pause: 900 },
];

const Log = styled.pre`
  margin: 0;
  /* A boot log writes from the top down; it is never centred. */
  align-self: flex-start;
  width: 100%;
  color: ${theme.text};
  text-shadow: ${glow(theme.text)};
  font-size: clamp(13px, 2vw, 18px);
  line-height: 1.6;
  white-space: pre-wrap;
`;

const Skip = styled.div`
  margin-top: 20px;
  color: ${theme.dim};
  text-shadow: none;
  font-size: 0.85em;
`;

interface BootProps {
  onDone: () => void;
}

export const Boot = ({ onDone }: BootProps) => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const finish = () => onDone();
    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);

    // Each line waits out every pause before it, so the log advances unevenly
    // the way a real one does rather than at a metronome tick.
    let elapsed = 0;
    const timers = SEQUENCE.map((line, index) => {
      const timer = window.setTimeout(
        () => setVisibleLines(index + 1),
        elapsed
      );
      elapsed += line.pause;
      return timer;
    });
    const done = window.setTimeout(finish, elapsed);

    return () => {
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      timers.forEach(window.clearTimeout);
      window.clearTimeout(done);
    };
  }, [onDone]);

  return (
    <Log>
      {SEQUENCE.slice(0, visibleLines)
        .map((line) => line.text)
        .join("\n")}
      <Skip>press any key to skip</Skip>
    </Log>
  );
};
