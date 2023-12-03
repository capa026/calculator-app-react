import { Box, Stack } from "@mui/material";

const OutputScreen = ({ inputs, result }) => {
  return (
    <Stack
      p={3}
      bgcolor="black"
      borderBottom="1px solid #303030"
      height="20vh"
      direction="column"
      justifyContent="space-between"
    >
      {inputs.length > 0 ? (
        <Box fontWeight="200" letterSpacing="1px">
          {inputs}
        </Box>
      ) : (
        <Box fontWeight="200">0</Box>
      )}
      {result != "" ? (
        <Box marginLeft="auto" fontSize="1.3rem">
          {result}
        </Box>
      ) : (
        <Box marginLeft="auto" fontSize="1.3rem">
          0
        </Box>
      )}
    </Stack>
  );
};
export default OutputScreen;
