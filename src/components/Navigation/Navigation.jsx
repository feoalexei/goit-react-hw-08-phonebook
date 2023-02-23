import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selector';
import { MenuLink } from './Navigation.styled';

export const Navigation = () => {
  const hasToken = useSelector(selectToken);

  return (
    <nav className="d-flex">
      <MenuLink to="/">Home</MenuLink>
      {hasToken && <MenuLink to="/contacts">Contacts</MenuLink>}
    </nav>
  );
};
