import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  border: 1px solid black;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(p) => (p.activated ? 'lightblue' : '#9ecf9e')};
    width: 130px;
    height: 160px;
    transform: rotateY(0);
    transition: transform 300ms;

    > p {
      font-size: 8rem;
      line-height: 2;
      margin: 0;
    }
  }

  :hover div {
    transform: rotateY(180deg);

  }

`;

export const Box = styled.div`
`;
