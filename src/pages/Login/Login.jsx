import { SignInForm } from 'components/SignInForm/SignInForm';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/auth/auth-selector';
import Loader from 'components/Loader';

const Login = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <Box position="relative">
      {isLoading && <Loader />}
      <SignInForm />
    </Box>
  );
};
export default Login;
