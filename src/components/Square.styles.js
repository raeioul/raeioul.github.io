import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  perspective: 500px;

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 8rem;
    width: 130px;
    height: 160px;
    user-select: none;
    cursor: pointer;
    transform: ${(p) => (p.activated || p.matched ? 'rotateY(180deg)' : 'rotateY(0)')};
    transform-style: preserve-3d;
    transition: transform 300ms;

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0 0 15px 0 #999;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
    }

    .front {
      background: var(--mango);

      h4 {
        color: #fff;
      }
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
