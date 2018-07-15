import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
`;

export const SuccessWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 5rem;
  border-radius: 5px;
  z-index: 1;

  animation: fade-in 500ms ease-in-out forwards;

  @keyframes fade-in {
    from {
      transform: translateY(-300px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  margin: 2rem 0;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  :hover {
    background: var(--mango);
    color: #fff;
  }
`;
