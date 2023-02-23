import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selector';
import { signOutThunk } from '../../redux/auth/auth-thunk';
import {
  ActiveLogin,
  UserEmail,
  LogOutBtn,
  LogOutIcon,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    dispatch(signOutThunk());
  };

  return (
    <ActiveLogin>
      {user && <UserEmail>{user.email}</UserEmail>}
      <LogOutBtn onClick={handleSignOut} type="button">
        Log Out
        <LogOutIcon />
      </LogOutBtn>
    </ActiveLogin>
  );
};
