import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 2rem;

  > * {
    margin-bottom: 1rem;
  }

  @media (min-width: 400px) {
    flex-direction: row;

    > * {
      margin-right: 1rem;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  background: none;
  color: var(--dust);
  border: 1px solid var(--mango);
  border-radius: 5px;
  height: 40px;
  outline: none;
`;

export const Reset = styled.button`
  background: none;
  color: var(--dust);
  border: 1px solid var(--mango);
  border-radius: 5px;
  height: 40px;
  padding: 0 2rem;
  outline: none;
  transition: all 300ms ease-in-out;

  :hover {
    color: #fff;
    background: var(--mango);
  }
`;
