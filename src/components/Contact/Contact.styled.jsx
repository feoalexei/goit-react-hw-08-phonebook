import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.l}px;
`;
const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
`;

const ContactIcon = styled(FaUserCircle)`
  font-size: ${p => p.theme.fontSizes.xl}px;
  color: #c74936;
  margin-right: ${p => p.theme.space[3]}px;
  margin-bottom: -5px;
`;

const Dots = styled.div`
  flex: 1;
  align-self: end;
  margin-left: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 3px dotted gray;
`;

const Number = styled.span`
  margin-left: auto;
  margin-right: ${p => p.theme.space[4]}px;
`;

const DeleteBtn = styled.button`
  width: max-content;
  background-color: #087582;
  color: #fff;
  font-size: ${p => p.theme.fontSizes.m}px;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #045a63;
  }
`;

export { StyledContact, ContactIcon, Name, Number, Dots, DeleteBtn };
