import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  // component always re-evaluate when props, state and context changes
  // re-evaluation does not mean rerendering the component
  // react does whole communication between the component. it is react-dom's 
  // work to bring some change on the screen by comparing virtual dom with actual dom
  
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
