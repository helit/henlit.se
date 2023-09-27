import { Button, TextField } from "@mui/material";
import { ContactFormWrapper } from "./style";

export const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <TextField label={"Your Email"} required />
      <TextField label={"Subject"} required />
      <TextField label={"Message"} multiline rows={8} required />
      <Button variant={"contained"}>Send</Button>
    </ContactFormWrapper>
  );
};
