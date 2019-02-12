import Select from "react-select";
import styled from "styled-components";
import { Checkbox, Button } from "../Styles";

const Label = styled.h4`
  margin-top: 0;
  margin-bottom: 5px;
`;

const optionsMajor = [
  { value: "c", label: "C Major" },
  { value: "g", label: "G Major" },
  { value: "d", label: "D Major" },
  { value: "a", label: "A Major" },
  { value: "e", label: "E Major" },
  { value: "b", label: "B Major" },
  { value: "cb", label: "C♭ Major" },
  { value: "f#", label: "F♯ Major" },
  { value: "gb", label: "G♭ Major" },
  { value: "c#", label: "C♯ Major" },
  { value: "db", label: "D♭ Major" },
  { value: "ab", label: "A♭ Major" },
  { value: "eb", label: "E♭ Major" },
  { value: "bb", label: "B♭ Major" },
  { value: "f", label: "F Major" }
];

const optionsMinor = [
  { value: "a", label: "A Minor" },
  { value: "e", label: "E Minor" },
  { value: "b", label: "B Minor" },
  { value: "f#", label: "F♯ Minor" },
  { value: "c#", label: "C♯ Minor" },
  { value: "g#", label: "G♯ Minor" },
  { value: "ab", label: "A♭ Minor" },
  { value: "d#", label: "D♯ Minor" },
  { value: "eb", label: "E♭ Minor" },
  { value: "a#", label: "A♯ Minor" },
  { value: "bb", label: "B♭ Minor" },
  { value: "f", label: "F Minor" },
  { value: "c", label: "C Minor" },
  { value: "g", label: "G Minor" },
  { value: "d", label: "D Minor" }
];

const FormSection = styled.div`
  margin-bottom: 20px;
`;

export default class Filters extends React.Component {
  state = {
    selectedOption: optionsMajor[0],
    isMinor: false
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.selectedKey(selectedOption, this.state.isMinor);
  };

  toggleCheckbox(e) {
    this.setState({ isMinor: e.target.checked });
    this.props.minor(e.target.checked);
    this.props.selectedKey(this.state.selectedOption, e.target.checked);
  }

  render() {
    const { selectedOption, isMinor } = this.state;

    return (
      <div>
        <Label>Key</Label>
        <FormSection>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={isMinor ? optionsMinor : optionsMajor}
            isSearchable={false}
          />
        </FormSection>
        <FormSection>
          <Checkbox
            id={"minor"}
            label={"Minor"}
            checked={isMinor}
            onChange={this.toggleCheckbox.bind(this)}
          />
        </FormSection>
        <FormSection>
          <Button text={'On Guitar'} />
          <Button text={'On Piano'} />
        </FormSection>
      </div>
    );
  }
}
