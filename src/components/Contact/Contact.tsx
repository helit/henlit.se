import { Button, Textarea, TextInput } from "@mantine/core";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <form action="mailto:henrik.littke@gmail.com">
      <TextInput
        className={styles["input-margin"]}
        type="email"
        name="email"
        label="Your Email"
      />
      <TextInput
        className={styles["input-margin"]}
        type="text"
        name="subject"
        label="Subject"
      />
      <Textarea
        className={styles["input-margin"]}
        name="body"
        label="Message"
        placeholder="What's up?"
        autosize
        minRows={12}
        maxRows={12}
      />
      <div className={styles["button-wrapper"]}>
        <Button variant="outlined" type="submit" size="md">
          Send
        </Button>
      </div>
    </form>
  );
};
