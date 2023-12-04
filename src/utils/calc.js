import Mexp from "math-expression-evaluator";
export const calc = (input, inputs, setInput, result, setResult) => {
  const mexp = new Mexp();
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

    case "ROOT":
      break;
    case "%":
      break;
    case "/x":
      break;

    case "^":
      const lastI = parseInt(inputs[inputs.length - 1]);
      if (inputs.length > 0) {
        if (!isNaN(parseInt(lastI))) setInput((last) => `${last}^2`);
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
        //The input is a number
        if (!isNaN(parseInt(input))) {
          //Get the last state of the output and add the number
          setInput((last) => (last += input));

          // The input is not a number, is a math sign
        } else {
          // The last index of the output is a number
          if (!isNaN(lastIndex)) {
            setInput((last) => (last += input)); //Add the math sign
          }
        }
      } else {
        if (result !== "") {
          if (isNaN(parseInt(input))) setInput((result += input));
          else {
            setInput(input);
            setResult("");
          }
          return;
        }

        if (!isNaN(parseInt(input))) setInput(input);
      }
  }
};
