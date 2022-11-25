import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  //validaciu som si len tak sam pridal...
  //reku vyskusam ci som si nieco zapamatal
  const onChangeEmailHandler = (event) => {
    console.log('onChangeEmailHandler fired!');
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    console.log('onChangePasswordHandler fired!');
    setPassword(event.target.value);
  };

  //ale moc som si nezapamatal, lebo takto to nebolo
  //toto je skor taka nudzovka
  const emailValidator = () => {
    if (emailInputRef.current.value.includes('@')) {
      setIsEmailValid(true);
      return true;
    } else {
      setIsEmailValid(false);
      return false;
    }
  };

  const passwordValidator = () => {
    if (passwordInputRef.current.value.trim().length > 0) {
      setIsPasswordValid(true);
      return true;
    } else {
      setIsPasswordValid(false);
      return false;
    }
  };

  const loginHandler = (event) => {
    event.preventDefault();

    //ide o to, ze ten state sa sice nastavi spravne,
    //ale tym ze je to async, tak sa hned neprejavi
    //preto som pouzil return...ako nudzovku
    //treba to urbit nejako inac...ale necham to zatial takto...pre vystrahu :)
    //ono to aj nejako cudne zbehne, lebo prekmitne obrazovka
    const emailIsValid = emailValidator();
    const pwdIsValid = passwordValidator();
    if (!emailIsValid || !pwdIsValid) {
      return;
    }
    console.log(`${email} ${password}`);
    //dispatch login!
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section onSubmit={loginHandler}>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onChange={onChangeEmailHandler}
              ref={emailInputRef}
            />
            {!isEmailValid && (
              <p style={{ color: 'red' }}>Please enter valid email</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={onChangePasswordHandler}
              ref={passwordInputRef}
            />
            {!isPasswordValid && (
              <p style={{ color: 'red' }}>Please enter valid password</p>
            )}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
