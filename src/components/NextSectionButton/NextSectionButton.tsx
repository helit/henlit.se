import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "./NextSectionButton.module.css";
import { ActionIcon } from "@mantine/core";

type NextSectionButtonProps = {
  scrollTo: () => void;
  isScrollToTop?: boolean;
  iconColor?: "dark" | "light";
};

export const NextSectionButton = ({
  scrollTo,
  isScrollToTop,
  iconColor = "dark",
}: NextSectionButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <ActionIcon
        onClick={scrollTo}
        variant={"subtle"}
        color={iconColor === "dark" ? "black" : "white"}
        size="xl"
        radius="xl"
      >
        {isScrollToTop ? (
          <FiChevronUp size={32} />
        ) : (
          <FiChevronDown size={32} />
        )}
      </ActionIcon>
    </div>
  );
};
