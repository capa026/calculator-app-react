import { Box, Stack, styled } from "@mui/material";
import Mexp from "math-expression-evaluator";

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
  const mexp = new Mexp();
  const handleInput = (input) => {
    let inputQuery = "";

    switch (input) {
      case "CE":
        setInput("");
        break;
      case "C":
        setInput("");
        setResult("");
        break;
      case "BACK":
        const toDelete = inputs.substr(0, inputs.length - 1);
        setInput(toDelete);
        break;

      case "^":
        const lastI = parseInt(inputs[inputs.length - 1]);
        if (inputs.length > 0) {
          if (!isNaN(parseInt(lastI)))
            setInput((last) => (last += lastI * lastI));
        }
        break;

      case "EQUAL":
        let value = "";
        if (inputs.length > 0) value = mexp.eval(inputs);
        else return;
        setResult(value);
        setInput("");
        break;

      default:
        const lastIndex = parseInt(inputs[inputs.length - 1]);
        if (inputs.length > 0) {
          if (!isNaN(parseInt(input))) {
            //The input is a number

            //Get the last state of the output and add the number
            setInput((last) => (last += input));

            // The input is not a number, is a math sign
          } else {
            if (result == "") {
              // The last index of the output is a number
              if (!isNaN(lastIndex)) {
                //If ther are less than 3 indexes then add the next input wich is a math sign
                setInput((last) => (last += input));
                //There are more than 3 indexes and the last index is a number
              }
            } else {
              setInput(result + input);
              setResult("");
            }
          }
        } else {
          if (!isNaN(parseInt(input))) setInput(input);
        }
    }
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
        <Box onClick={() => handleInput("")}>⅟x</Box>
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
