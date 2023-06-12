import { useState } from 'react';

export const useFieldType = () => {
  const [visiblePassword, setVisiblePassword] = useState<Boolean>(false);
  const passType = visiblePassword ? 'text' : 'password';
  return { setVisiblePassword, passType };
};
