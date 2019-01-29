import styled from "styled-components";
import gClef from "../../assets/img/g-clef.png";
import wholeNote from "../../assets/img/whole-note.png";
import wholeNoteLedgerTop from "../../assets/img/whole-note_ledger-top.png";
import wholeNoteLedgerMiddle from "../../assets/img/whole-note_ledger-middle.png";
import sharpImg from "../../assets/img/sharp.png";
import flatImg from "../../assets/img/flat.png";

const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Staff = styled.div`
  position: relative;
  width: 600px;
`;

const FinalBarline = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3px;
  border-right: 3px solid #000;
  border-left: 2px solid #000;
`;

const ReverseFinalBarline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 3px;
  border-right: 2px solid #000;
  border-left: 3px solid #000;
`;

const Line = styled.div`
  height: 2px;
  margin-bottom: 14px;
  background-color: #000;
`;

const Gclef = styled.img`
  position: absolute;
  top: -22px;
  left: 0;
  height: 117px;
`;

const WholeNote = styled.img`
  position: absolute;
  top: ${props => props.octave && `${noteSteps[props.octave]}px`};
  left: ${props =>
  props.index > 0
    ? `${(155 + (55 * props.index))}px`
    : '155px'};
  height: 16px;
`;

const noteSteps = {
  'B3': 79,
  'C4': 72,
  'D4': 65,
  'E4': 57,
  'F4': 49,
  'G4': 41,
  'A4': 33,
  'B4': 25,
  'C5': 17,
  'D5': 9,
  'E5': 1,
  'F5': -7,
  'G5': -15,
  'A5': -22
};

const sharpSteps = [
  -16,
  8,
  -24,
  0,
  24,
  -8,
  16
];

const flatSteps = [
  9,
  -16,
  16,
  -7,
  25,
  0,
  32
];

const Signature = styled.div`
  position: absolute;
  top: 0;
  left: 55px;
  width: 100px;
  height: 100%;
`;

const Sharp = styled.img`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => (13 * props.index)}px;
  height: 34px;
`;

const Flat = styled.img`
  position: absolute;
  top: ${props => props.position}px;
  left: ${props => (13 * props.index)}px;
  height: 34px;
`;

export default class MusicStaff extends React.Component {

  RenderSignature(sharpCount, flatCount) {
    if (sharpCount > 0) {
      let sharps = [];

      for (let i = 0; i < sharpCount; i++) {
        sharps.push(
          <Sharp src={sharpImg} position={sharpSteps[i]} index={i} />
        );
      }

      return sharps;
    }

    if (flatCount > 0) {
      let flats = [];

      for (let i = 0; i < flatCount; i++) {
        flats.push(
          <Flat src={flatImg} position={flatSteps[i]} index={i} />
        );
      }

      return flats;
    }

    return;
  }

  render() {
    const { octaves, sharps, flats } = this.props;
    return (
      <Wrapper>
        {octaves.map((octave, index) => {
          let img = wholeNote;
          switch (octave) {
            case 'B3':
              img = wholeNoteLedgerTop;
              break;
            case 'C4':
            case 'A5':
              img = wholeNoteLedgerMiddle;
              break;
          }
          return (
            <WholeNote src={img} octave={octave} index={index} />
          );
        })}
        <Gclef src={gClef} />
        <Signature>
          {this.RenderSignature(sharps, flats)}
        </Signature>
        <Staff>
          <ReverseFinalBarline />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <FinalBarline />
        </Staff>
      </Wrapper>
    );
  }
}
