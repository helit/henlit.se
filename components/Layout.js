import Header from "../components/Header";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBriefcase,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faBriefcase, faEnvelope);

const Layout = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 20px;

  @media only screen and (max-width: 1072px) {
    padding: 10px;
  }
`;

export default props => (
  <div>
    <Header title={props.title} />
    <Layout>{props.children}</Layout>
  </div>
);
