import styled from "styled-components";
import { Colors } from "../Styles";

const Wrapper = styled.div`
  padding: 30px;
`;

const Circle = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin: auto;
  border-radius: 50%;
  border: 2px solid ${Colors.darkGrey};
`;

const MajorKey = styled.h2`
  position: absolute;
  text-align: center;
  line-height: 28px;
  margin: 0;
  color: ${Colors.darkGrey};
  width: 64px;
  height: 28px;
  top: ${props => props.pos.keyPosY};
  left: ${props => props.pos.keyPosX};
`;

const MinorKey = styled.h3`
  position: absolute;
  color: ${Colors.blue};
  text-align: center;
  line-height: 28px;
  margin: 0;
  width: 64px;
  height: 28px;
  top: ${props => props.pos.relativeKeyPosY};
  left: ${props => props.pos.relativeKeyPosX};
`;

export default class CircleOfFifths extends React.Component {

  RenderMajorKeys(keys) {
    let data = [];

    for (let i = 0; i < keys.length; i++) {
      data.push(
        <MajorKey key={i} pos={keys[i].pos}>
          {keys[i].name}
        </MajorKey>
      );
    }

    return data;
  }

  RenderMinorKeys(keys) {
    let data = [];

    for (let i = 0; i < keys.length; i++) {
      data.push(
        <MinorKey key={i} pos={keys[i].pos}>
          {keys[i].relativeKeyName}
        </MinorKey>
      );
    }

    return data;
  }

  render() {
    const { keys } = this.props;
    return (
      <Wrapper>
        <Circle>
          {this.RenderMajorKeys(keys)}
          {this.RenderMinorKeys(keys)}
        </Circle>
      </Wrapper>
    );
  };
}