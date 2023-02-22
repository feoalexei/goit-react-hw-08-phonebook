import styled from 'styled-components';

const StyledFilter = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;

  & input {
    padding: ${p => p.theme.space[3]}px;
    border: 1px solid grey;
    border-radius: ${p => p.theme.radii.small};
    margin-left: ${p => p.theme.space[4]}px;
    flex: 1;
  }
`;

export { StyledFilter };
