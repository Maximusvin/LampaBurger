import { useState } from 'react';

export const useCount = num => {
  const [count, setCount] = useState(num);
  const onChange = e => setCount(Number(e.target.value));
  return { count, setCount, onChange };
};
