import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');
  // sometime using React.memo is not enough to avoid unnecessary re-evaluation of component
  // if a function is passed as props to tha component. this is because in js
  // functions are object which is a reference value which is not equal to itself
  // so each re-evaluation its value changes making the child component to re-evaluate
  // to avoid this issue, we use "useCallback". it saves the function in memory and avoid assign in new values on parent's re-evaluation
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []); // this second parameter is used to set the dependency parameter for this function so that it could update the function when dependency changes
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
