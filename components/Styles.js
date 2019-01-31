import styled from "styled-components";

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
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  padding: 20px;
  border-radius: 4px;
  box-shadow: ${Styles.boxShadow};
`;

export const SideMenu = styled.div`
  background-color: ${Colors.white};
  padding: 20px;
  width: 35%;
  margin-right: 40px;
  border-radius: 4px;
  box-shadow: ${Styles.boxShadow};
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
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: ${props => (props.label ? "10px" : "0px")};
    background-color: #fff;
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
