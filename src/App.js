// @flow
import * as React from 'react';
import { Wrapper, Container } from './App.styles';

import Square from './components/Square';

type Props = {};

type State = {
  activeCards: number,
  cards: Array<Object>,
};

class App extends React.Component<Props, State> {
  state = {
    activeCards: 0,
    cards: [
      {
        id: '1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/1200px-Kitten_in_Rizal_Park%2C_Manila.jpg',
      },
      {
        id: '2',
        image:
          'https://www.godspeedanimalcare.com/images/content/rehabilitation-center/doggie-playcare.jpg',
      },
      {
        id: '3',
        image:
          'https://www.zoopraha.cz/images/stavby-expozice/Ostrov_lemuru.jpg',
      },
      {
        id: '4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhh3OAq-MEt992I4kTute1hd8FUsc1cjqjKHOZrWkihw8M8aq',
      },
      {
        id: '5',
        image:
          'http://cdn0.wideopenpets.com/wp-content/uploads/2018/02/Untitled-design-11-770x405.png',
      },
    ],
  };

  handleIncreateCardCounter = () => {
    this.setState((prevState) => ({ activeCards: prevState.activeCards + 1 }));
  };

  handleDecreaseCardCounter = () => {
    this.setState((prevState) => ({ activeCards: prevState.activeCards - 1 }));
  };

  renderCards = () => {
    return this.state.cards.map((card) => (
      <Square
        key={card.id}
        noActivated={this.state.activeCards}
        increaseCounter={this.handleIncreateCardCounter}
        decreaseCounter={this.handleDecreaseCardCounter}
        front={card.id}
        image={card.image}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <h1>Find the Difference</h1>
        <Container>
          {this.renderCards()}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
