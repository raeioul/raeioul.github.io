import styled from 'styled-components';

function setMaxWidth(props) {
  switch (props.cardNumber) {
    case 8:
      return '700px';
    case 16:
    case 24:
      return '1000px';
    default:
      return '1500px';
  }
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: ${(p) => setMaxWidth(p)};
  margin: 3rem 0;
`;

export default Wrapper;
