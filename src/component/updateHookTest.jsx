import { useState } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';

const Counter = (props) => {
  useWhyDidYouUpdate('Counter', props);
  return <div>{props.count}</div>;
};

const UpdateHookTest = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Counter count={count} />
    </div>
  );
};

export default UpdateHookTest;
