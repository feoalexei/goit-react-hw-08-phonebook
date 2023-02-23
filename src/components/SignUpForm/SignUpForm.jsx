import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from '../../redux/auth/auth-thunk';
import { Box } from 'components/Box';
import catSignUp from '../../images/catSignUp.png';

import { StyledSignUpForm, SignUpBtn, Image } from './SignUpForm.styled';

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
      .catch(console.log);
  };

  return (
    <Box display="flex" flexDirection="column">
      <StyledSignUpForm onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={handleChange} type="text" name="name" />
        </label>
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
        <SignUpBtn type="submit">Sign Up</SignUpBtn>
      </StyledSignUpForm>
      <Image src={catSignUp} alt="" />
    </Box>
  );
};
