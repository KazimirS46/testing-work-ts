import React, { useState } from 'react';

export const useLoginControl = () => {
  const [loginValue, setLoginValue] = useState<string>('');

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value);
  };

  return { loginValue, onChangeLogin };
};
