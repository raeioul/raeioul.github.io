import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  perspective: 500px;

  @media (min-width: 450px) {
    width: 110px;
    height: 110px;
  }

  @media (min-width: 600px) {
    width: 150px;
    height: 180px;
  }
`;

const shoudlYRotate = props => {
  if (props.activated || props.matched) {
    return 'rotateY(180deg)';
  }
  return 'rotateY(0)';
};

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 8rem;
  width: 80px;
  height: 80px;
  border: 2px dotted ${p => (p.matched ? 'var(--mango)' : 'transparent')};
  border-radius: 5px;
  user-select: none;
  cursor: ${p => !p.matched && 'pointer'};
  transform: ${p => shoudlYRotate(p)};
  transform-style: preserve-3d;
  transition: transform 300ms;
  animation: ${p => p.matched && 'showBorder'} 1000ms ease-in-out forwards;

  :after {
    content: '\\2606';
    color: ${p => (p.matched ? 'var(--mango)' : 'transparent')};
    font-size: 5rem;

    @media (min-width: 450px) {
      font-size: inherit;
    }
  }

  @keyframes showBorder {
    from {
      border-color: transparent;
    }
    to {
      border-color: var(--mango);
    }
  }

  @media (min-width: 450px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 600px) {
    width: 130px;
    height: 160px;
  }
`;

const Face = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 25px 0 #999;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  color: #fff;
  background: ${p =>
    p.matched
      ? 'transparent'
      : 'linear-gradient(var(--mango), var(--dark-mango) 50%, var(--mango))'};
  animation: ${p => p.matched && 'fadeout'} 1s ease-in-out 300ms forwards;
  transition: background 0ms ease-in-out 1000ms, color 0ms ease-in-out 1000ms;

  @keyframes fadeout {
    from {
      transform: rotateY(180deg) translateY(0) scale(1);
      opacity: 1;
    }
    to {
      transform: rotateY(180deg) translateY(-30px) scale(1.1);
      opacity: 0;
    }
  }
`;

export const Back = styled.div`
  ${Face} :after {
    content: '?';

    font-family: 'Lobster', cursive;
    font-weight: initial;

    @media (min-width: 600px) {
      border: 2px solid #fff;
      padding: 2rem 3rem;
    }
  }
`;

export const Front = styled.div`
  ${Face}
  background-image: url("${p => p.image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotateY(180deg);
`;
