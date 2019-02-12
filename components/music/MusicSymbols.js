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

export const SharpSteps = [-21, 3, -29, -5, 19, -13, 11];

export const FlatSteps = [-3, -27, 5, -19, 13, -11, 21];

export const Staff = styled.div`
  position: relative;
  /* width: ${props => props.width}px; */
`;

export const FinalBarline = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3px;
  border-right: 3px solid ${Colors.darkGrey};
  border-left: 2px solid ${Colors.darkGrey};
`;

export const Line = styled.div`
  height: 2px;
  margin-bottom: 14px;
  background-color: ${Colors.darkGrey};
`;

export const GClef = styled.span`
  position: absolute;
  top: -33px;
  left: 0;
  &:after {
    content: "\\1D11E";
    font-size: 90px;
  }
`;

const SignatureWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 50px;
  width: ${props => props.width}px;
  height: 100%;
`;

const Sharp = styled.span`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => 13 * props.index}px;
  &:after {
    content: "\\266F";
    font-size: 35px;
  }
`;

const Flat = styled.span`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => 13 * props.index}px;
  &:after {
    content: "\\266D";
    font-size: 40px;
  }
`;

export class Signature extends React.Component {
  SignatureWidth(sharps, flats)
  {
    let width = 0;

    if (sharps > 0) {
      width = sharps * 15;
    }

    if (flats > 0) {
      width = flats * 15;
    }

    return width;
  }

  RenderSignature(sharps, flats) {
    let count = [];

    if (sharps > 0) {
      for (let i = 0; i < sharps; i++) {
        count.push(<Sharp key={i} position={SharpSteps[i]} index={i} />);
      }
    }

    if (flats > 0) {
      for (let i = 0; i < flats; i++) {
        count.push(<Flat key={i} position={FlatSteps[i]} index={i} />);
      }
    }

    console.log(sharps, flats);
    console.log(count);

    return count;
  }

  render() {
    const { sharps, flats } = this.props;
    return(
      <SignatureWrapper width={this.SignatureWidth(sharps, flats)}>
        {this.RenderSignature(sharps, flats)}
      </SignatureWrapper>
    );
  }
}

export const QuarterNote = styled.span`
  position: absolute;
  ${props => props.flipped && "transform: rotateX(180deg) rotateY(180deg);"}
  &::after {
    content: "\\1D15F";
    font-size: 60px;
  }
`;

export const NoteWrapper = styled.div`
  position: relative;
  top: ${props => props.octave && `${noteSteps[props.octave]}px`};
  left: ${props =>
    props.index > 0
      ? `${props.margin + 45 * props.index}px`
      : `${props.margin}px`};
`;

export const LedgerLine = styled.div`
  position: absolute;
  top: ${props => props.position && `${props.position}px`};
  height: 2px;
  width: 22px;
  background-color: ${Colors.darkGrey};
`;
