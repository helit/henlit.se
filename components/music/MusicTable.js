import { Table, Td, Th, ListItem } from "../Styles";
import MusicStaff from "../music/MusicStaff";
import CircleOfFifths from "../music/CircleOfFifths";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 40px;
`;

export default class MusicTable extends React.Component {
  render() {
    const { currentKey, keyData } = this.props;
    return (
      <div>
        <h3>{currentKey.meta.name + " " + currentKey.meta.quality}</h3>
        <Section>
          <h4>Relative Key</h4>
          <div>{currentKey.relativeKey}</div>
        </Section>
        {currentKey.enharmonic && (
          <Section>
            <h4>Enharmonic Key</h4>
            <div>{currentKey.enharmonic.name}</div>
          </Section>
        )}
        <Section>
          <h4>Notes</h4>
          <ul>
            {currentKey.notes.map((note, index) => (
              <ListItem key={index.toString()} direction={"row"}>
                {note}
              </ListItem>
            ))}
          </ul>
          <MusicStaff
            octaves={currentKey.octaves}
            sharps={currentKey.sharps}
            flats={currentKey.flats}
          />
        </Section>
        <Section>
          <h4>Chords</h4>
          <Table>
            <thead>
              <tr>
                <Th />
                {currentKey.chords.map((chord, index) => (
                  <Th key={index.toString()} quality={chord.quality}>
                    {chord.roman}
                  </Th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Chord</Td>
                {currentKey.chords.map((chord, index) => (
                  <Td key={index.toString()}>{chord.chord}</Td>
                ))}
              </tr>
              <tr>
                <Td>Triad</Td>
                {currentKey.chords.map((chord, index) => (
                  <Td key={index.toString()}>{chord.triad}</Td>
                ))}
              </tr>
              <tr>
                <Td>Seventh</Td>
                {currentKey.chords.map((chord, index) => (
                  <Td key={index.toString()}>{`${chord.triad}-${
                    chord.seventh
                  }`}</Td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <h4>Common Chord Progressions</h4>
          <ul>
            {currentKey.chordProgressions.map((chordProgression, index) => (
              <ListItem key={index.toString()}>{chordProgression}</ListItem>
            ))}
          </ul>
        </Section>
        <Section>
          <h4>Circle of Fifths</h4>
          <CircleOfFifths keys={keyData.circleOfFifths.keys} />
        </Section>
      </div>
    );
  }
}
