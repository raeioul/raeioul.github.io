import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  perspective: 500px;
`;

const shoudlYRotate = (props) => {
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
  width: 130px;
  height: 160px;
  border: 2px dotted ${(p) => (p.matched ? 'var(--mango)' : 'transparent')};
  border-radius: 5px;
  user-select: none;
  cursor: ${(p) => !p.matched && 'pointer'};
  transform: ${(p) => shoudlYRotate(p)};
  transform-style: preserve-3d;
  transition: transform 300ms;
  animation: ${(p) => p.matched && 'showBorder'} 1000ms ease-in-out forwards;

  :after {
    content: '\\2606';
    color: ${(p) => (p.matched ? 'var(--mango)' : 'transparent')};
  }

  @keyframes showBorder {
    from {
      border-color: transparent;
    }
    to {
      border-color: var(--mango);
    }
  }
`;

const Face = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 #999;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  animation: ${(p) => p.matched && 'fadeout'} 1s ease-in-out 300ms forwards;

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

export const Front = styled.div`
  ${Face} background: var(--mango);

  h4 {
    color: #fff;
  }
`;

export const Back = styled.div`
  ${Face}
  background-color: var(--mango);
  background-image: url("${(p) => p.bgImg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotateY(180deg);
`;
