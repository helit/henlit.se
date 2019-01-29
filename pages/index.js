import Layout from "../components/Layout";
import Gravatar from "react-gravatar";
import styled from "styled-components";
import { ListItem, Colors, Styles } from "../components/Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
`;

const Contact = styled.div`
  color: ${Colors.darkGrey};
  width: 300px;
  margin: auto;
  padding: 20px;
`;

const Divider = styled.div`
  width: 35px;
  height: 4px;
  background-color: ${Colors.darkGrey};
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const avatarStyle = {
  borderRadius: '50%',
  boxShadow: Styles.boxShadow,
};


export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'henlit.se',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <Layout title={title}>
        <Wrapper>
          <Gravatar email="henrik.littke@gmail.com"
            size={350}
            style={avatarStyle}/>
          <Contact>
            <h4>henlit.se</h4>
            <Divider />
            <ul>
              <ListItem>
                <IconWrapper>
                  <FontAwesomeIcon icon="user"/>
                </IconWrapper>
                Henrik Littke</ListItem>
              <ListItem>
                <IconWrapper>
                  <FontAwesomeIcon icon="briefcase"/>
                </IconWrapper>
                Programmer / Musician</ListItem>
              <ListItem>
                <IconWrapper>
                  <FontAwesomeIcon icon="envelope"/>
                </IconWrapper>
                henrik.littke@gmail.com</ListItem>
            </ul>
          </Contact>
        </Wrapper>
      </Layout>
    );
  }
}