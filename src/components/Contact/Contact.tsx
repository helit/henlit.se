import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const Contact = () => {
  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form style={{ width: "100%" }} action="mailto:henrik.littke@gmail.com">
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <TextField
            type="email"
            name="email"
            label="Your Email"
            variant="filled"
          />
          <TextField
            type="text"
            name="subject"
            label="Subject"
            variant="filled"
          />
          <TextField
            name="body"
            label="Message"
            placeholder="What's up?"
            variant="filled"
            multiline
            minRows={10}
            maxRows={10}
          />
          <Box display={"flex"} justifyContent={"flex-end"}>
            <LoadingButton variant="text" type="submit" size="large">
              Send Message
            </LoadingButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
