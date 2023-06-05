import { FC, useState } from 'react';
import styles from './index.module.css';
import showPassword from './assets/Show_password_button.svg';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { check } from '../../store/slice/userSlice';

export const LoginPage: FC = () => {
  const TEXT = {
    textGreeting: 'Welcome To CRM System Sign In To Your Account',
    loginLabel: 'Login',
    passwordLabel: 'Password',
    buttonLabel: 'SIGN IN',
  };
  const dispatch = useAppDispatch();
  const { message, result } = useAppSelector((state) => state.user);

  // Настройки поля пароля

  const [visiblePassword, setVisiblePassword] = useState<Boolean>(false);
  const passType = visiblePassword ? 'text' : 'password';

  // Авторизация

  const [loginValue, setLoginValue] = useState<string>('');
  const [passValue, setPassValue] = useState<string>('');

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(event.target.value);
  };

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(event.target.value);
  };

  const checkAuth = () => {
    dispatch(
      check({
        login: loginValue,
        password: passValue,
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainLogo}>LOGO</h2>
        <p className={styles.textGreeting}>{TEXT.textGreeting}</p>
        <form action='' className={styles.authorizationForm}>
          <div className={styles.loginField}>
            <label htmlFor='login'>{TEXT.loginLabel}</label>
            <input
              value={loginValue}
              onChange={onChangeLogin}
              type='email'
              id='login'
              name='email'
              placeholder='user@mail.ru'
            />
          </div>
          <div className={styles.passwordField}>
            <label htmlFor='password'>{TEXT.passwordLabel}</label>
            <div className={styles.passwordContainer}>
              <input
                type={passType}
                onChange={onChangePassword}
                value={passValue}
                id='password'
                name='password'
              />
              <button type='button' onClick={() => setVisiblePassword((prev) => !prev)}>
                <img src={showPassword} alt='Показать пароль' />
              </button>
            </div>
          </div>
          <button type='button' className={styles.button} onClick={checkAuth}>
            <span>{TEXT.buttonLabel}</span>
          </button>
          {!result && (
            <div className={styles.warningWrapper}>
              <p className={styles.warningMessage}>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
