import styled from "styled-components";
import gClef from "../../assets/img/g-clef.png";
import wholeNote from "../../assets/img/whole-note.png";

const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Staff = styled.div`
  width: 600px;
`;

const Line = styled.div`
  height: 1px;
  margin-bottom: 14px;
  background-color: #000;
`;

const Gclef = styled.img`
  position: absolute;
  top: -25px;
  left: 0;
  height: 116px;
`;

const WholeNote = styled.img`
  position: absolute;
  top: ${props => props.octave && `${noteSteps[props.octave]}px`};
  left: ${props =>
  props.index > 0
    ? `${(155 + (55 * props.index))}px`
    : '155px'};
  height: 14px;
`;

const noteSteps = {
  'B3': 75,
  'C4': 68,
  'D4': 61,
  'E4': 54,
  'F4': 46,
  'G4': 39,
  'A4': 31,
  'B4': 24,
  'C5': 16,
  'D5': 9,
  'E5': 1,
  'F5': -6,
  'G5': -14,
  'A5': -21
};

export default class MusicStaff extends React.Component {
  render() {
    const { octaves } = this.props;
    return (
      <Wrapper>
        {octaves.map((octave, index) => {

          console.log(index, octave)
          return (
            <WholeNote src={wholeNote} octave={octave} index={index} />
          );
        })}
        <Gclef src={gClef} />
        <Staff>
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
        </Staff>
      </Wrapper>
    );
  }
}
