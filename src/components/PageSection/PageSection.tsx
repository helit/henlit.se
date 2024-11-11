import { ReactNode, forwardRef } from "react";

import styles from "./PageSection.module.css";
import { useMantineTheme } from "@mantine/core";

export type PageSectionProps = {
  backgroundColor?: string;
  textColor?: "dark" | "light";
  centerX?: boolean;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  children: ReactNode;
};

export const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  (
    {
      backgroundColor,
      textColor = "dark",
      centerX = false,
      headerContent,
      footerContent,
      children,
    },
    ref
  ) => {
    const theme = useMantineTheme();
    return (
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: backgroundColor ?? theme.white,
          color: textColor === "dark" ? theme.black : theme.white,
          alignItems: centerX ? "center" : "flex-start",
        }}
        ref={ref}
      >
        <div className={styles.header}>{headerContent}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>{footerContent}</div>
      </div>
    );
  }
);

PageSection.displayName = "PageSection";
