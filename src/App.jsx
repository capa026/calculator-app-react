import { useState } from "react";
import { Box } from "@mui/material";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Calculator />
    </Box>
  );
}

export default App;
