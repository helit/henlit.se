import styled from "styled-components";
import { lighten, darken } from 'polished';

/* Colors */
export const Colors = {
  white: "#fff",
  black: "#000",
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  blue: "#2196f3",
  green: "#4caf50",
  yellow: "#ffeb3b",
  orange: "#ff9800",
  brown: "#795548",
  grey: "#9e9e9e",
  blueGrey: "#607d8b",
  lightGrey: "#ccc",
  lighterGrey: "#f8f9fa",
  darkGrey: "#444"
};

export const Styles = {
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2),\
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
};

/* Layout */
export const Wrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 1072px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 3;
  background-color: ${Colors.white};
  padding: 20px;
  border-radius: 4px;
  box-shadow: ${Styles.boxShadow};

  @media only screen and (max-width: 1072px) {
    flex: 1;
    padding: 10px;
  }
`;

export const SideMenu = styled.div`
  flex: 1;
  background-color: ${Colors.white};
  padding: 20px;
  margin-right: 40px;
  border-radius: 4px;
  box-shadow: ${Styles.boxShadow};

  @media only screen and (max-width: 1072px) {
    flex: 1;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

/* Elements */
export const ListItem = styled.li`
  display: ${props =>
    (props.direction === "row" && "inline-block") ||
    !props.direction ||
    (props.direction === "column" && "block")};
  ${props =>
    props.direction === "row" ? "margin-right: 30px;" : "margin-bottom: 10px;"}
  ${props => props.center && "text-align: center;"}
`;

export const Table = styled.table`
  width: 100%;
`;

export const Td = styled.td`
  text-align: center;
  padding: 10px;
`;

export const Th = styled.th`
  ${props => props.quality && `color: ${Colors.white};`}
  ${props =>
    (props.quality === "Major" && `background-color: ${Colors.green};`) ||
    (props.quality === "Minor" && `background-color: ${Colors.blue};`) ||
    (props.quality === "Diminished" && `background-color: ${Colors.orange};`)}
`;

/* Forms */
const CheckboxLabel = styled.label`
  align-items: center;
  user-select: none;
  display: inline-block;
  display: flex;

  &::before {
    font-family: FontAwesome;
    color: ${props => (props.disabled ? Colors.grey : Colors.blue)};
    content: ${props => (props.checked ? "'\f00c'" : "''")};
    display: inline-block;
    height: 16px;
    width: 16px;
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;
    margin-right: ${props => (props.label ? "10px" : "0px")};
    background-color: ${Colors.white};
    margin-top: -1px;
    ${props =>
      props.disabled ? "background-color: #ecf0f1" : "cursor: pointer"};
  }
`;

export class Checkbox extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <input
          style={{ display: "none" }}
          onChange={e => {
            this.props.onChange(e);
          }}
          id={this.props.id}
          type="checkbox"
          disabled={this.props.disabled}
          defaultChecked={this.props.checked}
        />
        <CheckboxLabel
          type="checkbox"
          title={this.props.disabled ? "Disabled" : ""}
          htmlFor={this.props.id}
          checked={this.props.checked}
          disabled={this.props.disabled}
          label={this.props.label}
        >
          {this.props.label}
        </CheckboxLabel>
      </div>
    );
  }
}

const StyledButton = styled.button`
  display: inline-block;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
  border: 1px solid transparent;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hover};
  }

  &:active {
    background-color: ${props => props.theme.active};
  }
`;

StyledButton.defaultProps = {
  theme: {
    text: Colors.darkGrey,
    bg: Colors.lighterGrey,
    hover: darken(0.05, Colors.lighterGrey),
    active: darken(0.1, Colors.lighterGrey)
  }
}

const ButtonThemes = {
  blue: {
    text: Colors.white,
    bg: Colors.blue,
    hover: darken(0.05, Colors.blue),
    active: darken(0.1, Colors.blue)
  },
  green: {
    text: Colors.white,
    bg: Colors.green,
    hover: darken(0.05, Colors.green),
    active: darken(0.1, Colors.green)
  },
  orange: {
    text: Colors.white,
    bg: Colors.orange,
    hover: darken(0.05, Colors.orange),
    active: darken(0.1, Colors.orange)
  },
  red: {
    text: Colors.white,
    bg: Colors.red,
    hover: darken(0.05, Colors.red),
    active: darken(0.1, Colors.red)
  },
}

export class Button extends React.Component {
  RenderButton() {
    if (this.props.theme) {
      let theme = ButtonThemes[this.props.theme];

      return (
        <StyledButton theme={theme}>
          {this.props.text}
        </StyledButton>
      );
    } else {
      return (
        <StyledButton>
          {this.props.text}
        </StyledButton>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.RenderButton()}
      </React.Fragment>
    );
  }
}