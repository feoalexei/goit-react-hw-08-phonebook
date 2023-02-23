import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { selectLoading } from 'redux/auth/auth-selector';
import catHome from '../../images/catHome.png';
import Loader from 'components/Loader';

const Home = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      position="relative"
    >
      {isLoading && <Loader />}
      <div className="text-center">
        <h2>Welcome to your PhoneBook</h2>
        <p className="fs-5">
          Please{' '}
          <NavLink className="text-decoration-none" to="/login">
            sign in
          </NavLink>{' '}
          to access contacts
        </p>
      </div>
      <img src={catHome} alt="" />
      <p className="text-muted">
        {' '}
        <NavLink className="text-decoration-none" to="/register">
          Sign up
        </NavLink>{' '}
        if you haven't registered yet
      </p>
    </Box>
  );
};
export default Home;
