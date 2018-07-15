import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Success = styled.h2`
  color: #f00;
  font-size: 10rem;
  margin: 2rem;
`;

export const SuccessButton = styled.button`
  background: #fff;
  color: var(--dust);
  border: 1px solid var(--mango);
  border-radius: 5px;
  font-size: 3rem;
  height: 50px;
  width: 200px;
  cursor: pointer;
`;
