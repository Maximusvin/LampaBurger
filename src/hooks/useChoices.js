import { useState } from 'react';

export const useChoices = () => {
  const [choice, setChoice] = useState('');

  const checkChoices = e => setChoice(e.target.value);

  return { choice, checkChoices };
};
