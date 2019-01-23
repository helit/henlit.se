import Header from "../components/Header";
import styled from "styled-components";

const Main = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 20px;
`;

export default props => (
  <div>
    <Header title={"Header"} />
    <Main>{props.children}</Main>
  </div>
);
