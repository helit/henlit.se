import Layout from "../components/Layout";
import Filters from "../components/music/Filters";
import MusicTable from "../components/music/MusicTable";
import { Wrapper, Content, SideMenu } from "../components/Styles";
import keyData from "../data/keyData.json";

export default class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentKey: [],
      key: null,
      minor: false
    };

    this.msg = 'Select a key';
  }

  handleSelection = selection => {
    const isMinor = this.state.minor;
    const key = selection.value;
    const currentKey = keyData.keys[isMinor ? 'minor' : 'major'][key];

    if (!currentKey) {
      this.msg = 'No data found';
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
    const { currentKey } = this.state;

    return (
      <Layout>
        <Wrapper>
          <SideMenu>
            <Filters
              selectedKey={this.handleSelection}
              minor={this.handleCheckbox}
            />
          </SideMenu>
          {currentKey && currentKey.length !== 0 ? (
            <Content>
              <MusicTable currentKey={currentKey} />
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
