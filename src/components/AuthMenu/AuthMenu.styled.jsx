import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLink = styled(NavLink)`
  color: #212529;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.l}px;

  & + & {
    margin-left: 15px;
  }
`;
