import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Box, IconButton, useTheme } from "@mui/material";

type NextSectionButtonProps = {
  scrollTo: () => void;
  isScrollToTop?: boolean;
  iconColor?: "dark" | "light";
};

export const NextSectionButton = ({
  scrollTo,
  isScrollToTop,
  iconColor,
}: NextSectionButtonProps) => {
  const { palette } = useTheme();

  const color =
    iconColor === "light" ? palette.common.white : palette.common.black;
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <IconButton onClick={scrollTo} style={{ color: color }}>
        {isScrollToTop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </Box>
  );
};
