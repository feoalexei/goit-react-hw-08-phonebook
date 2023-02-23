import styled from 'styled-components';
import { IoIosLogOut } from 'react-icons/io';

const ActiveLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const UserEmail = styled.p`
  margin-bottom: 0;
  color: ${p => p.theme.colors.textGrey};
`;

const LogOutBtn = styled.button`
  width: max-content;
  background-color: transparent;
  color: #045a63;
  font-size: ${p => p.theme.fontSizes.m}px;
  border: 1px solid #045a63;
  border-radius: ${p => p.theme.radii.small};
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #c74936;
    color: #c74936;
  }
`;

const LogOutIcon = styled(IoIosLogOut)`
  font-size: ${p => p.theme.fontSizes.xl}px;
  fill: currentColor;
  margin-left: ${p => p.theme.space[3]}px;
  margin-bottom: 3px;
`;

export { ActiveLogin, UserEmail, LogOutBtn, LogOutIcon };
