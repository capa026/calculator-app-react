import { Box, Stack, styled } from "@mui/material";

import { calc } from "../utils/calc";

const Row = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  textAlign: "center",

  height: "20%",
  "& > *": {
    display: "flex",
    width: "33%",
    userSelect: "none",
    cursor: "pointer",
    borderRight: "1px solid #303030",
    justifyContent: "center",
    alignItems: "center",
  },
  "& > *:hover": {
    boxShadow: "inset 0 0 15px 2px #202020",
    backgroundColor: "#303030",
  },
  "& > *:active": {
    backgroundColor: "black",
    boxShadow: "none",
  },
}));
const Row2 = styled(Row)(({ theme }) => ({
  flexDirection: "column",
  position: "relative",
  height: "100%",
  width: "25%",
  "& > *": {
    width: "100%",
    height: "20%",
    borderRight: "none",
  },
  "& > *:not(:last-child)": {
    borderBottom: "1px solid #303030",
  },
}));

const Keys = ({ inputs, setInput, result, setResult }) => {
  const handleInput = (input) => {
    calc(input, inputs, setInput, result, setResult);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
      <Stack
        width="75%"
        sx={{
          position: "relative",
          height: "100%",
          "& > *:not(:last-child)": {
            borderBottom: "1px solid #303030",
          },
        }}
      >
        <Row>
          <Box onClick={() => handleInput("%")}>%</Box>
          <Box onClick={() => handleInput("ROOT")}>√</Box>
          <Box onClick={() => handleInput("^")}>x²</Box>
        </Row>
        <Row>
          <Box onClick={() => handleInput("CE")}>CE</Box>
          <Box onClick={() => handleInput("C")}>C</Box>
          <Box onClick={() => handleInput("BACK")}>⌫</Box>
        </Row>
        <Row>
          <Box onClick={() => handleInput("7")}>7</Box>
          <Box onClick={() => handleInput("8")}>8</Box>
          <Box onClick={() => handleInput("9")}>9</Box>
        </Row>
        <Row>
          <Box onClick={() => handleInput("4")}>4</Box>
          <Box onClick={() => handleInput("5")}>5</Box>
          <Box onClick={() => handleInput("6")}>6</Box>
        </Row>
        <Row>
          <Box onClick={() => handleInput("1")}>1</Box>
          <Box onClick={() => handleInput("2")}>2</Box>
          <Box onClick={() => handleInput("3")}>3</Box>
        </Row>
        <Row>
          <Box onClick={() => handleInput("")}>±</Box>
          <Box onClick={() => handleInput("0")}>0</Box>
          <Box onClick={() => handleInput(".")}>.</Box>
        </Row>
      </Stack>
      <Row2>
        <Box onClick={() => handleInput("/x")}>⅟x</Box>
        <Box onClick={() => handleInput("/")}>÷</Box>
        <Box onClick={() => handleInput("*")}>x</Box>
        <Box onClick={() => handleInput("-")}>-</Box>
        <Box onClick={() => handleInput("+")}>+</Box>
        <Box onClick={() => handleInput("EQUAL")}>=</Box>
      </Row2>
    </Stack>
  );
};
export default Keys;
