import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'redux/auth/auth-thunk';
import { Box } from 'components/Box';

import { StyledSignInForm, SignInBtn, Image } from './SignInForm.styled';
import catSignIn from '../../images/catSignIn.png';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(signInThunk({ email, password }));
  };

  return (
    <Box display="flex" flexDirection="column">
      <StyledSignInForm onSubmit={handleSubmit}>
        <label>
          Email
          <input
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </label>
        <SignInBtn type="submit">Sign In</SignInBtn>
      </StyledSignInForm>
      <Image src={catSignIn} alt="" />
    </Box>
  );
};
