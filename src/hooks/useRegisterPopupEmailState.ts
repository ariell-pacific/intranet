import { useState, useEffect, ChangeEvent } from 'react';
import { validateEmail } from '../utils/helpers';

export default function useRegisterPopupEmailState() {
  const [helperText, setHelperText] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!validateEmail(email) && email) {
      setHelperText('*email format is incorrect');
    } else if (email === '') {
      setHelperText('*email is required');
    } else setHelperText('*email is correct');
  }, [email]);

  const isButtonDisabled = !email || helperText !== '*email is correct';

  const inputClass = !email
    ? ''
    : helperText !== '*email is correct' && helperText !== null
    ? 'error'
    : 'success';

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };

  return { email, handleEmailChange, isButtonDisabled, inputClass, helperText };
}
