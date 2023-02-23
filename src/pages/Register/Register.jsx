import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/auth/auth-selector';
import Loader from 'components/Loader';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

const Register = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <Box position="relative">
      {isLoading && <Loader />}
      <SignUpForm />
    </Box>
  );
};
export default Register;
