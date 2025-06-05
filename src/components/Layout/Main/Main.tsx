import { Cursor } from "@/components/Effects/Cursor";
import { AsciiArt } from "@/components/Three/AsciiArt";
import { theme } from "@/theme";
import styled from "@emotion/styled";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  border: thick double ${theme.border};
`;

export const Main = () => {
  return (
    <MainWrapper>
      <div style={{ padding: "0 16px" }}>
        <p>
          <span style={{ color: theme.primary, fontWeight: "bold" }}>
            Hello
          </span>
          , nice to meet you!
        </p>
      </div>
      <AsciiArt />
      <div style={{ padding: "0 16px" }}>
        <p style={{ maxWidth: "500px" }}>
          My name is{" "}
          <span style={{ color: theme.primary, fontWeight: "bold" }}>
            Henrik Littke
          </span>
          , I'm a fullstack web developer based in Gothenburg, Sweden. I'm
          specialized in node.js, react & typescript. I also like to code other
          things and tinker with computers. I sometimes make video games and 3d
          models.
        </p>
        <p style={{ maxWidth: "500px" }}>
          If you want to get in touch, send me an email at henrik(a)henlit.se
          <Cursor />
        </p>
      </div>
    </MainWrapper>
  );
};
