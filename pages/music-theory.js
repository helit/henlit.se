import Layout from "../components/Layout";
import Filters from "../components/music/Filters";
import MusicTable from "../components/music/MusicTable";
import { Wrapper, Content, SideMenu } from "../components/Styles";
import keyData from "../data/keyData.json";

export default class MusicTheory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Music Theory',
      currentKey: keyData.keys.major.c,
      key: null,
      minor: false
    };

    this.msg = '';
  }

  handleSelection = (selection, isMinor) => {
    const key = selection.value;
    const currentKey = keyData.keys[isMinor ? 'minor' : 'major'][key];

    if (!currentKey) {
      this.msg = 'This key does not exist.';
    } else if (currentKey == []) {
      this.msg = 'Select a key';
    }

    this.setState({
      currentKey: currentKey,
      key: key
    });
  };

  handleCheckbox = minor => {
    this.setState({ minor: minor ? true : false });
  };

  render() {
    const { title, currentKey } = this.state;

    return (
      <Layout title={title}>
        <Wrapper>
          <SideMenu>
            <Filters
              selectedKey={this.handleSelection}
              minor={this.handleCheckbox}
            />
          </SideMenu>
          {currentKey && currentKey.length !== 0 ? (
            <Content>
              <MusicTable currentKey={currentKey} keyData={keyData} />
            </Content>
          ) : (
            <Content>
              <h3>{this.msg}</h3>
            </Content>
          )}
        </Wrapper>
      </Layout>
    );
  }
}
