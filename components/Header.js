import styled from "styled-components";
import { Colors } from "../components/Styles";

const Wrapper = styled.div`
  color: ${Colors.white};
  background-color: ${Colors.blue};
`;

const Content = styled.div`
  margin: auto;
  max-width: 1280px;
  font-size: 21px;
  padding: 20px;
`;

const Header = props => (
  <Wrapper>
    <Content>{props.title}</Content>
  </Wrapper>
);

export default Header;
