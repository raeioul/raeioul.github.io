import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 2rem;
  height: 50px;

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
  outline: none;
`;

export const Reset = styled.button`
  background: none;
  color: var(--dust);
  border: 1px solid var(--mango);
  outline: none;
`;
