import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { check } from '../../store/slice/userSlice';
import { useFieldType } from './hooks/useFieldType';
import { useLoginControl } from './hooks/useLoginControl';
import { usePassControl } from './hooks/usePassControl';
import styles from './index.module.css';
import showPassword from './assets/Show_password_button.svg';
import text from './text.json';

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const { message, result } = useAppSelector((state) => state.user);
  const { passType, setVisiblePassword } = useFieldType();
  const { loginValue, onChangeLogin } = useLoginControl();
  const { passValue, onChangePassword } = usePassControl();

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
        <p className={styles.textGreeting}>{text.textGreeting}</p>
        <form action='' className={styles.authorizationForm}>
          <div className={styles.loginField}>
            <label htmlFor='login'>{text.loginLabel}</label>
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
            <label htmlFor='password'>{text.passwordLabel}</label>
            <div className={styles.passwordContainer}>
              <input
                type={passType}
                onChange={onChangePassword}
                value={passValue}
                id='password'
                name='password'
              />
              <button
                type='button'
                onClick={() => setVisiblePassword((prev) => !prev)}>
                <img src={showPassword} alt='Показать пароль' />
              </button>
            </div>
          </div>
          <button type='button' className={styles.button} onClick={checkAuth}>
            <span>{text.buttonLabel}</span>
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
