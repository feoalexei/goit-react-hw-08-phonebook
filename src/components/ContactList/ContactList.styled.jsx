import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: ${p => p.theme.space[5]}px;
  padding-left: 0;
`;
const NoContacts = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: 0;
  color: ${p => p.theme.colors.textGrey};
`;

export { StyledList, NoContacts };
