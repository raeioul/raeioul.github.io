import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const MainHeader = styled.h1`
  position: relative;
  font-size: 8rem;
  margin: 3rem 0;
  text-align: center;

  @media (min-width: 680px) {
    &:after,
    &:before {
      content: '';
      position: absolute;
      display: block;
      border: 5px solid var(--dust);
      border-left: none;
      border-right: none;
      margin: 0 auto;
      width: 100px;
      height: 7px;
      top: 50%;
      z-index: -1;
    }

    &:before { right: 105%; }
    &:after { left: 105%; }
  }
`;
