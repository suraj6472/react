import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

// to avoid unnecessary re-evaluation just because parent's re-evaluation
// we use React.memo. This avoid this component's re-evaluation as long as its props, state or context changes
export default React.memo(DemoOutput);
