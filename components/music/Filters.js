import Select from "react-select";
import styled from "styled-components";
import { Checkbox } from "../Styles";

const Label = styled.h4`
  margin-top: 0;
  margin-bottom: 5px;
`;

const optionsMajor = [
  { value: "c", label: "C" },
  { value: "g", label: "G" },
  { value: "d", label: "D" },
  { value: "a", label: "A" },
  { value: "e", label: "E" },
  { value: "b", label: "B" },
  { value: "cb", label: "C♭" },
  { value: "f#", label: "F♯" },
  { value: "gb", label: "G♭" },
  { value: "c#", label: "C♯" },
  { value: "db", label: "D♭" },
  { value: "ab", label: "A♭" },
  { value: "eb", label: "E♭" },
  { value: "bb", label: "B♭" },
  { value: "f", label: "F" }
];

const optionsMinor = [
  { value: "am", label: "Am" },
  { value: "em", label: "Em" },
  { value: "bm", label: "Bm" },
  { value: "f#m", label: "F♯m" },
  { value: "c#m", label: "C♯m" },
  { value: "g#m", label: "G♯m" },
  { value: "abm", label: "A♭m" },
  { value: "d#m", label: "D♯m" },
  { value: "ebm", label: "E♭m" },
  { value: "a#m", label: "A♯m" },
  { value: "bbm", label: "B♭m" },
  { value: "fm", label: "Fm" },
  { value: "cm", label: "Cm" },
  { value: "gm", label: "Gm" },
  { value: "dm", label: "Dm" }
];

const FormSection = styled.div`
  margin-bottom: 20px;
`;

export default class Filters extends React.Component {
  state = {
    selectedOption: null,
    isMinor: false,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.selectedKey(selectedOption);
  };

  toggleCheckbox(e) {
    this.setState({ isMinor: e.target.checked });
    this.props.minor(e.target.checked);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <Label>Key</Label>
        <FormSection>
          {this.state.isMinor ? (
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={optionsMinor}
            />
          ) : (
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={optionsMajor}
            />
          )}
        </FormSection>
        <FormSection>
          <Checkbox
            id={"minor"}
            label={"Minor"}
            checked={this.state.isMinor}
            onChange={this.toggleCheckbox.bind(this)}
          />
        </FormSection>
      </div>
    );
  }
}
