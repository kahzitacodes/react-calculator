import { Container, Content, GridContent, GridNumbers, GridSigns1, GridSigns2 } from "./components/style";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(currentNumber);

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sumResult = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sumResult));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handlePercentageNumbers = () => {
    const result = Number(currentNumber) * 0.01;
    setCurrentNumber(String(result));
    setOperation('');
  };

  const handleResult = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <GridContent>
            <GridNumbers>
              <Button label="7" onClick={() => handleAddNumber('7')} />
              <Button label="8" onClick={() => handleAddNumber('8')} />
              <Button label="9" onClick={() => handleAddNumber('9')} />

              <Button label="4" onClick={() => handleAddNumber('4')} />
              <Button label="5" onClick={() => handleAddNumber('5')} />
              <Button label="6" onClick={() => handleAddNumber('6')} />

              <Button label="1" onClick={() => handleAddNumber('1')} />
              <Button label="2" onClick={() => handleAddNumber('2')} />
              <Button label="3" onClick={() => handleAddNumber('3')} />

              <Button label="0" onClick={() => handleAddNumber('0')} />
              <Button label="." onClick={() => handleAddNumber('.')} />
              <Button label="C" onClick={handleClear} />
            </GridNumbers>

            <GridSigns1>
              <Button label="÷" onClick={handleDivideNumbers} />
              <Button label="%" onClick={handlePercentageNumbers} />

              <Button label="x" onClick={handleMultiplyNumbers} />
              <Button label="-" onClick={handleMinusNumbers} />

            </GridSigns1>

            <GridSigns2>
              <Button label="+" onClick={handleSumNumbers} />
              <Button label="=" onClick={handleResult} />
            </GridSigns2>
          </GridContent>
        </Content>
      </Container>
    </div>
  );
};

export default App;
