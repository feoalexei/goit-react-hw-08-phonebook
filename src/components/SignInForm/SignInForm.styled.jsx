import styled from 'styled-components';

const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  margin-bottom: ${p => p.theme.space[5]}px;

  & label {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & input {
    padding: ${p => p.theme.space[3]}px;
    border: 1px solid grey;
    border-radius: ${p => p.theme.radii.small};
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

const SignInBtn = styled.button`
  background-color: #087582;
  color: #fff;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
  margin-top: ${p => p.theme.space[4]}px;

  &:hover {
    background-color: #045a63;
  }
`;

const Image = styled.img`
  width: 50%;
  margin: 0 auto;
`;

export { StyledSignInForm, SignInBtn, Image };
