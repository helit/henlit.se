import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { glow, theme } from "@/theme";
import { MACHINE } from "@/system/filesystem";

const BOOT_LINES = [
  "HENLIT SYSTEMS - PERSONAL TERMINAL",
  `BIOS ${MACHINE.version} ......................... OK`,
  "MEMORY CHECK ......................... OK",
  "LOCALE ............................... GOTHENBURG, SE",
  "MOUNTING /home/henrik ................ OK",
  "LOADING PROFILE ...................... OK",
  "",
  "READY.",
];

const LINE_DELAY_MS = 110;

const Log = styled.pre`
  margin: 0;
  padding: clamp(16px, 5vmin, 48px);
  color: ${theme.text};
  text-shadow: ${glow(theme.text)};
  font-size: clamp(13px, 2vw, 18px);
  line-height: 1.6;
  white-space: pre-wrap;
`;

const Skip = styled.div`
  margin-top: 16px;
  color: ${theme.dim};
  text-shadow: none;
  font-size: 0.85em;
`;

interface BootProps {
  onDone: () => void;
}

export const Boot = ({ onDone }: BootProps) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = BOOT_LINES;

  useEffect(() => {
    const finish = () => onDone();
    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);

    const timers = lines.map((_, index) =>
      window.setTimeout(() => setVisibleLines(index + 1), index * LINE_DELAY_MS)
    );
    const done = window.setTimeout(
      finish,
      lines.length * LINE_DELAY_MS + 450
    );

    return () => {
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      timers.forEach(window.clearTimeout);
      window.clearTimeout(done);
    };
  }, [lines, onDone]);

  return (
    <Log>
      {lines.slice(0, visibleLines).join("\n")}
      <Skip>press any key to skip</Skip>
    </Log>
  );
};
