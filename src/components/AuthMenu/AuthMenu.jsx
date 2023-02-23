import { AuthLink } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Sign In</AuthLink>
    </div>
  );
};
