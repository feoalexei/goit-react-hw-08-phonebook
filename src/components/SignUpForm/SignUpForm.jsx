import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from '../../redux/auth/auth-thunk';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      signUpThunk({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch(alert('such user already exists'));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
      </label>
      <label>
        Email
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
