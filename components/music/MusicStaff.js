import styled from "styled-components";
import { Colors } from "../Styles";
import {
  SharpSteps,
  FlatSteps,
  Staff,
  FinalBarline,
  Line,
  GClef,
  Signature,
  QuarterNote,
  NoteWrapper,
  LedgerLine,
  Sharp,
  Flat
} from "../music/MusicSymbols";

const Wrapper = styled.div`
  color: ${Colors.darkGrey};
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;

  @media only screen and (max-width: 1072px) {
    /* zoom: 0.753; */
  }
`;

const StaffOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default class MusicStaff extends React.Component {
  RenderStaffLines(count) {
    let lines = [];

    for (let i = 0; i < count; i++) {
      lines.push(<Line key={i} />);
    }

    return lines;
  }

  RenderNotes(octaves, sharps, flats) {
    let notes = [];
    let margin = 65;

    if (sharps > 0) {
      margin += sharps * 15;
    }

    if (flats > 0) {
      margin += flats * 15;
    }

    for (let i = 0; i < octaves.length; i++) {
      let flipped = false;
      let hasLedger = false;
      let ledgerPos = 0;

      // Check if note should have ledger.
      switch (octaves[i]) {
        case "B3":
        case "C4":
        case "A5":
          hasLedger = true;
          break;
      }

      // Check position of ledger.
      switch (octaves[i]) {
        case "B3":
          ledgerPos = 50;
          break;
        case "A5":
          ledgerPos = 20;
          break;
        case "C4":
          ledgerPos = 58;
          break;
      }

      // Check if note should be flipped.
      switch (octaves[i]) {
        case "B4":
        case "C5":
        case "D5":
        case "E5":
        case "F5":
        case "G5":
        case "A5":
          flipped = true;
          break;
      }

      notes.push(
        <NoteWrapper key={i} octave={octaves[i]} index={i} margin={margin}>
          {hasLedger && <LedgerLine position={ledgerPos} />}
          <QuarterNote flipped={flipped} />
        </NoteWrapper>
      );
    }

    return notes;
  }

  StaffWidth(sharps, flats) {
    let staffWidth = 390;

    if (sharps > 0) {
      staffWidth += sharps * 15;
    }

    if (flats > 0) {
      staffWidth += flats * 15;
    }

    return staffWidth;
  }

  render() {
    const { octaves, sharps, flats } = this.props;
    return (
      <Wrapper>
        <Staff width={this.StaffWidth(sharps, flats)}>
          {this.RenderStaffLines(5)}
          <FinalBarline />
          <GClef />
        </Staff>
        <StaffOverlay>
          <Signature sharps={sharps} flats={flats} />
          {this.RenderNotes(octaves, sharps, flats)}
        </StaffOverlay>
      </Wrapper>
    );
  }
}
