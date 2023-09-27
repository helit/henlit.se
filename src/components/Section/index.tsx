import { Typography } from "@mui/material";
import {
  IconWrapper,
  SectionContentWrapper,
  SectionLine,
  SectionType,
  SectionWrapper,
} from "./style";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  direction?: "row" | "column";
};

export const Section = ({ children, title, icon }: SectionProps) => {
  return (
    <SectionWrapper>
      <SectionType>
        <SectionLine />
        <IconWrapper>{icon}</IconWrapper>
      </SectionType>
      <SectionContentWrapper>
        <Typography variant={"h5"} mb={2}>
          {title}
        </Typography>
        <div>{children}</div>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};
