import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  border: 1px solid black;
  perspective: 500px;

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 160px;
    transform-style: preserve-3d;
    transition: transform 300ms;

    .face {
      position: absolute;
      color: #fff;
      text-align: center;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
    }

    .front {
      background: #f00;
    }

    .back {
      background: var(--mango);
      transform: rotateY(180deg);
    }


  }

  &:hover .card {
    transform: rotateY(180deg);
  }
`;

export const Box = styled.div``;
