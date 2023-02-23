import { useSelector } from 'react-redux';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectToken } from 'redux/auth/auth-selector';

export const AppBar = () => {
  const hasToken = useSelector(selectToken);
  return (
    <header className="d-flex justify-content-between pb-3 align-items-center">
      <Navigation />
      {hasToken ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
