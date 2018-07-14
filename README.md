# Find the Pair

## Tools Used:
  - React 16.4
  - Styled Components
  - Flow (static type checker)
  - ESLint

## ToDo

- [x] create a sandbox Square component with div that will rotate in x axis on click event - each side should have a different color
- [x] Square component should return to it's original position after a specified amount of time
- [x] images will return to initial position only if two are selected
- [x] and only two images may be activated at the same time
- [x] create random array of cards (odd number, 2 for each selected image)
- [x] allow player to choose game's board size
- [ ] add reset button
- [ ] add timer
- [ ] add score table (top x)
- [ ] make it fully responsive
- [ ] move state to Redux store
- [ ] add persistence
- [ ] restyling
- [ ] add themes (plants, animals, GoT characters...?)
- [ ] add tests ;D

## Bugs

- [ ] - number of tries is incremented after timeout (hence the delay) - should be increased immediately
- [ ] clicking on matched images multiple times increments "matched" counter
- [x] - successfull match must reset timeout