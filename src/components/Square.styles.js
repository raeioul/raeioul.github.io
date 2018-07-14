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
    color: #fff;
    font-weight: 700;
    font-size: 8rem;
    width: 130px;
    height: 160px;
    transform: ${(p) => (p.activated ? 'rotateY(180deg)' : 'rotateY(0)')};
    transform-style: preserve-3d;
    transition: transform 300ms;

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
    }

    .front {
      background: #f00;
    }

    .back {
      background-color: var(--mango);
      background-image: url("${(p) => p.bgImg}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      transform: rotateY(180deg);
    }

    
  }
`;

export const Box = styled.div``;
