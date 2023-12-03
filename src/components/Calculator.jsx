import { Box, Stack, Grid, styled } from "@mui/material";
import OutputScreen from "./OutputScreen";
import Keys from "./Keys";
import { useState } from "react";

const Calculator = () => {
  const [inputs, setInput] = useState("");
  const [result, setResult] = useState("");
  return (
    <Stack
      width={{ xs: "100%", sm: "40%" }}
      direction="column"
      border="2px solid #303030"
      boxShadow="0 0 15px 1px black"
    >
      <OutputScreen inputs={inputs} result={result} />
      <Keys
        setInput={setInput}
        inputs={inputs}
        setResult={setResult}
        result={result}
      />
    </Stack>
  );
};
export default Calculator;
