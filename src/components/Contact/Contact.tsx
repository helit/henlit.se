import { Button, Text, Textarea, TextInput } from "@mantine/core"
import * as Styled from "./Contact.styled"

export const Contact = () => {
  return (
    <>
      <Text variant="h2">Contact me</Text>
      <Styled.ContactForm action="mailto:henrik.littke@gmail.com">
        <TextInput type="email" name="email" label="Your Email" />
        <TextInput type="text" name="subject" label="Subject" />
        <Textarea name="body" label="Message" />
        <Button variant="outlined" type="submit">
          Send
        </Button>
      </Styled.ContactForm>
    </>
  )
}
