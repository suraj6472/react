import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  // sometime a component could be doing some heavy work like sorting in this case
  // to avoid unnecessay re work we use useMemo hook to store the result in memory instead of always evaluating and getting same result
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); // this hook also has a second parameter to mention the dependency for this calculation so that action could be perform when it is actually needed
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
