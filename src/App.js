// @flow
import React from 'react';
import { Wrapper, Container } from './App.styles';

import Square from './components/Square';

type Props = {};

const App = (props: Props) => {
  return (
    <Wrapper>
      <h1>Find the Difference</h1>
      <Container>
        <Square
          obverse="1"
          bgImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/1200px-Kitten_in_Rizal_Park%2C_Manila.jpg"
        />
        <Square
          obverse="2"
          bgImg="https://www.godspeedanimalcare.com/images/content/rehabilitation-center/doggie-playcare.jpg"
        />
        <Square
          obverse="3"
          bgImg="https://www.zoopraha.cz/images/stavby-expozice/Ostrov_lemuru.jpg"
        />
        <Square
          obverse="4"
          bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhh3OAq-MEt992I4kTute1hd8FUsc1cjqjKHOZrWkihw8M8aq"
        />
      </Container>
    </Wrapper>
  );
};

export default App;
