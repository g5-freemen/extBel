import React, {useState} from 'react';

export default function Login(props) {
  const [errors, setErrors] = useState({});
  const {setShowLogin} = props;
  const {user, setUser} = props.userData;

  function handleSubmit(ev) {
    ev.preventDefault();
    const data = new FormData(ev.target);
    const login = data.get('login');

    if (!errors.login && !errors.pass) {
      setUser({...user, name: login});
      setShowLogin(prev => !prev);
    }
  }

  function handleInput(ev) {
    const field = ev.target.name;
    const value = ev.target.value;

    setUser({...user, [field]: value});

    validateField(field, value);
  }

  function validateField(field, value) {
    if ((field === 'login' && (value.length < 3 || value.length > 15)) ||
     (field === 'pass' && (value.length < 6 || value.length > 20))) {
        setErrors({...errors, [field]: true });
    } else {
      setErrors({...errors, [field]: false });
    }
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <button className="form-close" onClick={() => setShowLogin(prev => !prev)}>
          ✖
        </button>
        <p className="form-title">Log in</p>
        <p className='form-name'>
          Name*
          <input type="text" name="login" required onChange={handleInput} />
          <span className="form-name__invalid" style={{display: errors.login ? 'flex' : 'none'}}>
            Username must be 3 to 15 characters long
          </span>
        </p>
        <p className='form-password'>
          Password*
          <input type="password" name="pass" required onChange={handleInput} />
          <span className="form-password__invalid" style={{display: errors.pass ? 'flex' : 'none'}}>
            Password must be 6 to 20 characters long
          </span>
          <a href="#forgotPass">I forgot the password</a>
        </p>
        <div className="form-btns">
          <input type="submit" value="Log in" />
          <input type="button" value="Sign in" onClick={() => alert('Sign in')} />
        </div>
      </form>
    </div>
  )
}
