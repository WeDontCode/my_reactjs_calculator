import { useState } from 'react';
import * as math from "mathjs";
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = () => {
    const input = text.join("");
    try {
      setResult(math.evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  };

  // const cancelLastInput = () => {
  //   setText((text) => text.slice(0, -1));
  // };

  const clearInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#ADF802";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="C" color="#fe8181" handleClick={clearInput} />
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
      </div>
    </div>
  );
}

export default App;
