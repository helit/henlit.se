import styled from "styled-components";
import { Colors } from "../Styles";

// Unicodes from https://www.alt-codes.net/music_note_alt_codes.php

const noteSteps = {
  B3: 30,
  C4: 22,
  D4: 14,
  E4: 6,
  F4: -2,
  G4: -10,
  A4: -18,
  B4: 12,
  C5: 4,
  D5: -4,
  E5: -12,
  F5: -20,
  G5: -28,
  A5: -36
};

export const SharpSteps = [
  -21,
  3,
  -29,
  -5,
  19,
  -13,
  11
];

export const FlatSteps = [
  -3,
  -27,
  5,
  -19,
  13,
  -11,
  21
];

export const Staff = styled.div`
  position: relative;
  width: 600px;
`;

export const FinalBarline = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3px;
  border-right: 3px solid ${Colors.black};
  border-left: 2px solid ${Colors.black};
`;

export const Line = styled.div`
  height: 2px;
  margin-bottom: 14px;
  background-color: ${Colors.black};
`;

export const GClef = styled.span`
  position: absolute;
  top: -33px;
  left: 0;
  &:before {
    content: "\\1D11E";
    font-size: 90px;
  }
`;

export const Signature = styled.div`
  position: absolute;
  top: 0;
  left: 48px;
  width: 100px;
  height: 100%;
`;

export const QuarterNote = styled.span`
  position: absolute;
  ${props => props.flipped && "transform: scaleY(-1);"}
  &:before {
    content: "\\1D15F";
    font-size: 60px;
  }
`;

export const NoteWrapper = styled.div`
  position: relative;
  top: ${props => props.octave && `${noteSteps[props.octave]}px`};
  left: ${props => (props.index > 0 ? `${155 + 55 * props.index}px` : "155px")};
`;

export const LedgerLine = styled.div`
  position: absolute;
  top: ${props => props.position && `${props.position}px`};
  height: 2px;
  width: 23px;
  background-color: ${Colors.black};
`;

export const Sharp = styled.span`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => 13 * props.index}px;
  &:before {
    content: "\\266F";
    font-size: 35px;
  }
`;

export const Flat = styled.span`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => 13 * props.index}px;
  &:before {
    content: "\\266D";
    font-size: 40px;
  }
`;
