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
  height: 14px;
`;

const noteSteps = {
  'B3': 73,
  'C4': 66,
  'D4': 58,
  'E4': 50,
  'F4': 42,
  'G4': 34,
  'A4': 26,
  'B4': 18,
  'C5': 10,
  'D5': 2,
  'E5': -6,
  'F5': -14,
  'G5': -22,
  'A5': -30
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
