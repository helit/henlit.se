import { FiChevronDown, FiChevronUp } from "react-icons/fi"

import * as Styled from "./NextSectionButton.styled"
import { ActionIcon } from "@mantine/core"

type NextSectionButtonProps = {
  scrollTo: () => void
  isScrollToTop?: boolean
}

export const NextSectionButton = ({
  scrollTo,
  isScrollToTop,
}: NextSectionButtonProps) => {
  return (
    <Styled.Wrapper>
      <ActionIcon
        onClick={scrollTo}
        variant="subtle"
        color="white"
        size="xl"
        radius="xl"
      >
        {isScrollToTop ? (
          <FiChevronUp size={32} />
        ) : (
          <FiChevronDown size={32} />
        )}
      </ActionIcon>
    </Styled.Wrapper>
  )
}
