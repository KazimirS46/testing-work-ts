import { useState } from 'react';

export const usePassControl = () => {
  const [passValue, setPassValue] = useState<string>('');

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value);
  };

  return { passValue, onChangePassword };
};
